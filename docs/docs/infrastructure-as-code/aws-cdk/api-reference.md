---
sidebar_position: 2
description: API Reference of Buttonize AWS CDK constructs
---
		# API Reference
<p>
	<a href="https://discord.gg/2quY4Vz5BM"><img alt="Discord" src="https://img.shields.io/discord/1038752242238496779?style=flat-square" /></a>&nbsp;
	<a href="https://www.npmjs.com/package/@buttonize/cdk"><img alt="npm" src="https://img.shields.io/npm/v/@buttonize/cdk?style=flat-square" /></a>&nbsp;
	<a href="https://github.com/buttonize/buttonize-cdk/actions/workflows/release.yml?query=branch%3Amaster"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/buttonize/buttonize-cdk/release.yml?branch=master&style=flat-square" /></a>
</p>
<img src="/img/cdk.png" style={{ height: "100px", marginTop: "10px" }}/>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsBasicIntegration <a name="AwsBasicIntegration" id="@buttonize/cdk.AwsBasicIntegration"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.AwsBasicIntegration.Initializer"></a>

```typescript
import { AwsBasicIntegration } from '@buttonize/cdk'

new AwsBasicIntegration(scope: Construct, id: string, __2: AwsBasicIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.__2">__2</a></code> | <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps">AwsBasicIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="@buttonize/cdk.AwsBasicIntegration.Initializer.parameter.__2"></a>

- *Type:* <a href="#@buttonize/cdk.AwsBasicIntegrationProps">AwsBasicIntegrationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.AwsBasicIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.AwsBasicIntegration.isConstruct"></a>

```typescript
import { AwsBasicIntegration } from '@buttonize/cdk'

AwsBasicIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.AwsBasicIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsBasicIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.AwsBasicIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### AwsCustomIntegration <a name="AwsCustomIntegration" id="@buttonize/cdk.AwsCustomIntegration"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.AwsCustomIntegration.Initializer"></a>

```typescript
import { AwsCustomIntegration } from '@buttonize/cdk'

new AwsCustomIntegration(scope: Construct, id: string, __2: AwsCustomIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.__2">__2</a></code> | <code><a href="#@buttonize/cdk.AwsCustomIntegrationProps">AwsCustomIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="@buttonize/cdk.AwsCustomIntegration.Initializer.parameter.__2"></a>

- *Type:* <a href="#@buttonize/cdk.AwsCustomIntegrationProps">AwsCustomIntegrationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.AwsCustomIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.AwsCustomIntegration.isConstruct"></a>

```typescript
import { AwsCustomIntegration } from '@buttonize/cdk'

AwsCustomIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.AwsCustomIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsCustomIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.AwsCustomIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CustomResourceProvider <a name="CustomResourceProvider" id="@buttonize/cdk.CustomResourceProvider"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.CustomResourceProvider.Initializer"></a>

```typescript
import { CustomResourceProvider } from '@buttonize/cdk'

new CustomResourceProvider(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.CustomResourceProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.configureDefaultApiKey">configureDefaultApiKey</a></code> | **Do not use this method in your CDK code. It's for internal use only.**. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.enableLogs">enableLogs</a></code> | **Do not use this method in your CDK code. It's for internal use only.**. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.CustomResourceProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `configureDefaultApiKey` <a name="configureDefaultApiKey" id="@buttonize/cdk.CustomResourceProvider.configureDefaultApiKey"></a>

```typescript
public configureDefaultApiKey(apiKey: string): void
```

**Do not use this method in your CDK code. It's for internal use only.**.

Instead use `btnz.GlobalConfig.init(...)` or `btnz.GlobalConfig.setDefaultApiKey(...)`

###### `apiKey`<sup>Required</sup> <a name="apiKey" id="@buttonize/cdk.CustomResourceProvider.configureDefaultApiKey.parameter.apiKey"></a>

- *Type:* string

---

##### `enableLogs` <a name="enableLogs" id="@buttonize/cdk.CustomResourceProvider.enableLogs"></a>

```typescript
public enableLogs(retention?: RetentionDays): void
```

**Do not use this method in your CDK code. It's for internal use only.**.

Instead use `btnz.GlobalConfig.enableCustomResourceLogs(...)`

###### `retention`<sup>Optional</sup> <a name="retention" id="@buttonize/cdk.CustomResourceProvider.enableLogs.parameter.retention"></a>

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.getOrCreateProvider">getOrCreateProvider</a></code> | **Do not use this method in your CDK code. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.CustomResourceProvider.isConstruct"></a>

```typescript
import { CustomResourceProvider } from '@buttonize/cdk'

CustomResourceProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.CustomResourceProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `getOrCreateProvider` <a name="getOrCreateProvider" id="@buttonize/cdk.CustomResourceProvider.getOrCreateProvider"></a>

```typescript
import { CustomResourceProvider } from '@buttonize/cdk'

CustomResourceProvider.getOrCreateProvider(scope: Construct)
```

**Do not use this method in your CDK code.

It's for internal use only.**

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.CustomResourceProvider.getOrCreateProvider.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.property.defaultApiKey">defaultApiKey</a></code> | <code>string</code> | **Do not use this method in your CDK code. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.property.serviceToken">serviceToken</a></code> | <code>string</code> | ARN of the custom resource lambda function handler. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.CustomResourceProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaultApiKey`<sup>Required</sup> <a name="defaultApiKey" id="@buttonize/cdk.CustomResourceProvider.property.defaultApiKey"></a>

```typescript
public readonly defaultApiKey: string;
```

- *Type:* string

**Do not use this method in your CDK code.

It's for internal use only.**

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@buttonize/cdk.CustomResourceProvider.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

ARN of the custom resource lambda function handler.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.property.CUSTOM_RESOURCE_PROVIDER_ID">CUSTOM_RESOURCE_PROVIDER_ID</a></code> | <code>string</code> | **Do not use this value in your CDK code. |
| <code><a href="#@buttonize/cdk.CustomResourceProvider.property.SINGLETON_LAMBDA_UUID">SINGLETON_LAMBDA_UUID</a></code> | <code>string</code> | **Do not use this value in your CDK code. |

---

##### `CUSTOM_RESOURCE_PROVIDER_ID`<sup>Required</sup> <a name="CUSTOM_RESOURCE_PROVIDER_ID" id="@buttonize/cdk.CustomResourceProvider.property.CUSTOM_RESOURCE_PROVIDER_ID"></a>

```typescript
public readonly CUSTOM_RESOURCE_PROVIDER_ID: string;
```

- *Type:* string

**Do not use this value in your CDK code.

It's for internal use only.**

---

##### `SINGLETON_LAMBDA_UUID`<sup>Required</sup> <a name="SINGLETON_LAMBDA_UUID" id="@buttonize/cdk.CustomResourceProvider.property.SINGLETON_LAMBDA_UUID"></a>

```typescript
public readonly SINGLETON_LAMBDA_UUID: string;
```

- *Type:* string

**Do not use this value in your CDK code.

It's for internal use only.**

---

### ExecutionRole <a name="ExecutionRole" id="@buttonize/cdk.ExecutionRole"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.ExecutionRole.Initializer"></a>

```typescript
import { ExecutionRole } from '@buttonize/cdk'

