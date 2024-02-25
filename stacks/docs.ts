import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { AstroSite, StackContext } from 'sst/constructs'

import { appDomain, isProd } from './utils.js'

export function DocsStack({ stack, app }: StackContext): void {
	if (typeof process.env.PROD_CERTIFICATE_ARN === 'undefined') {
		throw new Error('PROD_CERTIFICATE_ARN is undefined')
	}
	if (typeof process.env.STAGING_CERTIFICATE_ARN === 'undefined') {
		throw new Error('STAGING_CERTIFICATE_ARN is undefined')
	}

	new AstroSite(stack, 'Site', {
		path: 'docs',
		environment: {
			SITE: `${app.local ? 'http' : 'https'}://${appDomain(app)}`,
			STAGE: app.stage,
			APP_BASE_URL: process.env.APP_BASE_URL ?? ''
		},
		customDomain: {
			domainName: appDomain(app),
			hostedZone: isProd(app) ? 'buttonize.io' : 'staging.buttonize.io',
			cdk: {
				certificate: Certificate.fromCertificateArn(
					stack,
					'certificate',
					isProd(app)
						? process.env.PROD_CERTIFICATE_ARN
						: process.env.STAGING_CERTIFICATE_ARN
				)
			}
		}
	})

	stack.addOutputs({
		frontendUrl: `${app.local ? 'http' : 'https'}://${appDomain(app)}`
	})
}
