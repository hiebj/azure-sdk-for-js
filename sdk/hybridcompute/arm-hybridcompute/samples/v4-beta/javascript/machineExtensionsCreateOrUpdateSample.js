/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridComputeManagementClient } = require("@azure/arm-hybridcompute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-03-31-preview/examples/extension/Extension_CreateOrUpdate.json
 */
async function createOrUpdateAMachineExtension() {
  const subscriptionId = process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName = process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const extensionName = "CustomScriptExtension";
  const extensionParameters = {
    location: "eastus2euap",
    properties: {
      type: "CustomScriptExtension",
      publisher: "Microsoft.Compute",
      settings: {
        commandToExecute: 'powershell.exe -c "Get-Process | Where-Object { $_.CPU -gt 10000 }"',
      },
      typeHandlerVersion: "1.10",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machineExtensions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    machineName,
    extensionName,
    extensionParameters,
  );
  console.log(result);
}

async function main() {
  createOrUpdateAMachineExtension();
}

main().catch(console.error);
