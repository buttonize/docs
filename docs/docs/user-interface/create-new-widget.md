---
sidebar_position: 1
description: Execute and manage your Buttonize widgets.
---

# Create New Widget

This page describes individual parts of widget creation UI.

:::tip

If you would like to learn more about **how to create widgets with examples**, take a look at the **[Tutorials section](../getting-started/tutorials/overview)**.

:::

## Visual setup of a widget

1. Visual preview of how the widget will look like in [Workspace](./workspace.md). *The widget is not interactive at this stage.*
2. Basic setup of the widgets properties
    - Type of the widget
        - Button *- simple button which directly invokes an action*
        - Form *- pop-up form with arbitrary number of different kinds of input elements*
    - Name of the widget *- long descriptive name of the action which will be performed by the widget*
    - Label *- label of the action button, usually one or two words*
    - Other properties like for example *Color* in case of *Button* widget

![Create new widget - visual setup](/img/ui/create-new-widget/overview.png)


## AWS Integration setup

1. AWS Role which will be used for executing the action on your AWS account
    - See more about how to add new AWS IAM role [here](./organization.md#add-new-aws-role)
2. Type of integration
    - Basic *- quick way how to perform simple actions - like for example invoking a lambda function*
    - Custom *- fully customizable API call to AWS thanks to Javascript request/response resolvers. Call any AWS service with payload of your choice.*
3. Settings of the integration depending on the choice above

![Create new widget - integration](/img/ui/create-new-widget/integration.png)

## Widget preview

1. By clicking on the *Preview* button, you can test your widget setup and eventually see where is the problem.

![Create new widget - open a preview](/img/ui/create-new-widget/preview-start.png)

### Widget preview debugging

1. Visual preview of how the widget will look like in [Workspace](./workspace.md). *The widget is ready to be cliked on.*
2. Debug console of the execution. You can see wheter the overall execution was successful and what were the individual steps.
    1. **Input** *- Input data transformed by the request resolver. In case of the *Basic* integration, Buttonize uses a pre-made resolver code.*
        - Possible errors:
            - Source code of the resolver is invalid and contains syntax errors.
            - Resolver funtion timed-out.
            - Resolver function returned data in invalid format.
    2. **AWS Authentication** *- Buttonize assumes the selected AWS IAM role in order to access your AWS account securely. Read more about the *assume role* feature in AWS [here](https://docs.aws.amazon.com/sdkref/latest/guide/feature-assume-role-credentials.html)*
        - Possible errors:
            - AWS IAM Role on your AWS account has different External ID in the trust policy than entered in Buttonize.
            - AWS IAM Role on your AWS account has different principal account ID in the trust policy than Buttonize account - `081205402391`.
            - AWS IAM Role ARN entered into Buttonize contains a typo and thus does not exist. 
    3. **AWS Invocation** *- Response from AWS API call*
        - Possible errors:
            - Request resolver can form invalid AWS API request.
            - AWS service can be temporarily unavailable at the time.
    4. **Output** *- Output data transformed by the response resolver. In case of the *Basic* integration, Buttonize uses a pre-made resolver code.*
        - Possible errors:
            - Source code of the resolver is invalid and contains syntax errors.
            - Resolver funtion timed-out.
            - Resolver function returned data in invalid format.

![Create new widget - preview debugging](/img/ui/create-new-widget/preview-overview.png)

### Widget preview example error

1. We can see that the invocation on the third step *AWS Invocation* because we are trying to invoke a lambda function which does not exist.

![Create new widget - preview error](/img/ui/create-new-widget/preview-error.png)
