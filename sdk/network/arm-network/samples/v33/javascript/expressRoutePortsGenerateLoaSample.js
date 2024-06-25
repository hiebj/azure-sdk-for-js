/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Generate a letter of authorization for the requested ExpressRoutePort resource.
 *
 * @summary Generate a letter of authorization for the requested ExpressRoutePort resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-11-01/examples/GenerateExpressRoutePortsLOA.json
 */
async function generateExpressRoutePortLoa() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const expressRoutePortName = "portName";
  const request = {
    customerName: "customerName",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePorts.generateLOA(
    resourceGroupName,
    expressRoutePortName,
    request,
  );
  console.log(result);
}

async function main() {
  generateExpressRoutePortLoa();
}

main().catch(console.error);
