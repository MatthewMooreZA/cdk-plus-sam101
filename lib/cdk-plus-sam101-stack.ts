import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from "@aws-cdk/aws-apigateway";


export class CdkPlusSam101Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    const helloWorldHandler = new lambda.Function(this, 'HelloWorld', {
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'app.lambda_handler',
      code:    lambda.Code.fromAsset('./app/hello_world'),
    });

    const api = new apigateway.RestApi(this, "cdk101-api", {
      restApiName: "CDK 101 Service",
      description: "Is this thing even on?"
    });

    api.root.addResource('hello').addMethod('GET', new apigateway.LambdaIntegration(helloWorldHandler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    }));

  }
}
