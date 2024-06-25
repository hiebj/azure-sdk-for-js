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
  CsmPublishingCredentialsPoliciesEntity,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Description for Updates whether FTP is allowed on the site or not.
 *
 * @summary Description for Updates whether FTP is allowed on the site or not.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/UpdatePublishingCredentialsPolicySlot.json
 */
async function updateFtpAllowed() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testSite";
  const slot = "stage";
  const csmPublishingAccessPoliciesEntity: CsmPublishingCredentialsPoliciesEntity =
    { allow: true };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.updateFtpAllowedSlot(
    resourceGroupName,
    name,
    slot,
    csmPublishingAccessPoliciesEntity,
  );
  console.log(result);
}

async function main() {
  updateFtpAllowed();
}

main().catch(console.error);
