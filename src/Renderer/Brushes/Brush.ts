import "./GradientBrush"
import "./ImageBrush"
import "./LinearGradient"
import "./RadialGradient"
import "./SolidColourBrush"

export enum BrushTypes
{
    SolidColour, 
    Image, 
    LinearGradient, 
    RadialGradient
}

export class Brush
{
    private _Type: BrushTypes;

    constructor(type: BrushTypes)
    {
        this._Type = type;
    }

    public get Type(): BrushTypes
    {
        return this._Type;
    }
}