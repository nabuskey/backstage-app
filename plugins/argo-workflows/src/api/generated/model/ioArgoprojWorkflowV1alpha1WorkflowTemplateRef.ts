// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* WorkflowTemplateRef is a reference to a WorkflowTemplate resource.
*/
export class IoArgoprojWorkflowV1alpha1WorkflowTemplateRef {
    /**
    * ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).
    */
    'clusterScope'?: boolean;
    /**
    * Name is the resource name of the workflow template.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterScope",
            "baseName": "clusterScope",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1WorkflowTemplateRef.attributeTypeMap;
    }
}

