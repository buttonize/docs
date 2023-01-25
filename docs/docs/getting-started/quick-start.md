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

