import { App } from 'sst/constructs'

export const isProd = (app: App): boolean => app.stage === 'master'

export const appDomain = (app: App): string => {
	if (
		typeof process.env.FEATURE_DEPLOYMENT_SECRET === 'undefined' ||
		process.env.FEATURE_DEPLOYMENT_SECRET.length < 6
	) {
		throw new Error(
			'FEATURE_DEPLOYMENT_SECRET="${process.env.FEATURE_DEPLOYMENT_SECRET}" is not set or too short (min 6 chars)'
		)
	}

	return isProd(app)
		? 'docs.buttonize.io'
		: app.local
			? 'localhost:3000'
			: `${app.stage.toLowerCase()}-docs-${
					process.env.FEATURE_DEPLOYMENT_SECRET
				}.staging.buttonize.io`
}
