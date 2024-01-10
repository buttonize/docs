import { getStage } from '@purple/serverless-git-branch-stage-plugin'
import type { SSTConfig } from 'sst'

import { DocsStack } from './stacks/docs.js'

const config: SSTConfig = {
	config(globals) {
		const stage = globals.stage ?? getStage()

		if (
			process.env.CI !== 'true' &&
			stage === 'master' &&
			process.env.AWS_PROFILE !== 'buttonize-prod'
		) {
			throw new Error(
				`Deploying production to non-production AWS account (profile: ${process.env.AWS_PROFILE}).`
			)
		}

		if (
			process.env.CI !== 'true' &&
			stage !== 'master' &&
			process.env.AWS_PROFILE === 'buttonize-prod'
		) {
			throw new Error(
				`Deploying non-production stage (stage: ${stage}) to production AWS account.`
			)
		}

		return {
			name: 'docs',
			region: stage === 'master' ? 'us-west-2' : 'eu-central-1',
			stage: 'v2' //'master'
		}
	},
	stacks(app) {
		app.setDefaultRemovalPolicy('destroy') // TODO Change before going to production

		app.setDefaultFunctionProps({
			runtime: 'nodejs16.x',
			architecture: 'arm_64',
			logRetention: 'three_months',
			nodejs: {
				format: 'esm'
			}
		})

		app.stack(DocsStack, { id: 'docs' })
	}
}

export default config
