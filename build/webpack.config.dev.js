const path = require("path");
const DtsBundleWebpack = require("dts-bundle-webpack");

module.exports = {
	watch: false,
	mode: "development",
	devtool: false,
	entry:
	{
		main: "./src/KuumbaForms"
	},
	output:
	{
		path: __dirname + "/../dist",
		filename: "kuumba-forms.js",
		library: "KuumbaForms",
		libraryTarget: "umd"
	},
	module:
	{
		rules:
		[
			{ test: /\.ts$/, use: "ts-loader", exclude: "/node_modules/" }
		]
	},
	resolve:
	{
		extensions: [ ".ts" ],
		modules: [ "./src" ]
	},
	plugins: [ new DtsBundleWebpack({ main: "./src/**/*.d.ts", removeSource: true, name: "KuumbaForms",  out: "../dist/kuumba-forms.d.ts" }) ]
}