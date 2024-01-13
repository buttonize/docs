import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import aws from 'astro-sst'
import remarkMermaid from 'remark-mermaidjs'

/** @type {import('remark-mermaidjs').RemarkMermaidOptions} */
const remarkMermaidOptions = {
	mermaidConfig: {
		securityLevel: 'strict',
		theme: 'base',
		// https://mermaid.js.org/config/theming.html#theme-variables
		themeVariables: {
			primaryColor: '#abcbf8',
			primaryTextColor: '#181818',
			primaryBorderColor: '#0064d2',
			lineColor: '#0a2346',
			secondaryColor: '#c2c2c2',
			tertiaryColor: '#fff'
		},
		flowchart: {
			padding: 20
		}
	}
}

// https://astro.build/config
export default defineConfig({
	adapter: aws({
		deploymentStrategy: 'static'
	}),
	markdown: {
		remarkPlugins: [[remarkMermaid, remarkMermaidOptions]]
	},
	integrations: [
		tailwind(),
		starlight({
			favicon: 'favicon.ico',
			logo: {
				dark: './src/assets/logo_dark.svg',
				light: './src/assets/logo.svg',
				alt: 'Buttonize.io Logo',
				replacesTitle: true
			},
			title: 'Buttonize Docs',
			tagline: 'Build UI for your AWS CDK apps', // IDK what's the difference between tagline and description
			description:
				'Build user interface in AWS CDK for your AWS cloud-native apps',
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/buttonize/docs/tree/master/docs'
			},
			social: {
				github: 'https://github.com/buttonize',
				'x.com': 'https://twitter.com/buttonizeio',
				discord: 'https://discord.gg/2quY4Vz5BM',
				youtube: 'https://www.youtube.com/@buttonizeio'
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css'
			],
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
