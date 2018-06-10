import { StyleComponent, StyleComponentTypes } from "./StyleComponent";
import { IRenderer } from "../../../Renderer/IRenderer";
import { Rect } from "../../../Renderer/Rect";
import { Font } from "../../../Renderer/Font";

export class TextGraphic extends StyleComponent
{
    private Font: Font;
    private Text: string;

    constructor(name: string)
    {
        super(name, StyleComponentTypes.TextGraphic);
    }

    RenderComponent(renderer: IRenderer, bounds: Rect)
    {
        
    }
}