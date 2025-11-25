const path = require("node:path");
const { addWebpackAlias } = require("customize-cra");

module.exports = function override(config) {
	addWebpackAlias({
		"~assets": path.resolve(__dirname, "src/assets"),
		"~components": path.resolve(__dirname, "src/components"),
		"~data": path.resolve(__dirname, "src/assets/data"),
		"~hooks": path.resolve(__dirname, "src/hooks"),
		"~pages": path.resolve(__dirname, "src/pages"),
		"~scripts": path.resolve(__dirname, "src/scripts"),
		"~types": path.resolve(__dirname, "src/types"),
	})(config);

	return config;
};
