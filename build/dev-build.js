const { exec } = require('child_process');

function LogDivider()
{
	console.log("");
	console.log("-------------------------------------------------------------------------------------------------");	
	console.log("");
}

function Transpile(configPath, successCallback, errorCallback)
{
	exec("tsc --p " + configPath, (error, out, stderr) =>
	{
    	if(error)
    	{
			console.error("An error ocurred executing the command: Name: " + error.name + " | Message: " + error.message);   
        	console.error(stderr);

			errorCallback();
    	}
    	else
    	{
        	if(out != null && out != "")
        	{
            	console.log(out);
        	}         
			
			successCallback();
    	}
	});
}

console.log("");
console.log(" --- Kuumba Forms Dev Build --- ");

LogDivider();

console.log("1/2: Transpiling.");
console.log("");
console.log("Running tsc on ./src/tsconfig.json...");
console.log("");

Transpile("./src/tsconfig.json", () =>
{
	console.log("1/2: Transpiling Successful.");
	GenerateDtsFile();
}, 
() =>
{	
	console.error("1/2: Transpiling Failed.");
});

function GenerateDtsFile()
{
	LogDivider();
	console.log("2/2: Generating d.ts File.");
	console.log("");
	console.log("Running tsc on ./build/tsconfig-build.json");
	console.log("");

	Transpile("./build/tsconfig-build.json", () =>
	{
		console.log("2/2: Generating d.ts File Successful.");	
		LogDivider();	
		console.log("--- Kuumba Build Succeeded! ---");
	}, 
	() =>
	{
		console.error("2/2: Generating d.ts File Failed.");
		LogDivider();
		console.error("--- Kuumba Build Failed! ---");
	});	
}