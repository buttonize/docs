import { App } from 'sst/constructs'

export const isProd = (app: App): boolean => app.stage === 'master'

export const appDomain = (app: App): string =>
	isProd(app)
		? 'docs.buttonize.io'
		: app.local
			? 'localhost:3000'
			: `${app.stage.toLowerCase()}-docs-kzpeax.staging.buttonize.io`
