const { getCCP,getWallets } = require("../utils/buildCCP");
const { Wallets, Gateway } = require('fabric-network');
const path = require("path");
const {buildWallet} =require('../utils/AppUtils')


exports.invokeTransaction = async (cp, channelName, chaincodeName, functionName, request, schema) => {
    
    let org = request.user.org;

    console.log("tetingigigg",request.user.org,request.user)
    let num = Number(org.match(/\d/g).join(""));

    const ccp = getCCP(num);

    const walletPath = await getWallets(num);

    console.log("wallet path is",walletPath);

    const wallet = await buildWallet(Wallets, walletPath);

    const gateway = new Gateway();

    await gateway.connect(ccp, {
        wallet,
        identity: request.user.userName,
        discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
    });

    // Build a network instance based on the channel where the smart contract is deployed
    const network = await gateway.getNetwork(channelName);

    // Get the contract from the network.
    const contract = network.getContract(chaincodeName);


    var userinputs = "";

    if (request.originalUrl.indexOf('/create') >= 0) {
        if (schema.length !== 0) {
            var str = [];

            for (var q = 0; q < schema.length; q++) {
                // console.log("schema[q]-------",q,schema[q])
                    if(schema[q]!=='undefined' && schema[q]!==undefined)
                    {
                        var key = schema[q].name;
                        console.log("request.body-KEY--",key,request.body[key])

                        str.push(request.body[key]);

                    }

            }
        }
        if (request.originalUrl.indexOf('/participantapi/') >= 0) {
            var mondoDB = global.db;
            var q = { Participant_id: request.body.Participant_id };
            mondoDB.collection('participants').findOne(q, function (err, result) {
                if (result && result != null) {
                    var response = { "status": false, "msg": "Participant already exists!!!" }
                    return response;
                }
                else {
                    var q = request.body;
                    mondoDB.collection('participants').insertOne(request.body, function (err, result) {
                        var response = { "status": true, "msg": "Successfully added the Participant !!!" }
                        return response;
                    });
                }
            });
        }
        for (var s = 0; s < str.length; s++) {
            console.log("request.body--CREATE-", str[s])
            // userinputs.push(str[s])
            if (userinputs === "") {
                userinputs = str[s].toString();
            } else {
                // userinputs = userinputs + "^^" + JSON.stringify(str[s]);
                userinputs = userinputs + "^^" + str[s].toString();
            }
        }
    }

    if (request.originalUrl.indexOf('/update') >= 0) {
        if (schema.length !== 0) {
            var str = [];

            for (var q = 0; q < schema.length; q++) {
                if(schema[q]!=='undefined' && schema[q]!==undefined)
                {
                var key = schema[q].name;
                console.log("request.body-UPDATE--",key,request.body[key])
                str.push(request.body[key]);

                }
        }
        }
        
        for (var s = 0; s < str.length; s++) {
            console.log("request.body-UPDATE--", str[s])

            if (userinputs === "") {
                userinputs = str[s].toString();
            } else {
                userinputs = userinputs +  "^^"  + str[s].toString();
            }

        }
    }

    if (request.originalUrl.indexOf('/delete') >= 0) {
        userinputs = request.body.id;
    }


    console.log("userinputs is ",userinputs)

    const transaction = contract.createTransaction(functionName);
    const result = await transaction.submit(userinputs);

    console.log("Result:", result.toString())
    console.log("TxID:", transaction.getTransactionId());
    var obj = {"Success":true,"Txn ID":transaction.getTransactionId(),"statusCode":200};

    return obj;
}