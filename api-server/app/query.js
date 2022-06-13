const { Wallets, Gateway } = require('fabric-network');
const { buildWallet } = require('../utils/AppUtils')
const { getCCP,getWallets } = require("../utils/buildCCP");


exports.query = async (cp, channelName, chaincodeName, functionName, request, schema) => {

    try {
        let org = request.user.org;
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
        // let data = Object.values(request.data);
        // let result = await contract.evaluateTransaction(...data);


        if (functionName === 'get' || functionName === 'history') {
            const result = await contract.evaluateTransaction(functionName, request.params.id.toString());
            console.log(`Transaction has been evaluated, result is: ${result}`);
            var dataout = []
            if (result != '') {
                dataout = JSON.parse(result.toString());
            }
            var response = {
                status: true,
                data: JSON.parse(result.toString()),
                message: 'Transaction has been evaluated.',
            };
            return response;
        }

        if (functionName === 'querystring') {

            var queryString = request.body;
            console.log("+====queryString====", queryString, request.body);
            const result = await contract.evaluateTransaction(functionName, JSON.stringify(queryString));
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            var response = {
                status: true,
                data: JSON.parse(result.toString()),
                message: 'Transaction has been evaluated.',
            };
            return response;
        }

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        var response = {
            status: false,
            message: 'Failed to get transaction::' + error,
        };
        return response;

    }
}