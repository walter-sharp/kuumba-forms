import { GradientBrush } from "./GradientBrush";
import { BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class LinearGradient extends GradientBrush
{
    X1: number;
    Y1: number;
    X2: number;
    Y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number)
    {
        super(BrushTypes.LinearGradient);

        this.X1 = x1;
        this.Y1 = y1;
        this.X2 = x2;
        this.Y2 = y2;
    }
}