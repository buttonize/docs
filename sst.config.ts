import { getStage } from '@purple/serverless-git-branch-stage-plugin'
import type { SSTConfig } from 'sst'

import { DocsStack } from './stacks/docs.js'

const config: SSTConfig = {
	config(globals) {
		const stage = globals.stage ?? getStage()

		return {
			name: 'docs',
			region: stage === 'master' ? 'us-west-2' : 'eu-central-1',
			stage: stage
		}
	},
	stacks(app) {
		if (app.stage === 'master' && app.local) {
			throw new Error(`Can't run dev mode on master branch`)
		}

		app.setDefaultFunctionProps({
			runtime: 'nodejs18.x',
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
