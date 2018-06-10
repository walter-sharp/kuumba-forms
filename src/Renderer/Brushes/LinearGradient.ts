import { GradientBrush } from "./GradientBrush";
import { BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class LinearGradient extends GradientBrush
{
    constructor(startColour: Colour, endColour: Colour)
    {
        super(BrushTypes.LinearGradient);

        this.StartColour = startColour;
        this.EndColour = endColour;
    }
}