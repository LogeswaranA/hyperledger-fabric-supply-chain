#!/bin/bash
            
docker exec cli-org1 scripts/commit-motherboard.sh
docker exec cli-org1 scripts/commit-purchaseorder.sh
docker exec cli-org1 scripts/commit-proformainvoice.sh
docker exec cli-org1 scripts/commit-shipping.sh
docker exec cli-org1 scripts/commit-warehouse.sh
docker exec cli-org1 scripts/commit-manufacturer.sh
docker exec cli-org1 scripts/commit-distributor.sh
docker exec cli-org1 scripts/commit-logistics.sh