new ExecutionRole(scope: Construct, id: string, props: ExecutionRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.ExecutionRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.ExecutionRole.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.ExecutionRoleProps">ExecutionRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.ExecutionRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.ExecutionRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.ExecutionRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.ExecutionRoleProps">ExecutionRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@buttonize/cdk.ExecutionRole.addLambda">addLambda</a></code> | Allow invocation of given lambda function to IAM Role inside the ExecutionRole construct. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.ExecutionRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLambda` <a name="addLambda" id="@buttonize/cdk.ExecutionRole.addLambda"></a>

```typescript
public addLambda(target: IFunction): void
```

Allow invocation of given lambda function to IAM Role inside the ExecutionRole construct.

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.ExecutionRole.addLambda.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@buttonize/cdk.ExecutionRole.createSingleton">createSingleton</a></code> | **Do not call this method from your code.**. |
| <code><a href="#@buttonize/cdk.ExecutionRole.getSingleton">getSingleton</a></code> | Retrieve singleton instance of ExecutionRole. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.ExecutionRole.isConstruct"></a>

```typescript
import { ExecutionRole } from '@buttonize/cdk'

ExecutionRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.ExecutionRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `createSingleton` <a name="createSingleton" id="@buttonize/cdk.ExecutionRole.createSingleton"></a>

```typescript
import { ExecutionRole } from '@buttonize/cdk'

ExecutionRole.createSingleton(scope: Construct, props: ExecutionRoleProps)
```

**Do not call this method from your code.**.

Instead use btnz.GlobalConfig.init(...)

This method creates a new singleton of ExecutionRole resource in a CDK stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.ExecutionRole.createSingleton.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.ExecutionRole.createSingleton.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.ExecutionRoleProps">ExecutionRoleProps</a>

---

##### `getSingleton` <a name="getSingleton" id="@buttonize/cdk.ExecutionRole.getSingleton"></a>

```typescript
import { ExecutionRole } from '@buttonize/cdk'

ExecutionRole.getSingleton(scope: Construct)
```

Retrieve singleton instance of ExecutionRole.

You can for example add extra permissions in case you are using *AwsCustomIntegration* resource.

*Example*

```typescript
const yourCustomPolicy = new Policy(stack, 'CustomPolicy', {
  policyName: 'your-custom-policy',
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['*'],
      resources: [
        `arn:aws:lambda:${stack.region}:${stack.account}:function:function-name-here`
      ]
    })
  ]
})

const executionRole = btnz.ExecutionRole.getSingleton(stack)

executionRole.cdkRole.attachInlinePolicy(yourCustomPolicy)
```


###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.ExecutionRole.getSingleton.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.cdkRole">cdkRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | Generated AWS IAM role. |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.externalId">externalId</a></code> | <code>string</code> | External ID used for the generated Buttonize Execution AWS IAM role. |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.lambdaPolicy">lambdaPolicy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | IAM Policy used for Lambda functions by widgets implementing *lambda.IEventSource* (e.g. Form and Button). |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.ref">ref</a></code> | <code>aws-cdk-lib.Reference</code> | ID of the role inside Buttonize. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.ExecutionRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdkRole`<sup>Required</sup> <a name="cdkRole" id="@buttonize/cdk.ExecutionRole.property.cdkRole"></a>

```typescript
public readonly cdkRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

Generated AWS IAM role.

Feel free to customize this role according to your Buttonize needs

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@buttonize/cdk.ExecutionRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID used for the generated Buttonize Execution AWS IAM role.

---

##### `lambdaPolicy`<sup>Required</sup> <a name="lambdaPolicy" id="@buttonize/cdk.ExecutionRole.property.lambdaPolicy"></a>

```typescript
public readonly lambdaPolicy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

IAM Policy used for Lambda functions by widgets implementing *lambda.IEventSource* (e.g. Form and Button).

You can add your custom IAM policies and statements via instance variable *cdkRole*.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@buttonize/cdk.ExecutionRole.property.ref"></a>

```typescript
public readonly ref: Reference;
```

- *Type:* aws-cdk-lib.Reference

ID of the role inside Buttonize.

This is used internally by *WidgetCustomResource* construct when referencing an execution role.

*The value comes from the RoleCustomResource's attribute "RoleId" and is referenced via Fn::GetAtt*

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRole.property.DEFAULT_EXECUTION_ROLE_ID">DEFAULT_EXECUTION_ROLE_ID</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_EXECUTION_ROLE_ID`<sup>Required</sup> <a name="DEFAULT_EXECUTION_ROLE_ID" id="@buttonize/cdk.ExecutionRole.property.DEFAULT_EXECUTION_ROLE_ID"></a>

```typescript
public readonly DEFAULT_EXECUTION_ROLE_ID: string;
```

- *Type:* string

---

### RoleCustomResource <a name="RoleCustomResource" id="@buttonize/cdk.RoleCustomResource"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.RoleCustomResource.Initializer"></a>

```typescript
import { RoleCustomResource } from '@buttonize/cdk'

new RoleCustomResource(scope: Construct, id: string, props: RoleCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.RoleCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.RoleCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.RoleCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.RoleCustomResourceProps">RoleCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.RoleCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.RoleCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.RoleCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.RoleCustomResourceProps">RoleCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.RoleCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.RoleCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@buttonize/cdk.RoleCustomResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@buttonize/cdk.RoleCustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@buttonize/cdk.RoleCustomResource.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.RoleCustomResource.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@buttonize/cdk.RoleCustomResource.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.RoleCustomResource.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@buttonize/cdk.RoleCustomResource.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.RoleCustomResource.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.RoleCustomResource.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@buttonize/cdk.RoleCustomResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.RoleCustomResource.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.RoleCustomResource.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@buttonize/cdk.RoleCustomResource.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.RoleCustomResource.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@buttonize/cdk.RoleCustomResource.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.RoleCustomResource.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.RoleCustomResource.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@buttonize/cdk.RoleCustomResource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@buttonize/cdk.RoleCustomResource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.RoleCustomResource.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@buttonize/cdk.RoleCustomResource.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@buttonize/cdk.RoleCustomResource.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@buttonize/cdk.RoleCustomResource.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.RoleCustomResource.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.RoleCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@buttonize/cdk.RoleCustomResource.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.RoleCustomResource.isConstruct"></a>

```typescript
import { RoleCustomResource } from '@buttonize/cdk'

RoleCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.RoleCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@buttonize/cdk.RoleCustomResource.isCfnElement"></a>

```typescript
import { RoleCustomResource } from '@buttonize/cdk'

RoleCustomResource.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.RoleCustomResource.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@buttonize/cdk.RoleCustomResource.isCfnResource"></a>

```typescript
import { RoleCustomResource } from '@buttonize/cdk'

RoleCustomResource.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@buttonize/cdk.RoleCustomResource.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@buttonize/cdk.RoleCustomResource.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.RoleCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@buttonize/cdk.RoleCustomResource.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@buttonize/cdk.RoleCustomResource.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@buttonize/cdk.RoleCustomResource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@buttonize/cdk.RoleCustomResource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@buttonize/cdk.RoleCustomResource.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@buttonize/cdk.RoleCustomResource.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---


### WidgetCustomResource <a name="WidgetCustomResource" id="@buttonize/cdk.WidgetCustomResource"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.WidgetCustomResource.Initializer"></a>

