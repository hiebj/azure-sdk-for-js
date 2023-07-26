// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { ClientContext } from "../../ClientContext";
import { Constants, getIdFromLink, getPathFromLink, OperationType, ResourceType } from "../../common";
import { RequestOptions } from "../../request";
import { Container } from "../Container";
import { ConflictDefinition } from "./ConflictDefinition";
import { ConflictResponse } from "./ConflictResponse";
import { undefinedPartitionKey } from "../../extractPartitionKey";
import { PartitionKey } from "../../documents";
import { DiagnosticNodeInternal, DiagnosticNodeType, prepareClientOperationData } from "../../CosmosDiagnostics";

/**
 * Use to read or delete a given {@link Conflict} by id.
 *
 * @see {@link Conflicts} to query or read all conflicts.
 */
export class Conflict {
  /**
   * Returns a reference URL to the resource. Used for linking in Permissions.
   */
  public get url(): string {
    return `/${this.container.url}/${Constants.Path.ConflictsPathSegment}/${this.id}`;
  }
  /**
   * @hidden
   * @param container - The parent {@link Container}.
   * @param id - The id of the given {@link Conflict}.
   */
  constructor(
    public readonly container: Container,
    public readonly id: string,
    private readonly clientContext: ClientContext,
    private partitionKey?: PartitionKey
  ) {
    this.partitionKey = partitionKey;
  }

  /**
   * Read the {@link ConflictDefinition} for the given {@link Conflict}.
   */
  public async read(options?: RequestOptions): Promise<ConflictResponse> {
    const path = getPathFromLink(this.url, ResourceType.conflicts);
    const id = getIdFromLink(this.url);
    const diagnosticNode = new DiagnosticNodeInternal(DiagnosticNodeType.CLIENT_REQUEST, null, prepareClientOperationData(ResourceType.conflicts, OperationType.Read));

    const response = await this.clientContext.read<ConflictDefinition>({
      path,
      resourceType: ResourceType.user,
      resourceId: id,
      options,
      diagnosticNode
    });

    return new ConflictResponse(
      response.result,
      response.headers,
      response.code,
      this,
      diagnosticNode.toDiagnostic()
    );
  }

  /**
   * Delete the given {@link ConflictDefinition}.
   */
  public async delete(options?: RequestOptions): Promise<ConflictResponse> {
    const diagnosticNode = new DiagnosticNodeInternal(DiagnosticNodeType.CLIENT_REQUEST, null, prepareClientOperationData(ResourceType.conflicts, OperationType.Delete));
    if (this.partitionKey === undefined) {
      const { resource: partitionKeyDefinition } =
        await this.container.readPartitionKeyDefinition(diagnosticNode);
      this.partitionKey = undefinedPartitionKey(partitionKeyDefinition);
    }
    const path = getPathFromLink(this.url);
    const id = getIdFromLink(this.url);

    const response = await this.clientContext.delete<ConflictDefinition>({
      path,
      resourceType: ResourceType.conflicts,
      resourceId: id,
      options,
      partitionKey: this.partitionKey,
      diagnosticNode
    });
    return new ConflictResponse(
      response.result,
      response.headers,
      response.code,
      this,
      diagnosticNode.toDiagnostic()
    );
  }
}
