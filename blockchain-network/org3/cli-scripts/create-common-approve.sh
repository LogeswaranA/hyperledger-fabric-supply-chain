#!/bin/bash
            
echo "***************** queryinstalled motherboard chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/motherboard_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg motherboard chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name motherboard --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness motherboard chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name motherboard --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled purchaseorder chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/purchaseorder_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg purchaseorder chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name purchaseorder --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness purchaseorder chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name purchaseorder --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled proformainvoice chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/proformainvoice_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg proformainvoice chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name proformainvoice --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness proformainvoice chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name proformainvoice --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled shipping chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/shipping_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg shipping chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name shipping --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness shipping chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name shipping --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled warehouse chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/warehouse_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg warehouse chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name warehouse --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness warehouse chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name warehouse --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled manufacturer chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/manufacturer_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg manufacturer chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name manufacturer --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness manufacturer chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name manufacturer --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled distributor chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/distributor_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg distributor chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name distributor --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness distributor chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name distributor --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** queryinstalled logistics chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode queryinstalled >&log.txt
                    { set +x; } 2>/dev/null
                    cat log.txt
                    PACKAGE_ID=$(sed -n "/logistics_1.0/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
                    
echo "***************** ApproveforMyOrg logistics chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode approveformyorg -o orderer1.orderer.supplychain.com:7050 --ordererTLSHostnameOverride orderer1.orderer.supplychain.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem --channelID common --name logistics --version 1.0 --package-id $PACKAGE_ID --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
echo "***************** checkCommitReadiness logistics chaincode ***************"
                    CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
                    peer lifecycle chaincode checkcommitreadiness --channelID common --name logistics --version 1.0 --sequence 1    --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer' )"
                    
