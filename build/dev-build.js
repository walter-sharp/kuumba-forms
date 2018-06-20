//generate the typing file
require('dts-generator').default({
    name: 'kuumba-forms',
    project: './',
    out: '../dist/kuumba-forms.d.ts'
});

//bundle
const Bundler = require('parcel-bundler');
const Path = require('path');

let file = Path.join(__dirname, '../src/KuumbaForms.ts');

let options = {
  outDir: './dist',
  outFile: 'kuumba-forms.js',
  watch: false,
  minify: false  
};

let bundler = new Bundler(file, options);
bundler.bundle();