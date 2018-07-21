const { exec } = require('child_process');

console.log("");
console.log(" --- Kuumba Forms Dev Build --- ");
console.log("");
console.log("Generating d.ts file...");

require('dts-generator').default({
    name: 'KuumbaForms',
    project: './src/',
    out: './dist/kuumba-forms.d.ts'
});

console.log("Running tsc on ./src/tsconfig.json...");

exec("tsc --p .\\src\\tsconfig.json", (error, out, stderr) =>
{
    if(error)
    {
        console.error("An error ocurred executing the command: Name: " + error.name + " | Message: " + error.message);   
        console.log(stderr);         
    }
    else  
    {
        if(out != null && out != "")
        {
            console.log(out);
        }
          
        console.log("tsc compile successful");
    }
});