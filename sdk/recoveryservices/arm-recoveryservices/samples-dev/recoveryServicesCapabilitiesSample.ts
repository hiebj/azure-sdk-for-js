/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ResourceCapabilities,
  RecoveryServicesClient,
} from "@azure/arm-recoveryservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to API to get details about capabilities provided by Microsoft.RecoveryServices RP
 *
 * @summary API to get details about capabilities provided by Microsoft.RecoveryServices RP
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/Capabilities.json
 */
async function capabilitiesForMicrosoftRecoveryServicesOrVaults() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const location = "westus";
  const input: ResourceCapabilities = {
    type: "Microsoft.RecoveryServices/Vaults",
    properties: {
      dnsZones: [
        { subResource: "AzureBackup" },
        { subResource: "AzureSiteRecovery" },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.recoveryServices.capabilities(location, input);
  console.log(result);
}

async function main() {
  capabilitiesForMicrosoftRecoveryServicesOrVaults();
}

main().catch(console.error);
