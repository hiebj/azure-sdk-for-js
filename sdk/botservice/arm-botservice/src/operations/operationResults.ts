/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/operationResultsMappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";

/** Class representing a OperationResults. */
export class OperationResults {
  private readonly client: AzureBotServiceContext;

  /**
   * Create a OperationResults.
   * @param {AzureBotServiceContext} client Reference to the service client.
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Get the operation result for a long running operation.
   * @param operationResultId The ID of the operation result to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationResultsGetResponse>
   */
  get(operationResultId: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationResultsGetResponse> {
    return this.beginGet(operationResultId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OperationResultsGetResponse>;
  }

  /**
   * Get the operation result for a long running operation.
   * @param operationResultId The ID of the operation result to get.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginGet(operationResultId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        operationResultId,
        options
      },
      beginGetOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginGetOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.BotService/operationresults/{operationResultId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.operationResultId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultsDescription
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
