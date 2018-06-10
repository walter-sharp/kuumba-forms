import { Brush, BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class SolidColourBrush extends Brush
{
    protected _Colour: Colour;

    constructor(colour?: Colour)
    {
        super(BrushTypes.SolidColour);
    }

    public get Colour(): Colour
    {
        return this._Colour;
    }

    public set Colour(v: Colour)
    {
        this._Colour = v;
    }
}