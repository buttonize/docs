---
sidebar_position: 4
description: Create and manage your organization workspace in Buttonize.
---

# Organization

Buttonize uses the widely used concept of grouping resources and users by "organization".
An organization is usually created per a whole company or business unit. 


## Features

### General

1. Change organization name
2. Transfer ownership of the organiation to another member of the organization
3. Leave organization (*if you are NOT owner of the organization*)
4. Delete organization (*if you are owner of the organization*)

![General settings](/img/ui/organization/general.png)

### Members
Big part of Buttonize is collaboration between colleagues which are coding the widgets and those who are using them. You can invite your colleagues by email.

![Members](/img/ui/organization/members.png)

### AWS

In order to allow Buttonize widgets to interact with your AWS accounts, you must provide a Buttonize with AWS IAM role which it assumes.
You can do it via [IaC tools like AWS CDK](../infrastructure-as-code/aws-cdk/quick-start.md) or you can do it manually in the Buttonize App as described below. 

#### List of existing aws roles

1. Add new AWS role
2. Edit or Remove existing AWS role
3. List of existing AWS roles

![AWS settings - list of roles](/img/ui/organization/aws-list.png)

#### Add new AWS role

It's possible to setup AWS IAM role in two ways:

##### 1. Via CloudFormation template

- Buttonize opens a new window with prefilled AWS CloudFormation stack information with AWS IAM role template.
- Once the deployment of the stack is finished, get back to the Buttonize tab and enter *AWS Account ID*.
- ✅ Done

:::caution

The AWS IAM Role from CloudFormation template only has limited permissions. It can only invoke a lambda functions. So if you plan to use custom AWS integration with this role, make sure you expand the role permissions.

:::

##### 2. Manually

- Prepare the AWS IAM role on your AWS account with appropriate permissions. Make sure to use least privilege principle.
- Add Trust Relationship to the role and make sure to repalce `sts:ExternalId` value `REPLACE_WITH_YOUR_SECRET_HERE`.
  ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Principal": {
            "AWS": "arn:aws:iam::081205402391:root"
          },
          "Action": "sts:AssumeRole",
          "Condition": {
            "StringEquals": {
              "sts:ExternalId": "REPLACE_WITH_YOUR_SECRET_HERE"
            }
          }
        }
      ]
    }
  ```
- Add AWS IAM Role ARN and External ID to the Buttonize dialog
- ✅ Done

![AWS settings - choice](/img/ui/organization/aws-new-choice.png)

:::danger

Make sure to **always use least privilege principle** when creating AWS IAM roles for Buttonize.

:::

##### AWS Role form:

1. Label
2. Role ARN - *Larn more about AWS IAM ARNs [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns)*
3. AWS Account ID - *Learn more about how to get your AWS Account ID [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html)* 
4. Role Name - If you use the CloudFormation template, Buttonize automatically fills role name for you.
5. External ID - External ID must have min length of 8 characters. If you use the CloudFormation template, Buttonize automatically generates External ID for you. Learn more about External ID in AWS IAM [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

![AWS settings - choice](/img/ui/organization/aws-new.png)

### Permissions

:::note

Coming soon...

:::


### Billing

:::note

Coming soon...

:::
