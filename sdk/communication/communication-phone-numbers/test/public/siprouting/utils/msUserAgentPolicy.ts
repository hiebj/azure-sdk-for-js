// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import { env } from "@azure-tools/test-recorder";

export function createMSUserAgentPolicy(mockedUserAgent: boolean): PipelinePolicy {
  return {
    name: "msUserAgentPolicy",
    async sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      const useragent = env.AZURE_USERAGENT_OVERRIDE;
      if (useragent) {
        request.headers.set(userAgentKey, useragent);
      }
      if (mockedUserAgent) {
        request.headers.set(userAgentKey, userAgentValue);
      }

      return next(request);
    },
  };
}
