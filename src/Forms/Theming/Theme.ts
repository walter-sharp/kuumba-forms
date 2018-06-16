import { Style } from "./Style";

export class Theme
{
    Name: string;
    Version: string;
    ReleaseDate: string;

    Styles = new Array<Style>();
    
    /**
     * Loads a JSON theme file from the given path, on success this method calls LoadThemeFromSource using the response
     * @param path The path to the JSON theme file
     */
    public LoadThemeFromPath(path: string): Promise<void>
    {
        let promise = new Promise<void>((resolve, reject) =>
        {
            let request = new XMLHttpRequest();

            request.onreadystatechange = () =>
            {
                if (request.readyState == 4)
                {
                    if(request.status == 200)
                    {
                        if(this.LoadThemeFromSource(request.responseText) == true)
                        {
                            resolve();
                        }
                        else
                        {
                            reject("An error ocurred parsing the theme file, see log for more details.");
                        }
                    }
                    else
                    {
                        console.error("Kuumba: Unable to load theme from path: " + path + ". Server return: (" + request.status + ") " + request.statusText);
                        reject(request.statusText);
                    }
                }
            }

            request.open("GET", path, true);
        })

        return promise;
    }

    /**
     * Loads the theme from a raw JSON string
     * @param source 
     */
    public LoadThemeFromSource(source: string): boolean
    {
        try 
        {
            var themeData = JSON.parse(source);

            this.Name = themeData.Name;
            this.Version = themeData.Version;
            this.ReleaseDate = themeData.ReleaseDate;

            this.Styles = themeData.Styles;

            return true;
        }
        catch(ex)
        {
            console.error("Kuumba: Unable to load theme from source. " + ex);
        }

        return false;
    }
}