import { IRenderer, ImageDrawRectMismatch } from "./IRenderer";
import { Brush, BrushTypes } from "./Brushes/Brush";
import { Pen } from "./Pen";
import { Position } from "./Position";
import { Rect } from "./Rect";
import { Font } from "./Font";
import { SolidColourBrush } from "./Brushes/SolidColourBrush";
import { LinearGradient } from "./Brushes/LinearGradient";
import { GradientBrush } from "./Brushes/GradientBrush";
import { RadialGradient } from "./Brushes/RadialGradient";

export class Canvas2dRenderer implements IRenderer
{    
    protected Context: CanvasRenderingContext2D = null;

    constructor(canvas: HTMLCanvasElement)
    {        
        this.Context = canvas.getContext("2d");
    }

    protected LoadColourStops(brush: GradientBrush, gradient: CanvasGradient)
    {
        for(var i = 0; i < brush.ColourStops.length; i++)
        {
            gradient.addColorStop(i, brush.ColourStops[i].ToHexString());
        }
    }

    protected LoadFillStyle(brush: Brush): string | CanvasGradient
    {
        switch(brush.Type)
        {
            case BrushTypes.SolidColour:
                return (<SolidColourBrush>brush).Colour.ToHexString();

            case BrushTypes.LinearGradient:
                let linearGradBrush = <LinearGradient>brush;
                let linearGradient = this.Context.createLinearGradient(linearGradBrush.X1, linearGradBrush.Y1, linearGradBrush.X2, linearGradBrush.Y2);
                
                this.LoadColourStops(linearGradBrush, linearGradient);
                
                return linearGradient;

            case BrushTypes.RadialGradient:
                let radialGradBrush = <RadialGradient>brush;
                let radialGradient = this.Context.createRadialGradient(radialGradBrush.X1, radialGradBrush.Y1, radialGradBrush.R1,
                                                                        radialGradBrush.X2, radialGradBrush.Y2, radialGradBrush.R2);
                
                this.LoadColourStops(radialGradBrush, radialGradient);
                
                return radialGradient;
        }        
    }

    protected LoadStyles(brush: Brush, pen: Pen)
    {
        this.Context.strokeStyle = pen.StrokeColour.ToHexString();
        this.Context.lineWidth = pen.StrokeWidth;
        this.Context.fillStyle = this.LoadFillStyle(brush);
    }

    protected FinaliseShape()
    {
        this.Context.fill();
        this.Context.stroke();
    }

    DrawCircle(radius: number, position: Position, brush: Brush, pen: Pen)
    {
        this.LoadStyles(brush, pen);

        this.Context.ellipse(position.X, position.Y, radius, radius, 0, 0, 0, false);

        this.FinaliseShape();
    }

    DrawImage(path: string, sourceRect: Rect, destinationRect: Rect, rectMismatchOption: ImageDrawRectMismatch)
    {
        var bitmap = new HTMLImageElement();
        bitmap.src = path;

        this.Context.drawImage(bitmap, sourceRect.X, sourceRect.Y, sourceRect.Width, sourceRect.Height, 
                                destinationRect.X, destinationRect.Y, destinationRect.Width, destinationRect.Height);        
    }

    DrawLine(start: Position, end: Position, pen: Pen)
    {
        this.Context.strokeStyle = pen.StrokeColour.ToHexString();
        this.Context.lineWidth = pen.StrokeWidth;
        
        this.Context.moveTo(start.X, start.Y);
        this.Context.lineTo(end.X, end.Y);
    }

    DrawRectangle(rect: Rect, brush: Brush, pen: Pen)
    {
        this.LoadStyles(brush, pen);

        this.Context.rect(rect.X, rect.Y, rect.Width, rect.Height);

        this.FinaliseShape();
    }

    DrawRoundedRectangle(rect: Rect, brush: Brush, pen: Pen, radius: number)
    {
        if (rect.Width < (2 * radius))
        {
            radius = rect.Width / 2;
        }

        if (rect.Height < (2 * radius)) 
        {
            radius = rect.Width / 2;
        }

        this.LoadStyles(brush, pen);

        this.Context.beginPath();

        this.Context.moveTo(rect.X + radius, rect.Y);
        
        this.Context.arcTo(rect.X + rect.Width, rect.Y, rect.X + rect.Width, rect.Y + rect.Height, radius);
        this.Context.arcTo(rect.X + rect.Width, rect.Y + rect.Height, rect.X, rect.Y + rect.Height, radius);
        this.Context.arcTo(rect.X, rect.Y + rect.Height, rect.X, rect.Y, radius);
        this.Context.arcTo(rect.X, rect.Y, rect.X + rect.Width, rect.Y, radius);

        this.Context.closePath();

        this.FinaliseShape();
    }

    DrawText(text: string, rect: Rect, font: Font, brush: Brush, pen: Pen)
    {
        this.LoadStyles(brush, pen);
        
        this.Context.fillText(text, rect.X, rect.Y, rect.Width);

        this.FinaliseShape();
        
    }

    GetTextSize(text: string, font: Font): Rect
    {
        return new Rect();
    }
}