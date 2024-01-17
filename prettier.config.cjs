module.exports = {
	semi: false,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'none',
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
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
