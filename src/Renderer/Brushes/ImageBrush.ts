import { Brush, BrushTypes } from "./Brush";

export class ImageBrush extends Brush
{
    constructor()
    {
        super(BrushTypes.Image);
    }
}