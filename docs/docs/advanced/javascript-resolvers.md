---
sidebar_position: 1
description: Thanks to JavaScript resolvers Buttonize allows developers to connect any widget to any of all the 250+ AWS services.
toc_max_heading_level: 4
---

# JavaScript Resolvers

## Intro

In AWS there is a familiar concept of using templating languages for mapping incoming endpoint requests to AWS API calls. This way there is no need for any intermediary lambda function to do the calls and this way developers can minimize latency and costs. This was introduced long time ago by Amazon API Gateway using Velocity Templating Language (VTL) and then also used in AWS AppSync, which in 2022 came up with a new alternative demanded by the community - Javascript resolvers, where Javascript is used as a "templating" language.

Buttonize follows this trend and has a feature called "Custom integration" thanks to which developers can connect all the widgets directly to any of 250+ AWS services.

## Request resolver

By default when you switch from the "basic" to "custom" integration in the widget editor, you will see example resolver. Request resolver is a function that receives a [context](#context) as a single parameter and returns a valid "request" object.

```js
// Request resolver resulting in AWS Lambda invocation
function request(ctx) {
  return {
    provider: 'aws',
    service: 'lambda',
    method: 'invoke',
    region: 'us-east-1',
    params: {
      FunctionName: 'name-of-the-lambda-function',
      Payload: JSON.stringify(ctx.args)
    }
  }
}
```

### Return type

The expected structure to be returned from the `request` resolver function.

<details>
  <summary>Example</summary>

```js
// Example response of the `resolver` function
{
  provider: 'aws',
  service: 'lambda',
  method: 'invoke',
  region: 'eu-central-1',
  params: {
    FunctionName: 'name-of-the-lambda-function',
    Payload: '{"clientEmail":"test@client.com","discount": "599","sendEmail": "true"}'
  }
}
```
</details>

#### provider

*Type: <span className="mono">string</span>*

Name of the cloud provider.

*Currently only valid value is `aws`.*

#### service

*Type: <span className="mono">string</span>*

Name of the cloud service to be invoked.

The name of the service must be *lowercase* and must have the same notation as in [AWS JavaScript SDK v2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

For example `lambda`, `stepfunctions`, `sqs`, `dynamodb`, etc.

#### method

*Type: <span className="mono">string</span>*

Name of the service method to be invoked.

The name of the service must be *camelCase* and must have the same notation as in [AWS JavaScript SDK v2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

For example `invoke`, `startSyncExecution`, `purgeQueue`, `putItem`, etc.

#### region

*Type: <span className="mono">string</span>*

Cloud provider region where to perform the API call.

The name of the region must be *lowercase*. [List of AWS regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions)

For example `us-east-2`, `ap-south-1`, `eu-west-2`, `ap-east-1`, etc.

#### params

*Type: <span className="mono">Object</span>*

Parameters used when doing the API call to the cloud service. Parameters must be exactly the same as in the [AWS JavaScript SDK v2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

```js
// DynamoDB.putItem example
params: {
  TableName: 'some-ddb-table',
  Item: {
    PK: {
      S: ctx.args.hometown
    }, 
    SK: {
      S: Math.random().toString().split('.')[1]
    }, 
    FirstName: {
      S: ctx.args.firstName
    },
    LastName: {
      S: ctx.args.lastName
    }
  }
}
```

## Response resolver

Response resolver is a function that receives a [context](#context) as a single parameter and returns a valid "response" object. This object basically determines what engine will be used for displaying resulting content.

```js
// Response resolver for AWS Lambda invocation 
function response(ctx) {
  return {
    format: 'json',
    body: ctx.result.Payload
  }
}
```

### Return type

The expected structure to be returned from the `response` resolver function.

<details>
  <summary>Example</summary>

```js
// Example response of the `resolver` function
{
  format: 'markdown',
  body: ctx.result.Payload
}
```
</details>

#### format

*Type: <span className="mono">string</span>*

Data format of the `body` field.

*Currently only allowed values are `json` or `markdown` or `text`.*

#### body

*Type: <span className="mono">string</span>*

Raw data of contents to be displayed. Make sure the content has valid syntax based on the value in the `format` field.

## Context

Below is documented structure of the `ctx` parameter, as mentioned in both request and response resolvers.

`ctx` is the only parameter of the `request` resolver function.

`ctx` in *response* resolver contains one extra field "`result`" which contains raw response from the API call. 

<details>
  <summary>Example</summary>

```js
// Example value of the request context object
{
  timestamp: 1685904949138,
  identity: {
    user: {
      id: '12345667-1234-1234-1234-123213141',
      email: 'some@user.com',
      firstName: 'Test',
      lastName: 'User',
      groups: [
        {
          id: '1kl12jlkas0amsa023',
          name: 'Admins'
        }
      ]
    },
    organization: {
      id: 'as8saml1naslkd',
      name: 'Some Company Inc.'
    }
  },
  args: {
    'clientEmail': 'test@client.com',
    'discount': '599',
    'sendEmail': 'true' 
  }
}
```
</details>


#### args

*Type: <span className="mono">Object</span>*

In case of *Button* the value is an empty object `{}`.

In case of *Form* the value is a key-value <span className="mono">(string-string)</span> object containing values of the form fields.

```js
{
  'clientEmail': 'test@client.com',
  'discount': '599',
  'sendEmail': 'true' 
}
```

#### result?

*Type: <span className="mono">Object</span>*

:warning: This field is available only in context of *response* resolver.

Value is a raw response object from AWS API call.

```js
// Example response from AWS Lambda invocation API call 
result: {
  StatusCode: 200,
  ExecutedVersion: '$LATEST',
  Payload: '{"format":"json","body":"{}"}'
}
```

#### timestamp

*Type: <span className="mono">number</span>*

Actual unix timestamp in milliseconds.

#### identity.user.id

*Type: <span className="mono">string</span>*

ID of Buttonize user interacting with the widget.

#### identity.user.email

*Type: <span className="mono">string</span>*

Email address of Buttonize user interacting with the widget.

#### identity.user.firstName

*Type: <span className="mono">string</span>*

First name of Buttonize user interacting with the widget.

#### identity.user.lastName

*Type: <span className="mono">string</span>*

Last name of Buttonize user interacting with the widget.

#### identity.user.groups

*Type: <span className="mono">Array<Group\></span>*

Array of permission groups of the user interacting with the widget. 


#### identity.user.groups[*number*].id

*Type: <span className="mono">string</span>*

ID of the permission group. Can be used for performing additional authorization logic inside your JS resolver or lambda function.

#### identity.user.groups[*number*].name

*Type: <span className="mono">string</span>*

Name of the permission group. Can be used for performing additional authorization logic inside your JS resolver or lambda function.

#### identity.organization.id

*Type: <span className="mono">string</span>*

ID of the organization the widget and the user is part of.

#### identity.organization.name

*Type: <span className="mono">string</span>*

Name of the organization the widget and the user is part of.
