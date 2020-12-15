#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPlusSam101Stack } from '../lib/cdk-plus-sam101-stack';

const app = new cdk.App();
new CdkPlusSam101Stack(app, 'CdkPlusSam101Stack');