```typescript
import { WidgetCustomResource } from '@buttonize/cdk'

new WidgetCustomResource(scope: Construct, id: string, props: WidgetCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.WidgetCustomResourceProps">WidgetCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.WidgetCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.WidgetCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.WidgetCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.WidgetCustomResourceProps">WidgetCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.WidgetCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@buttonize/cdk.WidgetCustomResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@buttonize/cdk.WidgetCustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@buttonize/cdk.WidgetCustomResource.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.WidgetCustomResource.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@buttonize/cdk.WidgetCustomResource.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.WidgetCustomResource.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@buttonize/cdk.WidgetCustomResource.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.WidgetCustomResource.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.WidgetCustomResource.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@buttonize/cdk.WidgetCustomResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.WidgetCustomResource.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.WidgetCustomResource.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@buttonize/cdk.WidgetCustomResource.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.WidgetCustomResource.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@buttonize/cdk.WidgetCustomResource.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.WidgetCustomResource.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.WidgetCustomResource.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@buttonize/cdk.WidgetCustomResource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@buttonize/cdk.WidgetCustomResource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.WidgetCustomResource.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@buttonize/cdk.WidgetCustomResource.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@buttonize/cdk.WidgetCustomResource.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@buttonize/cdk.WidgetCustomResource.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.WidgetCustomResource.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.WidgetCustomResource.isConstruct"></a>

```typescript
import { WidgetCustomResource } from '@buttonize/cdk'

WidgetCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.WidgetCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@buttonize/cdk.WidgetCustomResource.isCfnElement"></a>

```typescript
import { WidgetCustomResource } from '@buttonize/cdk'

WidgetCustomResource.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.WidgetCustomResource.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@buttonize/cdk.WidgetCustomResource.isCfnResource"></a>

```typescript
import { WidgetCustomResource } from '@buttonize/cdk'

WidgetCustomResource.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@buttonize/cdk.WidgetCustomResource.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@buttonize/cdk.WidgetCustomResource.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.WidgetCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@buttonize/cdk.WidgetCustomResource.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@buttonize/cdk.WidgetCustomResource.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@buttonize/cdk.WidgetCustomResource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@buttonize/cdk.WidgetCustomResource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@buttonize/cdk.WidgetCustomResource.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@buttonize/cdk.WidgetCustomResource.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---


## Structs <a name="Structs" id="Structs"></a>

### APIBasicIntegration <a name="APIBasicIntegration" id="@buttonize/cdk.APIBasicIntegration"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APIBasicIntegration.Initializer"></a>

```typescript
import { APIBasicIntegration } from '@buttonize/cdk'

const aPIBasicIntegration: APIBasicIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APIBasicIntegration.property.method">method</a></code> | <code>string</code> | Lowercase method name as in the AWS SDK v2. |
| <code><a href="#@buttonize/cdk.APIBasicIntegration.property.region">region</a></code> | <code>string</code> | Region where the resource is located. |
| <code><a href="#@buttonize/cdk.APIBasicIntegration.property.resourceId">resourceId</a></code> | <code>string</code> | Identifer of the resource. |
| <code><a href="#@buttonize/cdk.APIBasicIntegration.property.service">service</a></code> | <code>string</code> | Lowercase service name as in the AWS SDK v2. |
| <code><a href="#@buttonize/cdk.APIBasicIntegration.property.kind">kind</a></code> | <code>string</code> | Information for internal API use. |

---

##### `method`<sup>Required</sup> <a name="method" id="@buttonize/cdk.APIBasicIntegration.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Lowercase method name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'invoke'
```


##### `region`<sup>Required</sup> <a name="region" id="@buttonize/cdk.APIBasicIntegration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the resource is located.

---

*Example*

```typescript
'eu-central-1'
```


##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@buttonize/cdk.APIBasicIntegration.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Identifer of the resource.

In case of a lambda it is the function name.

---

*Example*

```typescript
'my-lambda-function-name'
```


##### `service`<sup>Required</sup> <a name="service" id="@buttonize/cdk.APIBasicIntegration.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Lowercase service name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'lambda'
```


##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APIBasicIntegration.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Information for internal API use.

---

### APIButtonProps <a name="APIButtonProps" id="@buttonize/cdk.APIButtonProps"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APIButtonProps.Initializer"></a>

```typescript
import { APIButtonProps } from '@buttonize/cdk'

const aPIButtonProps: APIButtonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APIButtonProps.property.label">label</a></code> | <code>string</code> | Label of the widget is the text on the action button users can click on in order to invoke the widget. |
| <code><a href="#@buttonize/cdk.APIButtonProps.property.name">name</a></code> | <code>string</code> | Name of the widget should describe what action is the widget doing. |
| <code><a href="#@buttonize/cdk.APIButtonProps.property.tags">tags</a></code> | <code>string[]</code> | List of tags of the widget. |
| <code><a href="#@buttonize/cdk.APIButtonProps.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.APIButtonProps.property.color">color</a></code> | <code>string</code> | *No description.* |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.APIButtonProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the widget is the text on the action button users can click on in order to invoke the widget.

---

*Example*

```typescript
'Create'
```


##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.APIButtonProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the widget should describe what action is the widget doing.

**Users can search for a widget based on name.**

---

*Example*

```typescript
'Create new user in DB'
```


##### `tags`<sup>Optional</sup> <a name="tags" id="@buttonize/cdk.APIButtonProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags of the widget.

**Users can filter out widgets based on tags.**

---

##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APIButtonProps.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `color`<sup>Optional</sup> <a name="color" id="@buttonize/cdk.APIButtonProps.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

### APICustomIntegration <a name="APICustomIntegration" id="@buttonize/cdk.APICustomIntegration"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APICustomIntegration.Initializer"></a>

```typescript
import { APICustomIntegration } from '@buttonize/cdk'

const aPICustomIntegration: APICustomIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APICustomIntegration.property.requestTemplate">requestTemplate</a></code> | <code>string</code> | Request JS template resolver as a string. |
| <code><a href="#@buttonize/cdk.APICustomIntegration.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | Response JS template resolver as a string. |
| <code><a href="#@buttonize/cdk.APICustomIntegration.property.kind">kind</a></code> | <code>string</code> | Information for internal API use. |

---

##### `requestTemplate`<sup>Required</sup> <a name="requestTemplate" id="@buttonize/cdk.APICustomIntegration.property.requestTemplate"></a>

```typescript
public readonly requestTemplate: string;
```

- *Type:* string

Request JS template resolver as a string.

---

*Example*

```typescript
function request(ctx) {
  return {
    provider: 'aws',
    service: 'lambda',
    method: 'invoke',
    region: 'eu-central-1',
    params: {
      FunctionName: 'some-test-functoon',
      Payload: JSON.stringify({args:ctx.args, ctx})
    }
  }
}
```


##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@buttonize/cdk.APICustomIntegration.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

Response JS template resolver as a string.

---

*Example*

```typescript
function response(ctx) {
  return {
    format: 'json',
    body: JSON.stringify({
      payload: ctx.result.Payload,
      ctx
    })
  }
}
```


##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APICustomIntegration.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Information for internal API use.

---

### APIFormProps <a name="APIFormProps" id="@buttonize/cdk.APIFormProps"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APIFormProps.Initializer"></a>

```typescript
import { APIFormProps } from '@buttonize/cdk'

