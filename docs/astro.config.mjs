import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import aws from 'astro-sst'

// https://astro.build/config
export default defineConfig({
	adapter: aws({
		deploymentStrategy: 'static'
	}),
	integrations: [
		tailwind(),
		starlight({
			favicon: 'favicon.ico',
			logo: {
				dark: './src/assets/logo_dark.svg',
				light: './src/assets/logo.svg',
				alt: 'Buttonize.io Logo',
				replacesTitle: false
			},
			title: 'Docs',
			tagline: 'Build user interface in AWS CDK for your AWS Cloud application',
			lastUpdated: true,
			social: {
				github: 'https://github.com/buttonize',
				'x.com': 'https://twitter.com/buttonizeio',
				discord: 'https://discord.gg/2quY4Vz5BM',
				linkedin: 'https://www.linkedin.com/company/buttonize/',
				youtube: 'https://www.youtube.com/@buttonizeio'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' }
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }
				}
			]
		})
	]
})
