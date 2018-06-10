import { StyleComponent, StyleComponentTypes } from "./StyleComponent";
import { Rect } from "../../../Renderer/Rect";
import { Position } from "../../../Renderer/Position";
import { IRenderer } from "../../../Renderer/IRenderer";
import { Size } from "../../../Renderer/Size";

export class RectangleGraphic extends StyleComponent
{
    constructor(name: string)
    {
        super(name, StyleComponentTypes.RectangleGraphic);
    }

    RenderComponent(renderer: IRenderer, bounds: Rect)
    {
        let position = new Position();
        let size = new Size();

        this.GetRenderBounds(bounds, position, size);

        renderer.DrawRectangle(new Rect(position.X, position.Y, size.Width, size.Height), this.Brush, this.Pen);
    }
}