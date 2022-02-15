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
 * This sample demonstrates how to Create or update a VM scale set.
 *
 * @summary Create or update a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/CreateOrUpdateAScaleSetWithCapacityReservation.json
 */
import {
  VirtualMachineScaleSet,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateAScaleSetWithCapacityReservation() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "{vmss-name}";
  const parameters: VirtualMachineScaleSet = {
    location: "westus",
    overprovision: true,
    sku: { name: "Standard_DS1_v2", capacity: 3, tier: "Standard" },
    upgradePolicy: { mode: "Manual" },
    virtualMachineProfile: {
      capacityReservation: {
        capacityReservationGroup: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/CapacityReservationGroups/{crgName}"
        }
      },
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: "{vmss-name}",
            enableIPForwarding: true,
            ipConfigurations: [
              {
                name: "{vmss-name}",
                subnet: {
                  id:
                    "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}"
                }
              }
            ],
            primary: true
          }
        ]
      },
      osProfile: {
        adminPassword: "{your-password}",
        adminUsername: "{your-username}",
        computerNamePrefix: "{vmss-name}"
      },
      storageProfile: {
        imageReference: {
          offer: "WindowsServer",
          publisher: "MicrosoftWindowsServer",
          sku: "2016-Datacenter",
          version: "latest"
        },
        osDisk: {
          caching: "ReadWrite",
          createOption: "FromImage",
          managedDisk: { storageAccountType: "Standard_LRS" }
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters
  );
  console.log(result);
}

createOrUpdateAScaleSetWithCapacityReservation().catch(console.error);
