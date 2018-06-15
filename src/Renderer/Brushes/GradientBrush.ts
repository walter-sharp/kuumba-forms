import { Brush, BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class GradientBrush extends Brush
{    
    private _ColourStops = new Array<Colour>();
    
    constructor(type: BrushTypes)
    {
        super(type);
    }

    AddColourStop(colourStop: Colour)
    {
        this._ColourStops.push(colourStop);
    }

    get ColourStops(): Array<Colour>
    {
        return this._ColourStops;
    }
}