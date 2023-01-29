---
sidebar_position: 1
description: Start now using Buttonize with your AWS CDK stacks.
---

# Quick start

<p>
  <a href="https://discord.gg/2quY4Vz5BM"><img alt="Discord" src="https://img.shields.io/discord/1038752242238496779?style=flat-square" /></a>&nbsp;
  <a href="https://www.npmjs.com/package/@buttonize/cdk"><img alt="npm" src="https://img.shields.io/npm/v/@buttonize/cdk?style=flat-square" /></a>&nbsp;
  <a href="https://github.com/buttonize/buttonize-cdk/actions/workflows/release.yml?query=branch%3Amaster"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/buttonize/buttonize-cdk/release.yml?branch=master&style=flat-square" /></a>
</p>


At Buttonize we make sure **Infrastructure as Code definitions are first class citizens** in our low-code ecosystem and that's why we prepared an AWS CDK Constructs library containing everything you need in order to manage Buttonize widgets from your AWS CDK.


<img src="/img/cdk.png" style={{ height: "100px" }}/>

## Installation

### TypeScript

```
$ npm i -D @buttonize/cdk
```

### Python, Java, Go, .NET

:::note

Coming soon...

:::

## Example code

[See more examples at GitHub](https://github.com/buttonize/buttonize-cdk/tree/master/examples#readme)

```typescript
import * as path from 'path'
import * as btnz from '@buttonize/cdk'
import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'

export class SimpleFormStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    btnz.GlobalConfig.init(this, {
      apiKey: process.env.BUTTONIZE_API_KEY, // Ideally fetch this information from SSM
      externalId: 'some-external-id-here123' // Ideally fetch this information from SSM
    })

    const simpleFormActionLambda = new NodejsFunction(
      this,
      'SimpleFormActionLambda',
      {
        handler: 'handler',
        entry: path.join(__dirname, `/src/index.ts`),
        runtime: lambda.Runtime.NODEJS_18_X
      }
    )

    const form = new btnz.Form({
      name: '[Example: simple-form] Invoke the lambda fucntion',
      label: 'Open form',
      tags: ['simple', 'button', 'example']
    })

    form
      .addTextField('email', {
        label: 'Email of the user',
        placeholder: 'user@example.com',
        regex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
      })
      .addToggleField('isAdmin', {
        label: 'Is admin'
      })

    simpleFormActionLambda.addEventSource(form)
  }
}
```

