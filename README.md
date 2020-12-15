# CDK + SAM101

Attempting to get AWS CDK and SAM to play nice together.

Based on guidance found [here](https://docs.aws.amazon.com/cdk/latest/guide/sam.html)

**Note:** You need the sam cli installed for this to work. [Instructions](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

## Useful commands

- `npm run sam-local` generates a local CloudFormation template and then invokes the sam local api gateway
- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
