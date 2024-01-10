import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { AstroSite, StackContext } from 'sst/constructs'

import { appDomain, isProd } from './utils.js'

export function DocsStack({ stack, app }: StackContext): void {
	new AstroSite(stack, 'Site', {
		path: 'docs',
		customDomain: {
			domainName: appDomain(app),
			hostedZone: isProd(app) ? 'buttonize.io' : 'staging.buttonize.io',
			cdk: {
				certificate: Certificate.fromCertificateArn(
					stack,
					'certificate',
					isProd(app)
						? 'arn:aws:acm:us-east-1:081205402391:certificate/9782e717-e67a-4524-8861-0273e98fd899'
						: 'arn:aws:acm:us-east-1:376361556750:certificate/5b1aef5d-783e-4168-bb03-0feb3ac949e3'
				)
			}
		}
	})

	stack.addOutputs({
		frontendUrl: `${app.local ? 'http' : 'https'}://${appDomain(app)}`
	})
}