const aPIFormProps: APIFormProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APIFormProps.property.label">label</a></code> | <code>string</code> | Label of the widget is the text on the action button users can click on in order to invoke the widget. |
| <code><a href="#@buttonize/cdk.APIFormProps.property.name">name</a></code> | <code>string</code> | Name of the widget should describe what action is the widget doing. |
| <code><a href="#@buttonize/cdk.APIFormProps.property.tags">tags</a></code> | <code>string[]</code> | List of tags of the widget. |
| <code><a href="#@buttonize/cdk.APIFormProps.property.fields">fields</a></code> | <code><a href="#@buttonize/cdk.APITextField">APITextField</a> \| <a href="#@buttonize/cdk.APIToggleField">APIToggleField</a>[]</code> | *No description.* |
| <code><a href="#@buttonize/cdk.APIFormProps.property.kind">kind</a></code> | <code>string</code> | *No description.* |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.APIFormProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the widget is the text on the action button users can click on in order to invoke the widget.

---

*Example*

```typescript
'Create'
```


##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.APIFormProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the widget should describe what action is the widget doing.

**Users can search for a widget based on name.**

---

*Example*

```typescript
'Create new user in DB'
```


##### `tags`<sup>Optional</sup> <a name="tags" id="@buttonize/cdk.APIFormProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags of the widget.

**Users can filter out widgets based on tags.**

---

##### `fields`<sup>Required</sup> <a name="fields" id="@buttonize/cdk.APIFormProps.property.fields"></a>

```typescript
public readonly fields: APITextField | APIToggleField[];
```

