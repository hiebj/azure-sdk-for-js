/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { P2SVpnGateway, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
 *
 * @summary Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-11-01/examples/P2SVpnGatewayPut.json
 */
async function p2SVpnGatewayPut() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "p2sVpnGateway1";
  const p2SVpnGatewayParameters: P2SVpnGateway = {
    customDnsServers: ["1.1.1.1", "2.2.2.2"],
    isRoutingPreferenceInternet: false,
    location: "West US",
    p2SConnectionConfigurations: [
      {
        name: "P2SConnectionConfig1",
        id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/p2sVpnGateways/p2sVpnGateway1/p2sConnectionConfigurations/P2SConnectionConfig1",
        routingConfiguration: {
          associatedRouteTable: {
            id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",
          },
          propagatedRouteTables: {
            ids: [
              {
                id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",
              },
              {
                id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable2",
              },
              {
                id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable3",
              },
            ],
            labels: ["label1", "label2"],
          },
          vnetRoutes: { staticRoutes: [] },
        },
        vpnClientAddressPool: { addressPrefixes: ["101.3.0.0/16"] },
      },
    ],
    tags: { key1: "value1" },
    virtualHub: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1",
    },
    vpnGatewayScaleUnit: 1,
    vpnServerConfiguration: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnServerConfigurations/vpnServerConfiguration1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginCreateOrUpdateAndWait(
    resourceGroupName,
    gatewayName,
    p2SVpnGatewayParameters,
  );
  console.log(result);
}

async function main() {
  p2SVpnGatewayPut();
}

main().catch(console.error);
