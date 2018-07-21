import { IRenderer } from "./Renderer/IRenderer";
import { Control } from "./Forms/Controls/Control";

export class InitialisationOptions
{
    Element: HTMLCanvasElement;
    Maximized: boolean = true;
    Renderer: IRenderer = null;
    RootControl: Control = null;
}

export class KuumbaForms
{    
    private _Options: InitialisationOptions;

    constructor(options: InitialisationOptions)
    {
        this._Options = options;

        this.Initialise();
    }

    private Initialise(): void
    {
        let opts = this._Options;

        if(opts.Maximized == true)
        {
            opts.Element.width = window.innerWidth;
            opts.Element.height = window.innerHeight;
        }
    }

    private Paint(): void
    {
        let requestId = requestAnimationFrame(this.Paint);

        try 
        {            
            this._Options.RootControl.Paint(this._Options.Renderer);
        }
        catch(ex)
        {
            cancelAnimationFrame(requestId);
            console.error("Kuumba: " + ex);
        }
    }

    public BeginAnimationLoop()
    {
        this.Paint();
    }
}