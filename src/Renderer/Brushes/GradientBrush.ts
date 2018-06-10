import { Brush, BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class GradientBrush extends Brush
{
    protected _StartColour: Colour;
    protected _EndColour: Colour;

    constructor(type: BrushTypes)
    {
        super(type);
    }

    public SetColours(start: Colour, end: Colour)
    {
        this.StartColour = start;
        this.EndColour = end;
    }

    public get StartColour(): Colour
    {
        return this._StartColour;
    }

    public set StartColour(v: Colour)
    {
        this._StartColour = v;
    }

    public get EndColour(): Colour
    {
        return this._EndColour;
    }

    public set EndColour(v: Colour)
    {
        this._EndColour = v;
    }
}