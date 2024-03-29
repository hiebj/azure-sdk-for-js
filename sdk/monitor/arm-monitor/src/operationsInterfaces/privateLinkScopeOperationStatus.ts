/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkScopeOperationStatusGetOptionalParams,
  PrivateLinkScopeOperationStatusGetResponse,
} from "../models";

/** Interface representing a PrivateLinkScopeOperationStatus. */
export interface PrivateLinkScopeOperationStatus {
  /**
   * Get the status of an azure asynchronous operation associated with a private link scope operation.
   * @param asyncOperationId The operation Id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    asyncOperationId: string,
    resourceGroupName: string,
    options?: PrivateLinkScopeOperationStatusGetOptionalParams,
  ): Promise<PrivateLinkScopeOperationStatusGetResponse>;
}
