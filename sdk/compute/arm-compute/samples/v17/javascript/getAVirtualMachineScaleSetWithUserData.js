/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Display information about a virtual machine scale set.
 *
 * @summary Display information about a virtual machine scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/GetVirtualMachineScaleSetWithUserData.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function getAVirtualMachineScaleSetWithUserData() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.get(resourceGroupName, vmScaleSetName);
  console.log(result);
}

getAVirtualMachineScaleSetWithUserData().catch(console.error);
