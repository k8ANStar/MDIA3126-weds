// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
	const config = await getDefaultConfig(__dirname);

	// Add any customizations here if needed, for example:
	// config.resolver.sourceExts.push('cjs');

	return config;
})();