- *Type:* <a href="#@buttonize/cdk.APITextField">APITextField</a> | <a href="#@buttonize/cdk.APIToggleField">APIToggleField</a>[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APIFormProps.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

### APITextField <a name="APITextField" id="@buttonize/cdk.APITextField"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APITextField.Initializer"></a>

```typescript
import { APITextField } from '@buttonize/cdk'

const aPITextField: APITextField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APITextField.property.label">label</a></code> | <code>string</code> | Label of the field. |
| <code><a href="#@buttonize/cdk.APITextField.property.placeholder">placeholder</a></code> | <code>string</code> | Optional placeholder of the field. |
| <code><a href="#@buttonize/cdk.APITextField.property.regex">regex</a></code> | <code>string</code> | Regular expression used for validating the field value before submission. |
| <code><a href="#@buttonize/cdk.APITextField.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.APITextField.property.kind">kind</a></code> | <code>string</code> | *No description.* |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.APITextField.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the field.

---

*Example*

```typescript
'Email of the user'
```


##### `placeholder`<sup>Optional</sup> <a name="placeholder" id="@buttonize/cdk.APITextField.property.placeholder"></a>

```typescript
public readonly placeholder: string;
```

- *Type:* string

Optional placeholder of the field.

---

*Example*

```typescript
.com'
```


##### `regex`<sup>Optional</sup> <a name="regex" id="@buttonize/cdk.APITextField.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regular expression used for validating the field value before submission.

---

*Example*

```typescript
'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' // Email regex
```


##### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.APITextField.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APITextField.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

### APIToggleField <a name="APIToggleField" id="@buttonize/cdk.APIToggleField"></a>

**Do not use this interface in your CDK code.

It's for internal use only.**

#### Initializer <a name="Initializer" id="@buttonize/cdk.APIToggleField.Initializer"></a>

```typescript
import { APIToggleField } from '@buttonize/cdk'

const aPIToggleField: APIToggleField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.APIToggleField.property.label">label</a></code> | <code>string</code> | Label of the field. |
| <code><a href="#@buttonize/cdk.APIToggleField.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.APIToggleField.property.kind">kind</a></code> | <code>string</code> | *No description.* |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.APIToggleField.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the field.

---

*Example*

```typescript
'Email of the user'
```


##### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.APIToggleField.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@buttonize/cdk.APIToggleField.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

### AwsBasicIntegrationProps <a name="AwsBasicIntegrationProps" id="@buttonize/cdk.AwsBasicIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.AwsBasicIntegrationProps.Initializer"></a>

```typescript
import { AwsBasicIntegrationProps } from '@buttonize/cdk'

const awsBasicIntegrationProps: AwsBasicIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps.property.method">method</a></code> | <code>string</code> | Lowercase method name as in the AWS SDK v2. |
| <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps.property.region">region</a></code> | <code>string</code> | Region where the resource is located. |
| <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps.property.resourceId">resourceId</a></code> | <code>string</code> | Identifer of the resource. |
| <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps.property.service">service</a></code> | <code>string</code> | Lowercase service name as in the AWS SDK v2. |
| <code><a href="#@buttonize/cdk.AwsBasicIntegrationProps.property.widget">widget</a></code> | <code><a href="#@buttonize/cdk.Button">Button</a> \| <a href="#@buttonize/cdk.Form">Form</a></code> | Widget to which the basic integration will be connected. |

---

##### `method`<sup>Required</sup> <a name="method" id="@buttonize/cdk.AwsBasicIntegrationProps.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Lowercase method name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'invoke'
```


##### `region`<sup>Required</sup> <a name="region" id="@buttonize/cdk.AwsBasicIntegrationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the resource is located.

---

*Example*

```typescript
'eu-central-1'
```


##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@buttonize/cdk.AwsBasicIntegrationProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Identifer of the resource.

In case of a lambda it is the function name.

---

*Example*

```typescript
'my-lambda-function-name'
```


##### `service`<sup>Required</sup> <a name="service" id="@buttonize/cdk.AwsBasicIntegrationProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Lowercase service name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'lambda'
```


##### `widget`<sup>Required</sup> <a name="widget" id="@buttonize/cdk.AwsBasicIntegrationProps.property.widget"></a>

```typescript
public readonly widget: Button | Form;
```

- *Type:* <a href="#@buttonize/cdk.Button">Button</a> | <a href="#@buttonize/cdk.Form">Form</a>

Widget to which the basic integration will be connected.

---

### AwsCustomIntegrationProps <a name="AwsCustomIntegrationProps" id="@buttonize/cdk.AwsCustomIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.AwsCustomIntegrationProps.Initializer"></a>

```typescript
import { AwsCustomIntegrationProps } from '@buttonize/cdk'

const awsCustomIntegrationProps: AwsCustomIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.AwsCustomIntegrationProps.property.requestTemplate">requestTemplate</a></code> | <code>string</code> | Request JS template resolver as a string. |
| <code><a href="#@buttonize/cdk.AwsCustomIntegrationProps.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | Response JS template resolver as a string. |
| <code><a href="#@buttonize/cdk.AwsCustomIntegrationProps.property.widget">widget</a></code> | <code><a href="#@buttonize/cdk.Button">Button</a> \| <a href="#@buttonize/cdk.Form">Form</a></code> | Widget to which the custom integration will be connected. |

---

##### `requestTemplate`<sup>Required</sup> <a name="requestTemplate" id="@buttonize/cdk.AwsCustomIntegrationProps.property.requestTemplate"></a>

```typescript
public readonly requestTemplate: string;
```

- *Type:* string

Request JS template resolver as a string.

---

*Example*

```typescript
function request(ctx) {
  return {
    provider: 'aws',
    service: 'lambda',
    method: 'invoke',
    region: 'eu-central-1',
    params: {
      FunctionName: 'some-test-functoon',
      Payload: JSON.stringify({args:ctx.args, ctx})
    }
  }
}
```


##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@buttonize/cdk.AwsCustomIntegrationProps.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

Response JS template resolver as a string.

---

*Example*

```typescript
function response(ctx) {
  return {
    format: 'json',
    body: JSON.stringify({
      payload: ctx.result.Payload,
      ctx
    })
  }
}
```


##### `widget`<sup>Required</sup> <a name="widget" id="@buttonize/cdk.AwsCustomIntegrationProps.property.widget"></a>

```typescript
public readonly widget: Button | Form;
```

- *Type:* <a href="#@buttonize/cdk.Button">Button</a> | <a href="#@buttonize/cdk.Form">Form</a>

Widget to which the custom integration will be connected.

---

### BaseWidgetOptions <a name="BaseWidgetOptions" id="@buttonize/cdk.BaseWidgetOptions"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.BaseWidgetOptions.Initializer"></a>

```typescript
import { BaseWidgetOptions } from '@buttonize/cdk'

const baseWidgetOptions: BaseWidgetOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.BaseWidgetOptions.property.apiKey">apiKey</a></code> | <code>string</code> | API key used **exclusively** for creation of this particular widget. |
| <code><a href="#@buttonize/cdk.BaseWidgetOptions.property.role">role</a></code> | <code><a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a></code> | AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.BaseWidgetOptions.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API key used **exclusively** for creation of this particular widget.

If you don't specify *apiKey*, the default API key from *btnz.GlobalConfig* is used.

---

##### `role`<sup>Optional</sup> <a name="role" id="@buttonize/cdk.BaseWidgetOptions.property.role"></a>

```typescript
public readonly role: ExecutionRole;
```

- *Type:* <a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a>

AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation.

If you don't specify *role*, the default role from *btnz.GlobalConfig* is used.

---

### BaseWidgetProps <a name="BaseWidgetProps" id="@buttonize/cdk.BaseWidgetProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.BaseWidgetProps.Initializer"></a>

```typescript
import { BaseWidgetProps } from '@buttonize/cdk'

const baseWidgetProps: BaseWidgetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.BaseWidgetProps.property.label">label</a></code> | <code>string</code> | Label of the widget is the text on the action button users can click on in order to invoke the widget. |
| <code><a href="#@buttonize/cdk.BaseWidgetProps.property.name">name</a></code> | <code>string</code> | Name of the widget should describe what action is the widget doing. |
| <code><a href="#@buttonize/cdk.BaseWidgetProps.property.tags">tags</a></code> | <code>string[]</code> | List of tags of the widget. |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.BaseWidgetProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the widget is the text on the action button users can click on in order to invoke the widget.

---

*Example*

```typescript
'Create'
```


##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.BaseWidgetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the widget should describe what action is the widget doing.

**Users can search for a widget based on name.**

---

*Example*

```typescript
'Create new user in DB'
```


##### `tags`<sup>Optional</sup> <a name="tags" id="@buttonize/cdk.BaseWidgetProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags of the widget.

**Users can filter out widgets based on tags.**

---

### BasicIntegration <a name="BasicIntegration" id="@buttonize/cdk.BasicIntegration"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.BasicIntegration.Initializer"></a>

```typescript
import { BasicIntegration } from '@buttonize/cdk'

const basicIntegration: BasicIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.BasicIntegration.property.method">method</a></code> | <code>string</code> | Lowercase method name as in the AWS SDK v2. |
| <code><a href="#@buttonize/cdk.BasicIntegration.property.region">region</a></code> | <code>string</code> | Region where the resource is located. |
| <code><a href="#@buttonize/cdk.BasicIntegration.property.resourceId">resourceId</a></code> | <code>string</code> | Identifer of the resource. |
| <code><a href="#@buttonize/cdk.BasicIntegration.property.service">service</a></code> | <code>string</code> | Lowercase service name as in the AWS SDK v2. |

---

##### `method`<sup>Required</sup> <a name="method" id="@buttonize/cdk.BasicIntegration.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Lowercase method name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'invoke'
```


##### `region`<sup>Required</sup> <a name="region" id="@buttonize/cdk.BasicIntegration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the resource is located.

---

*Example*

```typescript
'eu-central-1'
```


##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@buttonize/cdk.BasicIntegration.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Identifer of the resource.

In case of a lambda it is the function name.

---

*Example*

```typescript
'my-lambda-function-name'
```


##### `service`<sup>Required</sup> <a name="service" id="@buttonize/cdk.BasicIntegration.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Lowercase service name as in the AWS SDK v2.

Currently supports only *"invoke"* method for *"lambda"* service

---

*Example*

```typescript
'lambda'
```


### ButtonOptions <a name="ButtonOptions" id="@buttonize/cdk.ButtonOptions"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ButtonOptions.Initializer"></a>

```typescript
import { ButtonOptions } from '@buttonize/cdk'

const buttonOptions: ButtonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonOptions.property.apiKey">apiKey</a></code> | <code>string</code> | API key used **exclusively** for creation of this particular widget. |
| <code><a href="#@buttonize/cdk.ButtonOptions.property.role">role</a></code> | <code><a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a></code> | AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.ButtonOptions.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API key used **exclusively** for creation of this particular widget.

If you don't specify *apiKey*, the default API key from *btnz.GlobalConfig* is used.

---

##### `role`<sup>Optional</sup> <a name="role" id="@buttonize/cdk.ButtonOptions.property.role"></a>

```typescript
public readonly role: ExecutionRole;
```

- *Type:* <a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a>

AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation.

If you don't specify *role*, the default role from *btnz.GlobalConfig* is used.

---

### ButtonProps <a name="ButtonProps" id="@buttonize/cdk.ButtonProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ButtonProps.Initializer"></a>

```typescript
import { ButtonProps } from '@buttonize/cdk'

const buttonProps: ButtonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonProps.property.label">label</a></code> | <code>string</code> | Label of the widget is the text on the action button users can click on in order to invoke the widget. |
| <code><a href="#@buttonize/cdk.ButtonProps.property.name">name</a></code> | <code>string</code> | Name of the widget should describe what action is the widget doing. |
| <code><a href="#@buttonize/cdk.ButtonProps.property.tags">tags</a></code> | <code>string[]</code> | List of tags of the widget. |
| <code><a href="#@buttonize/cdk.ButtonProps.property.color">color</a></code> | <code>string</code> | Button color in HEX format. |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.ButtonProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the widget is the text on the action button users can click on in order to invoke the widget.

---

*Example*

```typescript
'Create'
```


##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.ButtonProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the widget should describe what action is the widget doing.

**Users can search for a widget based on name.**

---

*Example*

```typescript
'Create new user in DB'
```


##### `tags`<sup>Optional</sup> <a name="tags" id="@buttonize/cdk.ButtonProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags of the widget.

**Users can filter out widgets based on tags.**

---

##### `color`<sup>Optional</sup> <a name="color" id="@buttonize/cdk.ButtonProps.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

Button color in HEX format.

---

*Example*

```typescript
'#FF00FF'
```


### CustomIntegration <a name="CustomIntegration" id="@buttonize/cdk.CustomIntegration"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.CustomIntegration.Initializer"></a>

```typescript
import { CustomIntegration } from '@buttonize/cdk'

const customIntegration: CustomIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.CustomIntegration.property.requestTemplate">requestTemplate</a></code> | <code>string</code> | Request JS template resolver as a string. |
| <code><a href="#@buttonize/cdk.CustomIntegration.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | Response JS template resolver as a string. |

---

##### `requestTemplate`<sup>Required</sup> <a name="requestTemplate" id="@buttonize/cdk.CustomIntegration.property.requestTemplate"></a>

```typescript
public readonly requestTemplate: string;
```

- *Type:* string

Request JS template resolver as a string.

---

*Example*

```typescript
function request(ctx) {
  return {
    provider: 'aws',
    service: 'lambda',
    method: 'invoke',
    region: 'eu-central-1',
    params: {
      FunctionName: 'some-test-functoon',
      Payload: JSON.stringify({args:ctx.args, ctx})
    }
  }
}
```


##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@buttonize/cdk.CustomIntegration.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

Response JS template resolver as a string.

---

*Example*

```typescript
function response(ctx) {
  return {
    format: 'json',
    body: JSON.stringify({
      payload: ctx.result.Payload,
      ctx
    })
  }
}
```


### ExecutionRoleProps <a name="ExecutionRoleProps" id="@buttonize/cdk.ExecutionRoleProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ExecutionRoleProps.Initializer"></a>

```typescript
import { ExecutionRoleProps } from '@buttonize/cdk'

const executionRoleProps: ExecutionRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ExecutionRoleProps.property.externalId">externalId</a></code> | <code>string</code> | External ID used when creating the Buttonize execution AWS IAM role for this instance. |
| <code><a href="#@buttonize/cdk.ExecutionRoleProps.property.label">label</a></code> | <code>string</code> | Label of the AWS role visible in the Buttonize UI. |
| <code><a href="#@buttonize/cdk.ExecutionRoleProps.property.apiKey">apiKey</a></code> | <code>string</code> | API key used exclusively for creating this role's instance. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@buttonize/cdk.ExecutionRoleProps.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID used when creating the Buttonize execution AWS IAM role for this instance.

**External ID is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.ExecutionRoleProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the AWS role visible in the Buttonize UI.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.ExecutionRoleProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API key used exclusively for creating this role's instance.

**API Key is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

---

### FormOptions <a name="FormOptions" id="@buttonize/cdk.FormOptions"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.FormOptions.Initializer"></a>

```typescript
import { FormOptions } from '@buttonize/cdk'

const formOptions: FormOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.FormOptions.property.apiKey">apiKey</a></code> | <code>string</code> | API key used **exclusively** for creation of this particular widget. |
| <code><a href="#@buttonize/cdk.FormOptions.property.role">role</a></code> | <code><a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a></code> | AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.FormOptions.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API key used **exclusively** for creation of this particular widget.

If you don't specify *apiKey*, the default API key from *btnz.GlobalConfig* is used.

---

##### `role`<sup>Optional</sup> <a name="role" id="@buttonize/cdk.FormOptions.property.role"></a>

```typescript
public readonly role: ExecutionRole;
```

- *Type:* <a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a>

AWS Role used **exclusively** for this widget. Supplied role will be used for every widget invocation.

If you don't specify *role*, the default role from *btnz.GlobalConfig* is used.

---

### FormProps <a name="FormProps" id="@buttonize/cdk.FormProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.FormProps.Initializer"></a>

```typescript
import { FormProps } from '@buttonize/cdk'

const formProps: FormProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.FormProps.property.label">label</a></code> | <code>string</code> | Label of the widget is the text on the action button users can click on in order to invoke the widget. |
| <code><a href="#@buttonize/cdk.FormProps.property.name">name</a></code> | <code>string</code> | Name of the widget should describe what action is the widget doing. |
| <code><a href="#@buttonize/cdk.FormProps.property.tags">tags</a></code> | <code>string[]</code> | List of tags of the widget. |
| <code><a href="#@buttonize/cdk.FormProps.property.fields">fields</a></code> | <code><a href="#@buttonize/cdk.APITextField">APITextField</a> \| <a href="#@buttonize/cdk.APIToggleField">APIToggleField</a>[]</code> | Array of form fields. |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.FormProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the widget is the text on the action button users can click on in order to invoke the widget.

---

*Example*

```typescript
'Create'
```


##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.FormProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the widget should describe what action is the widget doing.

**Users can search for a widget based on name.**

---

*Example*

```typescript
'Create new user in DB'
```


##### `tags`<sup>Optional</sup> <a name="tags" id="@buttonize/cdk.FormProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags of the widget.

**Users can filter out widgets based on tags.**

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@buttonize/cdk.FormProps.property.fields"></a>

```typescript
public readonly fields: APITextField | APIToggleField[];
```

- *Type:* <a href="#@buttonize/cdk.APITextField">APITextField</a> | <a href="#@buttonize/cdk.APIToggleField">APIToggleField</a>[]

Array of form fields.

---

### GlobalConfigProps <a name="GlobalConfigProps" id="@buttonize/cdk.GlobalConfigProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.GlobalConfigProps.Initializer"></a>

```typescript
import { GlobalConfigProps } from '@buttonize/cdk'

const globalConfigProps: GlobalConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.GlobalConfigProps.property.apiKey">apiKey</a></code> | <code>string</code> | Default API for whole CDK stack. |
| <code><a href="#@buttonize/cdk.GlobalConfigProps.property.executionRoleExternalId">executionRoleExternalId</a></code> | <code>string</code> | Default External ID for whole CDK stack's Buttonize execution role. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.GlobalConfigProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Default API for whole CDK stack.

**API Key is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

---

##### `executionRoleExternalId`<sup>Optional</sup> <a name="executionRoleExternalId" id="@buttonize/cdk.GlobalConfigProps.property.executionRoleExternalId"></a>

```typescript
public readonly executionRoleExternalId: string;
```

- *Type:* string

Default External ID for whole CDK stack's Buttonize execution role.

**External ID is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

---

### RoleCustomResourceProps <a name="RoleCustomResourceProps" id="@buttonize/cdk.RoleCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.RoleCustomResourceProps.Initializer"></a>

```typescript
import { RoleCustomResourceProps } from '@buttonize/cdk'

const roleCustomResourceProps: RoleCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.RoleCustomResourceProps.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.RoleCustomResourceProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@buttonize/cdk.RoleCustomResourceProps.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.RoleCustomResourceProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@buttonize/cdk.RoleCustomResourceProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.RoleCustomResourceProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

### TextField <a name="TextField" id="@buttonize/cdk.TextField"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.TextField.Initializer"></a>

```typescript
import { TextField } from '@buttonize/cdk'

const textField: TextField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.TextField.property.label">label</a></code> | <code>string</code> | Label of the field. |
| <code><a href="#@buttonize/cdk.TextField.property.placeholder">placeholder</a></code> | <code>string</code> | Optional placeholder of the field. |
| <code><a href="#@buttonize/cdk.TextField.property.regex">regex</a></code> | <code>string</code> | Regular expression used for validating the field value before submission. |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.TextField.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the field.

---

*Example*

```typescript
'Email of the user'
```


##### `placeholder`<sup>Optional</sup> <a name="placeholder" id="@buttonize/cdk.TextField.property.placeholder"></a>

```typescript
public readonly placeholder: string;
```

- *Type:* string

Optional placeholder of the field.

---

*Example*

```typescript
.com'
```


##### `regex`<sup>Optional</sup> <a name="regex" id="@buttonize/cdk.TextField.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regular expression used for validating the field value before submission.

---

*Example*

```typescript
'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' // Email regex
```


### ToggleField <a name="ToggleField" id="@buttonize/cdk.ToggleField"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ToggleField.Initializer"></a>

```typescript
import { ToggleField } from '@buttonize/cdk'

const toggleField: ToggleField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ToggleField.property.label">label</a></code> | <code>string</code> | Label of the field. |

---

##### `label`<sup>Required</sup> <a name="label" id="@buttonize/cdk.ToggleField.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label of the field.

---

*Example*

```typescript
'Email of the user'
```


### WidgetCustomResourceProps <a name="WidgetCustomResourceProps" id="@buttonize/cdk.WidgetCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.WidgetCustomResourceProps.Initializer"></a>

```typescript
import { WidgetCustomResourceProps } from '@buttonize/cdk'

const widgetCustomResourceProps: WidgetCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.WidgetCustomResourceProps.property.integration">integration</a></code> | <code><a href="#@buttonize/cdk.APIBasicIntegration">APIBasicIntegration</a> \| <a href="#@buttonize/cdk.APICustomIntegration">APICustomIntegration</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResourceProps.property.role">role</a></code> | <code><a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResourceProps.property.widget">widget</a></code> | <code><a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> \| <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.WidgetCustomResourceProps.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@buttonize/cdk.WidgetCustomResourceProps.property.integration"></a>

```typescript
public readonly integration: APIBasicIntegration | APICustomIntegration;
```

- *Type:* <a href="#@buttonize/cdk.APIBasicIntegration">APIBasicIntegration</a> | <a href="#@buttonize/cdk.APICustomIntegration">APICustomIntegration</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@buttonize/cdk.WidgetCustomResourceProps.property.role"></a>

```typescript
public readonly role: ExecutionRole;
```

- *Type:* <a href="#@buttonize/cdk.ExecutionRole">ExecutionRole</a>

---

##### `widget`<sup>Required</sup> <a name="widget" id="@buttonize/cdk.WidgetCustomResourceProps.property.widget"></a>

```typescript
public readonly widget: APIButtonProps | APIFormProps;
```

- *Type:* <a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> | <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a>

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.WidgetCustomResourceProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### BaseWidget <a name="BaseWidget" id="@buttonize/cdk.BaseWidget"></a>

- *Implements:* aws-cdk-lib.aws_lambda.IEventSource

**Do not use this class in your CDK code.

It's for internal use only.**

#### Initializers <a name="Initializers" id="@buttonize/cdk.BaseWidget.Initializer"></a>

```typescript
import { BaseWidget } from '@buttonize/cdk'

new BaseWidget(id: string, props: APIButtonProps | APIFormProps, options?: BaseWidgetOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.BaseWidget.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.BaseWidget.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> \| <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.BaseWidget.Initializer.parameter.options">options</a></code> | <code><a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="@buttonize/cdk.BaseWidget.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.BaseWidget.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> | <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.BaseWidget.Initializer.parameter.options"></a>

- *Type:* <a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.BaseWidget.bind">bind</a></code> | Required method by *lambda.IEventSource* interface. |

---

##### `bind` <a name="bind" id="@buttonize/cdk.BaseWidget.bind"></a>

```typescript
public bind(target: IFunction): void
```

Required method by *lambda.IEventSource* interface.

Thanks to that you can do:

```typescript
const someButtonWidget = new btnz.Button(...)
const someFunction = new lambda.Function(...)
someFunction.addEventSource(someButtonWidget)
```

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.BaseWidget.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.BaseWidget.property.apiProps">apiProps</a></code> | <code><a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> \| <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a></code> | Used internally by other Buttonize constructs. |
| <code><a href="#@buttonize/cdk.BaseWidget.property.integrationOptions">integrationOptions</a></code> | <code><a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a></code> | Used internally by other Buttonize constructs. |

---

##### `apiProps`<sup>Required</sup> <a name="apiProps" id="@buttonize/cdk.BaseWidget.property.apiProps"></a>

```typescript
public readonly apiProps: APIButtonProps | APIFormProps;
```

- *Type:* <a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> | <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a>

Used internally by other Buttonize constructs.

---

##### `integrationOptions`<sup>Optional</sup> <a name="integrationOptions" id="@buttonize/cdk.BaseWidget.property.integrationOptions"></a>

```typescript
public readonly integrationOptions: BaseWidgetOptions;
```

- *Type:* <a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a>

Used internally by other Buttonize constructs.

---


### Button <a name="Button" id="@buttonize/cdk.Button"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.Button.Initializer"></a>

```typescript
import { Button } from '@buttonize/cdk'

new Button(props: ButtonProps, options?: ButtonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.Button.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.ButtonProps">ButtonProps</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.Button.Initializer.parameter.options">options</a></code> | <code><a href="#@buttonize/cdk.ButtonOptions">ButtonOptions</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.Button.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.ButtonProps">ButtonProps</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.Button.Initializer.parameter.options"></a>

- *Type:* <a href="#@buttonize/cdk.ButtonOptions">ButtonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.Button.bind">bind</a></code> | Required method by *lambda.IEventSource* interface. |

---

##### `bind` <a name="bind" id="@buttonize/cdk.Button.bind"></a>

```typescript
public bind(target: IFunction): void
```

Required method by *lambda.IEventSource* interface.

Thanks to that you can do:

```typescript
const someButtonWidget = new btnz.Button(...)
const someFunction = new lambda.Function(...)
someFunction.addEventSource(someButtonWidget)
```

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.Button.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.Button.property.apiProps">apiProps</a></code> | <code><a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> \| <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a></code> | Used internally by other Buttonize constructs. |
| <code><a href="#@buttonize/cdk.Button.property.integrationOptions">integrationOptions</a></code> | <code><a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a></code> | Used internally by other Buttonize constructs. |

---

##### `apiProps`<sup>Required</sup> <a name="apiProps" id="@buttonize/cdk.Button.property.apiProps"></a>

```typescript
public readonly apiProps: APIButtonProps | APIFormProps;
```

- *Type:* <a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> | <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a>

Used internally by other Buttonize constructs.

---

##### `integrationOptions`<sup>Optional</sup> <a name="integrationOptions" id="@buttonize/cdk.Button.property.integrationOptions"></a>

```typescript
public readonly integrationOptions: BaseWidgetOptions;
```

- *Type:* <a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a>

Used internally by other Buttonize constructs.

---


### Form <a name="Form" id="@buttonize/cdk.Form"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.Form.Initializer"></a>

```typescript
import { Form } from '@buttonize/cdk'

new Form(props: FormProps, options?: FormOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.Form.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.FormProps">FormProps</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.Form.Initializer.parameter.options">options</a></code> | <code><a href="#@buttonize/cdk.FormOptions">FormOptions</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.Form.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.FormProps">FormProps</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.Form.Initializer.parameter.options"></a>

- *Type:* <a href="#@buttonize/cdk.FormOptions">FormOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.Form.bind">bind</a></code> | Required method by *lambda.IEventSource* interface. |
| <code><a href="#@buttonize/cdk.Form.addTextField">addTextField</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.Form.addToggleField">addToggleField</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@buttonize/cdk.Form.bind"></a>

```typescript
public bind(target: IFunction): void
```

Required method by *lambda.IEventSource* interface.

Thanks to that you can do:

```typescript
const someButtonWidget = new btnz.Button(...)
const someFunction = new lambda.Function(...)
someFunction.addEventSource(someButtonWidget)
```

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.Form.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `addTextField` <a name="addTextField" id="@buttonize/cdk.Form.addTextField"></a>

```typescript
public addTextField(key: string, props: TextField): Form
```

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.Form.addTextField.parameter.key"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.Form.addTextField.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.TextField">TextField</a>

---

##### `addToggleField` <a name="addToggleField" id="@buttonize/cdk.Form.addToggleField"></a>

```typescript
public addToggleField(key: string, props: ToggleField): Form
```

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.Form.addToggleField.parameter.key"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.Form.addToggleField.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.ToggleField">ToggleField</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.Form.property.apiProps">apiProps</a></code> | <code><a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> \| <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a></code> | Used internally by other Buttonize constructs. |
| <code><a href="#@buttonize/cdk.Form.property.integrationOptions">integrationOptions</a></code> | <code><a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a></code> | Used internally by other Buttonize constructs. |

---

##### `apiProps`<sup>Required</sup> <a name="apiProps" id="@buttonize/cdk.Form.property.apiProps"></a>

```typescript
public readonly apiProps: APIButtonProps | APIFormProps;
```

- *Type:* <a href="#@buttonize/cdk.APIButtonProps">APIButtonProps</a> | <a href="#@buttonize/cdk.APIFormProps">APIFormProps</a>

Used internally by other Buttonize constructs.

---

##### `integrationOptions`<sup>Optional</sup> <a name="integrationOptions" id="@buttonize/cdk.Form.property.integrationOptions"></a>

```typescript
public readonly integrationOptions: BaseWidgetOptions;
```

- *Type:* <a href="#@buttonize/cdk.BaseWidgetOptions">BaseWidgetOptions</a>

Used internally by other Buttonize constructs.

---


### GlobalConfig <a name="GlobalConfig" id="@buttonize/cdk.GlobalConfig"></a>

GlobalConfig is used for initializing global singleton constructs which improve overall Developer Experience.

#### Initializers <a name="Initializers" id="@buttonize/cdk.GlobalConfig.Initializer"></a>

```typescript
import { GlobalConfig } from '@buttonize/cdk'

new GlobalConfig()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.GlobalConfig.enableCustomResourceLogs">enableCustomResourceLogs</a></code> | Use this method only in case you encounter any issues with Custom Resources deployment. |
| <code><a href="#@buttonize/cdk.GlobalConfig.init">init</a></code> | Initialize Buttonize CDK setup. |
| <code><a href="#@buttonize/cdk.GlobalConfig.setDefaultApiKey">setDefaultApiKey</a></code> | Set default API for whole CDK stack. |
| <code><a href="#@buttonize/cdk.GlobalConfig.setDefaultExecutionRoleExternalId">setDefaultExecutionRoleExternalId</a></code> | Set default External ID for whole CDK stack's Buttonize execution role. |

---

##### `enableCustomResourceLogs` <a name="enableCustomResourceLogs" id="@buttonize/cdk.GlobalConfig.enableCustomResourceLogs"></a>

```typescript
import { GlobalConfig } from '@buttonize/cdk'

GlobalConfig.enableCustomResourceLogs(scope: Construct, retention?: RetentionDays)
```

Use this method only in case you encounter any issues with Custom Resources deployment.

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.GlobalConfig.enableCustomResourceLogs.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `retention`<sup>Optional</sup> <a name="retention" id="@buttonize/cdk.GlobalConfig.enableCustomResourceLogs.parameter.retention"></a>

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---

##### `init` <a name="init" id="@buttonize/cdk.GlobalConfig.init"></a>

```typescript
import { GlobalConfig } from '@buttonize/cdk'

GlobalConfig.init(scope: Construct, props: GlobalConfigProps)
```

Initialize Buttonize CDK setup.

Make sure to use this method in the beginning of the stack.

*Example*

```typescript
import * as btnz from '@buttonize/cdk'
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class ExamplesStack extends cdk.Stack {
constructor(scope: Construct, id: string, props?: cdk.StackProps) {
super(scope, id, props)

btnz.GlobalConfig.init(this, {
apiKey: process.env.BUTTONIZE_API_KEY, // Ideally use SSM or Secrets Manager
executionRoleExternalId: 'secret-external-id' // Ideally use SSM or Secrets Manager
})
```


###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.GlobalConfig.init.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.GlobalConfig.init.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.GlobalConfigProps">GlobalConfigProps</a>

---

##### `setDefaultApiKey` <a name="setDefaultApiKey" id="@buttonize/cdk.GlobalConfig.setDefaultApiKey"></a>

```typescript
import { GlobalConfig } from '@buttonize/cdk'

GlobalConfig.setDefaultApiKey(scope: Construct, apiKey: string)
```

Set default API for whole CDK stack.

**API Key is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

*GlobalConfig.setDefaultApiKey or GlobalConfig.init method can be called only once per stack.
Make sure to call GlobalConfig.setDefaultApiKey only in the beginning of your stack definition.*

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.GlobalConfig.setDefaultApiKey.parameter.scope"></a>

- *Type:* constructs.Construct

CDK Construct or Stack where Buttonize resources will be deployed.

---

###### `apiKey`<sup>Required</sup> <a name="apiKey" id="@buttonize/cdk.GlobalConfig.setDefaultApiKey.parameter.apiKey"></a>

- *Type:* string

Buttonize API key used for provisioning Cloud Formation Custom Resources.

You can get the API key in  {@link https://app.buttonize.io/organization Organization settings in Buttonize}.

---

##### `setDefaultExecutionRoleExternalId` <a name="setDefaultExecutionRoleExternalId" id="@buttonize/cdk.GlobalConfig.setDefaultExecutionRoleExternalId"></a>

```typescript
import { GlobalConfig } from '@buttonize/cdk'

GlobalConfig.setDefaultExecutionRoleExternalId(scope: Construct, externalId: string)
```

Set default External ID for whole CDK stack's Buttonize execution role.

**External ID is a secret value. Please make sure to save it to Secrets Manager or SSM or any other secure storage.**

*GlobalConfig.setDefaultExecutionRoleExternalId or GlobalConfig.init method can be called only once per stack.
Make sure to call GlobalConfig.setDefaultExecutionRoleExternalId only in the beginning of your stack definition.*

> [{@link https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html Read more about use of External ID in AWS IAM }]({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html Read more about use of External ID in AWS IAM })

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.GlobalConfig.setDefaultExecutionRoleExternalId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `externalId`<sup>Required</sup> <a name="externalId" id="@buttonize/cdk.GlobalConfig.setDefaultExecutionRoleExternalId.parameter.externalId"></a>

- *Type:* string

Min length of External ID value must be 8 chars.

---




