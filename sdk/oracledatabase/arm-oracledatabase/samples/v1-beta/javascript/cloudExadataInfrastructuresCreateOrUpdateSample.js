/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { OracleDatabaseManagementClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a CloudExadataInfrastructure
 *
 * @summary Create a CloudExadataInfrastructure
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/preview/2023-09-01-preview/examples/exaInfra_create.json
 */
async function createExadataInfrastructure() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudexadatainfrastructurename = "infra1";
  const resource = {
    location: "eastus",
    properties: {
      computeCount: 100,
      displayName: "infra 1",
      shape: "EXADATA.X9M",
      storageCount: 10,
    },
    tags: { tagK1: "tagV1" },
    zones: ["1"],
  };
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.cloudExadataInfrastructures.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudexadatainfrastructurename,
    resource,
  );
  console.log(result);
}

async function main() {
  createExadataInfrastructure();
}

main().catch(console.error);
