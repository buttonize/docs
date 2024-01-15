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
	site: process.env.SITE,
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
					label: 'Getting started',
					autogenerate: { directory: 'getting-started' }
				},
				{
					label: 'Core concepts',
					autogenerate: { directory: 'core-concepts' }
				},
				{
					label: 'Components',
					collapsed: true,
					autogenerate: { directory: 'components' }
				},
				{
					label: 'Actions',
					collapsed: true,
					autogenerate: { directory: 'actions' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }
				}
			],
			components: {
				// Override the default `SocialIcons` component.
				SocialIcons: './src/components/SocialIcons.astro'
			}
		})
	]
})
