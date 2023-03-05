import type { SSTConfig } from 'sst'

import { DocsStack } from './stacks/docs'

const config: SSTConfig = {
	config() {
		return {
			name: 'docs',
			region: 'us-east-1',
			stage: 'master'
		}
	},
	stacks(app) {
		app.setDefaultRemovalPolicy('destroy') // TODO Change before going to  production

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
