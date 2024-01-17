const storageKey = 'docs-framework'
const eventKey = 'frameworkValue'

export const frameworkWhitelist = ['cdk', 'terraform'] as const

export const setFramework = (value: string): void => {
	localStorage.setItem(
		storageKey,
		frameworkWhitelist.includes(value as (typeof frameworkWhitelist)[number])
			? value
			: frameworkWhitelist[0]
	)
	window.dispatchEvent(new CustomEvent(eventKey))
}

export const getFramework = (): string => {
	const value = localStorage.getItem(storageKey)
	if (
		value === null ||
		!frameworkWhitelist.includes(value as (typeof frameworkWhitelist)[number])
	) {
		setFramework(frameworkWhitelist[0])
		return frameworkWhitelist[0]
	}
	return value
}

export const onFrameworkChange = (
	callback: (newValue: string) => void
): { end: () => void } => {
	const listener: EventListener = () => {
		callback(getFramework())
	}

	window.addEventListener(eventKey, listener)

	return {
		end: (): void => window.removeEventListener(eventKey, listener)
	}
}
