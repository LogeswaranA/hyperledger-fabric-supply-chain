const { Wallets } = require("fabric-network");
const FabricCAServices = require('fabric-ca-client');

const { buildCAClient, registerAndEnrollUser, enrollAdmin } = require("../utils/CAUtil")
const { buildCCPOrg1, buildCCPOrg2, buildWallet, buildCCPOrg3 } = require("../utils/AppUtils");
const { getCCP,getWallets,getCredentials } = require("../utils/buildCCP");


exports.enrollAdmin = async ({ OrgMSP, userId }) => {

    let org = Number(OrgMSP.match(/\d/g).join(""));

    console.log("orga value is",org)

    let ccp = getCCP(org);

    let walletPath = getWallets(org);

    console.log("walletPath",walletPath)

    const caClient = buildCAClient(FabricCAServices, ccp, `ca.org${org}.supplychain.com`);

    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);

    // in a real application this would be done on an administrative flow, and only once
    await enrollAdmin(caClient, wallet, OrgMSP);

    return {
        wallet
    }
}