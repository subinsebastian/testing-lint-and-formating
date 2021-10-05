const env = require('./environments/environment');

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-console': env.prod ? 'error' : 'off',
		indent: [0, 'tab'],
		'no-tabs': ['off', { allowIndentationTabs: true }],
	},
};
