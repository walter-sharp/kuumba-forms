import { StyleComponent, StyleComponentTypes } from "./StyleComponent";
import { IRenderer, ImageDrawRectMismatch } from "../../../Renderer/IRenderer";
import { Rect } from "../../../Renderer/Rect";

export class ImageGraphic extends StyleComponent
{
    Path: string;
    ImageDrawOptions: ImageDrawRectMismatch;

    constructor(name: string)
    {
        super(name, StyleComponentTypes.ImageGraphic);
    }

    RenderComponent(renderer: IRenderer, bounds: Rect)
    {
        renderer.DrawImage(this.Path, new Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height), bounds, this.ImageDrawOptions);
    }
}