const { buildCCPOrg1, buildCCPOrg2, buildCCPOrg3, buildCCPOrg4, buildCCPOrg5 } = require("./AppUtils");

const path = require('path');

exports.getCCP = (org) => {
    let ccp;
    switch (org) {
        case 1:
            ccp = buildCCPOrg1();
            break;
        case 2:
            ccp = buildCCPOrg2();
            break;
        case 3:
            ccp = buildCCPOrg3();
            break;
        case 4:
            ccp = buildCCPOrg4();
            break;
        case 5:
            ccp = buildCCPOrg5();
            break;
    }
    return ccp;
}

exports.getWallets = (org) => {
    let wallet;
    switch (org) {
        case 1:
            wallet = path.join(__dirname, '../wallets', "org1wallet")
            break;
        case 2:
            wallet = path.join(__dirname, '../wallets', "org2wallet")
            break;
        case 3:
            wallet = path.join(__dirname, '../wallets', "org3wallet")
            break;
        case 4:
            wallet = path.join(__dirname, '../wallets', "org4wallet")
            break;
        case 5:
            wallet = path.join(__dirname, '../wallets', "org5wallet")
            break;
    }
    console.log("wallet value is", wallet)
    return wallet;
}

exports.getCredentials = async (org) => {
    var adminid;
    var adminpwd;
    switch (org) {
        case 1:
            adminid = 'supplychainorg1';
            adminpwd = 'p@ssw0rd';
            break;
        case 2:
            adminid = 'supplychainorg2';
            adminpwd = 'p@ssw0rd';
            break;
        case 3:
            adminid = 'supplychainorg3';
            adminpwd = 'p@ssw0rd';
            break;
        case 4:
            adminid = 'supplychainorg4';
            adminpwd = 'p@ssw0rd';
            break;
        case 5:
            adminid = 'supplychainorg5';
            adminpwd = 'p@ssw0rd';
            break;
    }
    console.log("adminid, adminpwd", adminid, adminpwd)
    return [adminid, adminpwd];
}
