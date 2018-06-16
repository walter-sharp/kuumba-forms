import { StyleComponent, StyleComponentTypes } from "./StyleComponent";
import { IRenderer } from "../../../Renderer/IRenderer";
import { Rect } from "../../../Renderer/Rect";
import { Position } from "../../../Renderer/Position";

export class LineGraphic extends StyleComponent
{
    LineTo: Position;

    constructor(name: string)
    {
        super(name, StyleComponentTypes.LineGraphic);
    }

    RenderComponent(renderer: IRenderer, bounds: Rect)
    {
        renderer.DrawLine(this.Position, this.LineTo, this.Pen);
    }
}