import { IRenderer, ImageDrawRectMismatch } from "./IRenderer";
import { Brush } from "./Brushes/Brush";
import { Pen } from "./Pen";
import { Position } from "./Position";
import { Rect } from "./Rect";
import { Font } from "./Font";

export class Canvas2dRenderer implements IRenderer
{    
    protected Context: CanvasRenderingContext2D = null;

    constructor(canvas: HTMLCanvasElement)
    {        
        this.Context = canvas.getContext("2d");
    }

    DrawCircle(radius: number, position: Position, brush: Brush, pen: Pen)
    {
        
    }

    DrawImage(path: string, sourceRect: Rect, destinationRect: Rect, rectMismatchOption: ImageDrawRectMismatch)
    {

    }

    DrawLine(start: Position, end: Position, pen: Pen)
    {

    }

    DrawRectangle(rect: Rect, brush: Brush, pen: Pen)
    {

    }

    DrawRoundedRectangle(rect: Rect, brush: Brush, pen: Pen, radius: number)
    {

    }

    DrawText(text: string, rect: Rect, font: Font, brush: Brush, pen: Pen)
    {

    }

    GetTextSize(text: string, font: Font): Rect
    {
        return new Rect();
    }
}