import { App } from '@serverless-stack/resources'

import { DocsStack } from './docs'

export default function (app: App): void {
	app.setDefaultFunctionProps({
		runtime: 'nodejs16.x',
		srcPath: 'services',
		bundle: {
			format: 'esm'
		}
	})

	app.stack(DocsStack, { id: 'docs' })
}
