#!/bin/bash
            
echo "************ Package motherboard chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/motherboard/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package motherboard.tar.gz --path /opt/gopath/src/github.com/chaincode/motherboard/ --lang golang --label motherboard_1.0

echo "************ Package purchaseorder chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/purchaseorder/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package purchaseorder.tar.gz --path /opt/gopath/src/github.com/chaincode/purchaseorder/ --lang golang --label purchaseorder_1.0

echo "************ Package proformainvoice chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/proformainvoice/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package proformainvoice.tar.gz --path /opt/gopath/src/github.com/chaincode/proformainvoice/ --lang golang --label proformainvoice_1.0

echo "************ Package shipping chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/shipping/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package shipping.tar.gz --path /opt/gopath/src/github.com/chaincode/shipping/ --lang golang --label shipping_1.0

echo "************ Package warehouse chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/warehouse/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package warehouse.tar.gz --path /opt/gopath/src/github.com/chaincode/warehouse/ --lang golang --label warehouse_1.0

echo "************ Package manufacturer chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/manufacturer/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package manufacturer.tar.gz --path /opt/gopath/src/github.com/chaincode/manufacturer/ --lang golang --label manufacturer_1.0

echo "************ Package distributor chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/distributor/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package distributor.tar.gz --path /opt/gopath/src/github.com/chaincode/distributor/ --lang golang --label distributor_1.0

echo "************ Package logistics chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/logistics/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode package logistics.tar.gz --path /opt/gopath/src/github.com/chaincode/logistics/ --lang golang --label logistics_1.0

echo "***************** Install motherboard chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install motherboard.tar.gz

echo "***************** Install purchaseorder chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install purchaseorder.tar.gz

echo "***************** Install proformainvoice chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install proformainvoice.tar.gz

echo "***************** Install shipping chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install shipping.tar.gz

echo "***************** Install warehouse chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install warehouse.tar.gz

echo "***************** Install manufacturer chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install manufacturer.tar.gz

echo "***************** Install distributor chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install distributor.tar.gz

echo "***************** Install logistics chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/users/Admin@org1.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org1.supplychain.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.supplychain.com/peers/peer0.org1.supplychain.com/tls/ca.crt 
peer lifecycle chaincode install logistics.tar.gz

