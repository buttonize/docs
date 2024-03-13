import { URL } from 'node:url'

import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { defineConfig } from 'astro/config'
import aws from 'astro-sst'
import rehypeExternalLinks from 'rehype-external-links'
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

/** @type {import('rehype-external-links').Options} */
const rehypeExternalLinksOptions = {
	target: '_blank',
	rel: 'external',
	test: (element) => {
		try {
			return !/(buttonize\.io|localhost)/.test(
				new URL(element?.properties?.href ?? '').hostname
			)
		} catch {
			return false
		}
	}
}

const prodHeadScripts = [
	{
		tag: 'script',
		attrs: {
			async: true,
			src: 'https://www.googletagmanager.com/gtag/js?id=G-9LX6CMEGR1'
		}
	},
	{
		tag: 'script',
		content: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-9LX6CMEGR1');`
	}
]

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE,
	adapter: aws({
		deploymentStrategy: 'static'
	}),
	markdown: {
		remarkPlugins: [[remarkMermaid, remarkMermaidOptions]],
		rehypePlugins: [[rehypeExternalLinks, rehypeExternalLinksOptions]]
	},
	integrations: [
		starlight({
			favicon: 'favicon.ico',
			expressiveCode: {
				plugins: [pluginCollapsibleSections()]
			},
			logo: {
				dark: './src/assets/logo_dark.svg',
				light: './src/assets/logo.svg',
				alt: 'Buttonize.io Logo',
				replacesTitle: true
			},
			title: 'Buttonize Docs',
			tagline: 'Build UI for your AWS CDK apps',
			// IDK what's the difference between tagline and description
			description:
				'Build user interface in AWS CDK for your AWS cloud-native apps',
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/buttonize/docs/tree/master/docs'
			},
			social: {
				github: 'https://github.com/buttonize',
				'x.com': 'https://twitter.com/buttonizeio',
				discord: 'https://discord.buttonize.io',
				youtube: 'https://www.youtube.com/@buttonizeio'
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/tailwind.css',
				'./src/styles/custom.css'
			],
			sidebar: [
				{
					label: 'Getting started',
					autogenerate: {
						directory: 'getting-started'
					}
				},
				{
					label: 'Core concepts',
					autogenerate: {
						directory: 'core-concepts'
					}
				},
				{
					label: 'Actions',
					autogenerate: {
						directory: 'actions'
					}
				},
				{
					label: 'Components',
					autogenerate: {
						directory: 'components'
					}
				},
				{
					label: 'Guides',
					autogenerate: {
						directory: 'guides'
					}
				},
				{
					label: 'Reference',
					autogenerate: {
						directory: 'reference'
					}
				}
			],
			components: {
				// Override the default `SocialIcons` component.
				SocialIcons: './src/components/SocialIcons.astro'
			},
			head: process.env.STAGE === 'master' ? prodHeadScripts : []
		}),
		tailwind({
			// Disable the default base styles:
			applyBaseStyles: false
		})
	]
})
