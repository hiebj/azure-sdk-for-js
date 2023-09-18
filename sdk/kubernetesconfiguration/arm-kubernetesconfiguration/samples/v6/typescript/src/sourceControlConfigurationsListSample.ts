/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SourceControlConfigurationClient } from "@azure/arm-kubernetesconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all Source Control Configurations.
 *
 * @summary List all Source Control Configurations.
 * x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/stable/2023-05-01/examples/ListSourceControlConfiguration.json
 */
async function listSourceControlConfiguration() {
  const subscriptionId =
    process.env["KUBERNETESCONFIGURATION_SUBSCRIPTION_ID"] || "subId1";
  const resourceGroupName =
    process.env["KUBERNETESCONFIGURATION_RESOURCE_GROUP"] || "rg1";
  const clusterRp = "Microsoft.Kubernetes";
  const clusterResourceName = "connectedClusters";
  const clusterName = "clusterName1";
  const credential = new DefaultAzureCredential();
  const client = new SourceControlConfigurationClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.sourceControlConfigurations.list(
    resourceGroupName,
    clusterRp,
    clusterResourceName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listSourceControlConfiguration();
}

main().catch(console.error);
