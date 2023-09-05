/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine
whether the backend service has finished processing the request, call Get Container Operation Result API.
 *
 * @summary Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine
whether the backend service has finished processing the request, call Get Container Operation Result API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-04-01/examples/AzureWorkload/ProtectionContainers_Unregister.json
 */
async function unregisterProtectionContainer() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "testVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "testRg";
  const fabricName = "Azure";
  const containerName = "storagecontainer;Storage;test-rg;teststorage";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionContainers.unregister(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName
  );
  console.log(result);
}

async function main() {
  unregisterProtectionContainer();
}

main().catch(console.error);
