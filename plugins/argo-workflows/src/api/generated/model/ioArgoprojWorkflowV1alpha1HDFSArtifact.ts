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
import { IoK8sApiCoreV1ConfigMapKeySelector } from './ioK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

/**
* HDFSArtifact is the location of an HDFS artifact
*/
export class IoArgoprojWorkflowV1alpha1HDFSArtifact {
    /**
    * Addresses is accessible addresses of HDFS name nodes
    */
    'addresses'?: Array<string>;
    /**
    * Force copies a file forcibly even if it exists
    */
    'force'?: boolean;
    /**
    * HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used.
    */
    'hdfsUser'?: string;
    'krbCCacheSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'krbConfigConfigMap'?: IoK8sApiCoreV1ConfigMapKeySelector;
    'krbKeytabSecret'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.
    */
    'krbRealm'?: string;
    /**
    * KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.
    */
    'krbServicePrincipalName'?: string;
    /**
    * KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.
    */
    'krbUsername'?: string;
    /**
    * Path is a file path in HDFS
    */
    'path': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "force",
            "baseName": "force",
            "type": "boolean"
        },
        {
            "name": "hdfsUser",
            "baseName": "hdfsUser",
            "type": "string"
        },
        {
            "name": "krbCCacheSecret",
            "baseName": "krbCCacheSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "krbConfigConfigMap",
            "baseName": "krbConfigConfigMap",
            "type": "IoK8sApiCoreV1ConfigMapKeySelector"
        },
        {
            "name": "krbKeytabSecret",
            "baseName": "krbKeytabSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "krbRealm",
            "baseName": "krbRealm",
            "type": "string"
        },
        {
            "name": "krbServicePrincipalName",
            "baseName": "krbServicePrincipalName",
            "type": "string"
        },
        {
            "name": "krbUsername",
            "baseName": "krbUsername",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1HDFSArtifact.attributeTypeMap;
    }
}

