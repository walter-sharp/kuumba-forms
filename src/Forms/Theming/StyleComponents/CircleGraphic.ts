import { StyleComponent, StyleComponentTypes } from "./StyleComponent";
import { IRenderer } from "../../../Renderer/IRenderer";
import { Rect } from "../../../Renderer/Rect";
import { Size } from "../../../Renderer/Size";
import { Position } from "../../../Renderer/Position";

export class CircleGraphic extends StyleComponent
{
    Radius: number = 0;
    RadiusToBounds: boolean = false;

    constructor(name: string)
    {
        super(name, StyleComponentTypes.CircleGraphic);
    }

    RenderComponent(renderer: IRenderer, bounds: Rect)
    {
        let radius = this.Radius;

        let position: Position = new Position();
        let size: Size = new Size();

        this.GetRenderBounds(bounds, position, size);

        if (this.RadiusToBounds == true)
        {							
            //the circle is perfectly round so we set the radius to the smallest dimension
            radius = (size.Width > size.Height ? size.Height : size.Width) / 2;
        }

        renderer.DrawCircle(radius, position, this.Brush, this.Pen);
    }
}