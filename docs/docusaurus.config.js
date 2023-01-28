// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Buttoinze Docs',
	tagline: 'Buttonize your Serverless infrastructure right now.',
	url: 'https://docs.buttonize.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'buttonize', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	markdown: {
		mermaid: true
	},

	themes: ['@docusaurus/theme-mermaid'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsed: false,
					routeBasePath: '/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				},
				gtag: {
					trackingID: 'G-91Y8LM19G1'
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				logo: {
					alt: 'Buttonize',
					width: 150,
					src: 'img/logo.svg',
					srcDark: 'img/logo_dark.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'getting-started/quick-start',
						position: 'left',
						label: 'Docs'
					},
					{
						href: 'https://blog.buttonize.io',
						label: 'Blog',
						position: 'left'
					},
					{
						href: 'https://app.buttonize.io',
						label: 'Buttonize App',
						position: 'right'
					}
				]
			},
			footer: {
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'Twitter',
								href: 'https://twitter.com/Buttonizeio'
							},
							{
								label: 'Discord',
								href: 'https://discord.gg/2quY4Vz5BM'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								href: 'https://blog.buttonize.io'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/buttonize'
							}
						]
					}
				],
				logo: {
					src: 'img/logo.svg',
					srcDark: 'img/logo_dark.svg',
					height: 30,
					alt: 'Buttonize'
				},
				copyright: `Copyright © ${new Date().getFullYear()} Buttonize. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		}),
	plugins: [
		...(process.env.NODE_ENV !== 'development'
			? [
					[
						'docusaurus-plugin-remote-content',
						{
							name: 'buttonize-cdk',
							sourceBaseUrl:
								'https://raw.githubusercontent.com/buttonize/buttonize-cdk/master/',
							outDir: 'docs/infrastructure-as-code/aws-cdk',
							documents: ['API.md'],
							performCleanup: false,
							modifyContent(filename, content) {
								switch (filename) {
									case 'API.md':
										return {
											filename: 'api-reference.md',
											content: `---
sidebar_position: 2
description: API Reference of Buttonize AWS CDK constructs
---
		${content.replace(
			/# API Reference.*\n/,
			`# API Reference
<p>
	<a href="https://discord.gg/2quY4Vz5BM"><img alt="Discord" src="https://img.shields.io/discord/1038752242238496779?style=flat-square" /></a>&nbsp;
	<a href="https://www.npmjs.com/package/@buttonize/cdk"><img alt="npm" src="https://img.shields.io/npm/v/@buttonize/cdk?style=flat-square" /></a>&nbsp;
	<a href="https://github.com/buttonize/buttonize-cdk/actions/workflows/release.yml?query=branch%3Amaster"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/buttonize/buttonize-cdk/release.yml?branch=master&style=flat-square" /></a>
</p>
<img src="/img/cdk.png" style={{ height: "100px", marginTop: "10px" }}/>
`
		)}`
										}
								}
								return undefined
							}
						}
					]
			  ]
			: []),
		[
			'@cmfcmf/docusaurus-search-local',
			{
				indexBlog: false
			}
		]
	],

	scripts: [
		{
			src: '//code.tidio.co/dtkuzumyqtv5yqjxhkn3dtgxnaco0qwc.js',
			async: true
		}
	]
}

module.exports = config
