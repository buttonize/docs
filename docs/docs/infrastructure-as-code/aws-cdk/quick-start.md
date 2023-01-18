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

You can find more examples on [GitHub](https://github.com/buttonize/buttonize-cdk/tree/master/examples).

```typescript
import * as btnz from '@buttonize/cdk'
import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

export class ExamplesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    btnz.GlobalConfig.init(this, {
      apiKey: 'YOUR-BUTTONIZE-API-KEY', // Ideally fetch this information from SSM
      externalId: 'this-is-secret' // Ideally fetch this information from SSM
    })

    const sendUserPasswordResetEmail = new lambda.Function(
      this,
      'SendUserPasswordResetEmail',
      {
        handler: 'index.handler',
        code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Sending email... ')
          return {
            format: 'markdown',
            body: \`
              # Email sent

              
            \`
          }
        };
      `),
        runtime: lambda.Runtime.NODEJS_18_X
      }
    )

    const form = new btnz.Form({
      name: 'Send user password reset email',
      label: 'Send',
      tags: ['prod', 'users']
    })

    form.addTextField('email', {
      label: 'E-mail address of the user',
      placeholder: 'user@example.com'
    })

    form.addTextField('reason', {
      label: 'Internal reason why this action has been performed',
      placeholder: 'hacked',
      regex: '^(hacked|forgot|other)$'
    })

    form.addTextField('note', {
      label: 'Note'
    })

    sendUserPasswordResetEmail.addEventSource(form)
  }
}
```

