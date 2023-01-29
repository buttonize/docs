---
slug: /
sidebar_position: 1
description: Buttonize your infrastructure right now and create your first widget.
---

# Quick start

> There are times when you wish you could just **connect** a simple **button** directly **to** a **lambda function** and give it to your colleagues right away.
 
🚀 You can do that now in a matter of seconds! Go and Buttonize your infrastructure. 🚀

## What is Buttonize

- Buttonize is a Low-code SaaS tool made for Serverless developers.
- Buttonize has first-class support for Infrastructure as Code tools.
- Buttonize is not just buttons. You can also build forms with multiple inputs and much more. 
- Buttonize widgets do not invoke only lambda functions. You can do any AWS API call.
- Buttonize can render output as Markdown, JSON or Text.

<iframe width="720" height="405" src="https://www.youtube.com/embed/ChKkyWqkcwQ" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## First steps

### Sign-up at [app.buttonize.io](https://app.buttonize.io/)

### [Create widget in UI](../user-interface/create-new-widget.md)

#### Example

[![Create new widget](/img/getting-started/ui.png)](../user-interface/create-new-widget.md)


### [Build widgets via IaC](../infrastructure-as-code/aws-cdk/quick-start.md) 

#### Example - AWS CDK

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

