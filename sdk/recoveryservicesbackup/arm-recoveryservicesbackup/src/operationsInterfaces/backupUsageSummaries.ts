/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BackupManagementUsage,
  BackupUsageSummariesListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupUsageSummaries. */
export interface BackupUsageSummaries {
  /**
   * Fetches the backup management usage summaries of the vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupUsageSummariesListOptionalParams,
  ): PagedAsyncIterableIterator<BackupManagementUsage>;
}
