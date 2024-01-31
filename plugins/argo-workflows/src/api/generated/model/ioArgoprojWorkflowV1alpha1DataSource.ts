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
import { IoArgoprojWorkflowV1alpha1ArtifactPaths } from './ioArgoprojWorkflowV1alpha1ArtifactPaths';

/**
* DataSource sources external data into a data template
*/
export class IoArgoprojWorkflowV1alpha1DataSource {
    'artifactPaths'?: IoArgoprojWorkflowV1alpha1ArtifactPaths;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "artifactPaths",
            "baseName": "artifactPaths",
            "type": "IoArgoprojWorkflowV1alpha1ArtifactPaths"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1DataSource.attributeTypeMap;
    }
}

