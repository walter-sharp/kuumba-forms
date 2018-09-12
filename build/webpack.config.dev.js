const path = require("path");

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
	}
}