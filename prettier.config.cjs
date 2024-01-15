module.exports = {
	semi: false,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'none',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-astro'],
	tailwindConfig: './docs/tailwind.config.js',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
