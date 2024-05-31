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
  FleetPatch,
  FleetsUpdateOptionalParams,
  ContainerServiceFleetClient,
} from "@azure/arm-containerservicefleet";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a Fleet
 *
 * @summary Update a Fleet
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2024-04-01/examples/Fleets_PatchTags.json
 */
async function updateAFleet() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const ifMatch = "dfjkwelr7384";
  const fleetName = "fleet1";
  const properties: FleetPatch = { tags: { env: "prod", tier: "secure" } };
  const options: FleetsUpdateOptionalParams = { ifMatch };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleets.beginUpdateAndWait(
    resourceGroupName,
    fleetName,
    properties,
    options,
  );
  console.log(result);
}

async function main() {
  updateAFleet();
}

main().catch(console.error);
