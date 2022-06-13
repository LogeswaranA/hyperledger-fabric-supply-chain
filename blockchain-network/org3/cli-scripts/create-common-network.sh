#!/bin/bash
echo "***************** Fetch Channel Block ***************"
peer channel fetch 0 common.block -c common -o orderer1.orderer.supplychain.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem


echo "***************** peer0 - Join common Channel ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
peer channel join -b common.block


echo "***************** Update Anchor Peer ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer0.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer0.org3.supplychain.com/tls/ca.crt 
peer channel update -o orderer1.orderer.supplychain.com:7050 -c common -f ./channel/commonorg3AnchorPeer.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.supplychain.com-cert.pem


echo "***************** peer1 - Join common Channel ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/users/Admin@org3.supplychain.com/msp CORE_PEER_ADDRESS=peer1.org3.supplychain.com:7051 CORE_PEER_LOCALMSPID="org3MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.supplychain.com/peers/peer1.org3.supplychain.com/tls/ca.crt 
peer channel join -b common.block


