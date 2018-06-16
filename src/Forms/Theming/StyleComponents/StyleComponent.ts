import { AnchorStyle } from "../../AnchorStyle";
import { AlignmentStyle, GetAlignmentStyleBounds } from "../../AlignmentStyle";
import { Size } from "../../../Renderer/Size";
import { Position } from "../../../Renderer/Position";
import { Brush } from "../../../Renderer/Brushes/Brush";
import { Pen } from "../../../Renderer/Pen";
import { IRenderer } from "../../../Renderer/IRenderer";
import { Rect } from "../../../Renderer/Rect";
import { Padding } from "../../Padding";

export enum StyleComponentTypes 
{
    TextGraphic, 
    CircleGraphic, 
    RectangleGraphic, 
    RoundedRectangleGraphic, 
    LineGraphic, 
    ImageGraphic,     
    ComponentLink, 
    Control
}

export abstract class StyleComponent
{    
    Name: string = "";    
    Type: StyleComponentTypes;

    Brush: Brush;
    Pen: Pen;

    Anchor: AnchorStyle = new AnchorStyle();
    Alignment: AlignmentStyle = AlignmentStyle.None;
            
    Size: Size;
    Position: Position;

    constructor(name: string, type: StyleComponentTypes)
    {
        this.Name = name;
        this.Type = type;
    }
    
    protected GetRenderBounds(controlBounds: Rect, position: Position, size: Size)
    {
        if (this.Anchor.HasAnchorStyle() == true)
        {
            let graphicBounds = new Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
            let renderBounds = this.Anchor.GetBounds(graphicBounds, controlBounds);

            position.X = renderBounds.X;
            position.Y = renderBounds.Y;

            size.Width = renderBounds.Width;
            size.Height = renderBounds.Height;
        }
        else if (this.Alignment != AlignmentStyle.None)
        {
            let graphicBounds = new Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
            let renderBounds =  GetAlignmentStyleBounds(this.Alignment, graphicBounds, new Padding(), controlBounds, new Padding());

            position.X = renderBounds.X;
            position.Y = renderBounds.Y;

            size.Width = this.Size.Width;
            size.Height = this.Size.Height;
        }						
        else
        {
            position.X = controlBounds.X + this.Position.X;
            position.Y = controlBounds.Y + this.Position.Y;

            size.Width = this.Size.Width;
            size.Height = this.Size.Height;
        }
    }

    abstract RenderComponent(renderer: IRenderer, bounds: Rect);
}