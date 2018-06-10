import { Control } from "./Control";
import { Colour } from "../../Renderer/Colour";
import { AlignmentStyle } from "../AlignmentStyle";
import { Font } from "../../Renderer/Font";
import { Position } from "../../Renderer/Position"
import { Rect } from "../../Renderer/Rect";
import { TextChangedEvent } from "../Events/ControlEvents";
import { IRenderer } from "../../Renderer/IRenderer";
import { Brush } from "../../Renderer/Brushes/Brush";
import { Pen } from "../../Renderer/Pen";
import { Property } from "./Property";

export class TextControl extends Control
{
    protected _Font: Font;
    protected _Text: string;
    protected _TextOffset: Position;

    protected _WrapText: boolean;
    protected _TextAlignment: AlignmentStyle;
    protected _TextBackground: Brush;
    protected _TextStroke: Pen;

    constructor(name?: string)
    {
        super(name)
    }

    protected CalculateTextBounds(renderer: IRenderer)
    {
        if (this.LayoutSuspended == false)
        {	
            let bounds = renderer.GetTextSize(this._Text, this._Font);

            let heightOffset = this.Padding.Top;
            let horizontalOffset = this.Padding.Left;

            if ((this._TextAlignment == AlignmentStyle.BottomCenter) || (this._TextAlignment == AlignmentStyle.BottomLeft) || (this._TextAlignment == AlignmentStyle.BottomRight))
            {
                heightOffset += this.Size.Height - bounds.Height;
            }
            else if ((this._TextAlignment == AlignmentStyle.MiddleCenter) || (this._TextAlignment == AlignmentStyle.MiddleLeft) || (this._TextAlignment == AlignmentStyle.MiddleRight))
            {
                heightOffset += (this.Size.Height * 0.5) - (bounds.Height * 0.5);
            }

            if (this._WrapText == false)
            {
                //we need to adjust horizontal offset if we're center or right aligning on single line text box
                if ((this._TextAlignment == AlignmentStyle.BottomCenter) || (this._TextAlignment == AlignmentStyle.MiddleCenter) || (this._TextAlignment == AlignmentStyle.TopCenter))
                {
                    horizontalOffset += (this.Size.Width * 0.5) - (bounds.Width * 0.5);
                }
                else if ((this._TextAlignment == AlignmentStyle.BottomRight) || (this._TextAlignment == AlignmentStyle.MiddleRight) || (this._TextAlignment == AlignmentStyle.TopRight))
                {
                    heightOffset += this.Size.Height * -1;
                }
            }

            this._TextOffset.X = this.Position.X + horizontalOffset;
            this._TextOffset.Y = this.Position.X + heightOffset;						
        }        
    }

    public set Text(text: string)
    {					
        if (this._Text != text)
        {
            let event = new TextChangedEvent(this, this._Text, text);
            this._Text = text;
            
            this.NotifyEventSubscribers(event);
            
            this.RequestPaint();
        }
    }

    public get Text(): string
    {
        return this._Text;
    }

    Paint(renderer: IRenderer)
    {					
        super.Paint(renderer);

        //now render the text
        this.CalculateTextBounds(renderer);

        let bounds = this.AbsoluteBounds;
        let textBounds = new Rect(bounds.X + this._TextOffset.X, bounds.Y + this._TextOffset.Y, this.Size.Width, this.Size.Height);
        renderer.DrawText(this._Text, textBounds, this._Font, this._TextBackground, this._TextStroke);
    }

    ApplyControlProperties(properties: Array<Property>)
    {
        super.ApplyControlProperties(properties);
        
        for (let i = 0; i < properties.length; i++)
        {
            if (properties[i].Name == "TextAlignment")
            {
                this._TextAlignment = <AlignmentStyle>parseInt(properties[i].Value);
            }
            else if (properties[i].Name == "TextStroke")
            {
                this._TextStroke = JSON.parse(properties[i].Value);							
            }
            else if (properties[i].Name == "TextBackground")
            {
                this._TextBackground = JSON.parse(properties[i].Value);							
            }
            else if (properties[i].Name == "Font")
            {
                this._Font = JSON.parse(properties[i].Value);
            }            
            else if (properties[i].Name == "WrapText")
            {
                this._WrapText = JSON.parse(properties[i].Value);
            }
        }
    }    
}