---
sidebar_position: 2
description: Execute and manage your Buttonize widgets.
---

# Workspace

Workspace is the main hub for browsing and executing the widgets.

1. View list of your latest widgets
2. Search for widgets by name
3. Filter widgets by tags
4. Execute widgets

![Worksapce](/img/ui/workspace/workspace.png)

## Successful widget execution

Successful execution has three possible visual formats:

1. Markdown
2. JSON
3. Text

The visual format is decided based on the data returned from lambda function or result of custom response template.

![Worksapce](/img/ui/workspace/success.png)

*<figcaption align="center">Example of JSON result</figcaption>*

## Widget execution errors

In case of a misconfiguration in AWS it's possible to see couple of errors.

Here are most common errors:

### Insufficient permissions of the AWS IAM Role

AWS IAM you set for the widget execution does not have sufficient permissions to perform requested action.

It can eaither be too restrictive `Action` section or too restrictive `Resource` section in the IAM role.

In case you are not sure what permissions you should choose, feel free to contact us.

![Worksapce](/img/ui/workspace/err-insuffperm.png)

### Incorrect trust relationship settings of AWS IAM Role

This error can happen for example in case when External ID is misspelled in Buttonize and is not matching the value in AWS IAM role's trust relationship policy.

Learn more about how to correctly setup AWS IAM role Trust Relationship [here](./organization.md#add-new-aws-role)

![Worksapce](/img/ui/workspace/err-trustrel.png)

