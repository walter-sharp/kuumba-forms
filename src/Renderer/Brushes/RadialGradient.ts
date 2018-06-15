import { GradientBrush } from "./GradientBrush";
import { BrushTypes } from "./Brush";
import { Colour } from "../Colour";

export class RadialGradient extends GradientBrush
{
    X1: number;
    Y1: number;
    R1: number;
    X2: number;
    Y2: number;
    R2: number;

    constructor(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number)
    {
        super(BrushTypes.RadialGradient);

        this.X1 = x1;
        this.Y1 = y1;
        this.R1 = r1;
        this.X2 = x2;
        this.Y2 = y2;
        this.R2 = r2;
    }
}