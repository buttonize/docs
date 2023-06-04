import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { StackContext, StaticSite } from 'sst/constructs'

export function DocsStack({ stack }: StackContext): void {
	const site = new StaticSite(stack, 'Site', {
		path: 'docs',
		buildOutput: 'build',
		buildCommand: 'pnpm run build',
		errorPage: '404.html',
		customDomain: {
			domainName: 'docs.buttonize.io',
			hostedZone: 'buttonize.io',
			cdk: {
				certificate: Certificate.fromCertificateArn(
					stack,
					'certificate',
					'arn:aws:acm:us-east-1:081205402391:certificate/9782e717-e67a-4524-8861-0273e98fd899'
				)
			}
		}
	})

	stack.addOutputs({
		URL: `${site.url}`
	})
}
