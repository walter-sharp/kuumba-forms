import { GradientBrush } from "./GradientBrush";
import { BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class RadialGradient extends GradientBrush
{
    constructor(startColour: Colour, endColour: Colour)
    {
        super(BrushTypes.RadialGradient);

        this.StartColour = startColour;
        this.EndColour = endColour;
    }
}