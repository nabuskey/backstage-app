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
import { IoArgoprojEventsV1alpha1Condition } from './ioArgoprojEventsV1alpha1Condition';

/**
* Status is a common structure which can be used for Status field.
*/
export class IoArgoprojEventsV1alpha1Status {
    'conditions'?: Array<IoArgoprojEventsV1alpha1Condition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoArgoprojEventsV1alpha1Condition>"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1Status.attributeTypeMap;
    }
}

