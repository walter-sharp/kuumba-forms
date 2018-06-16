import { IRenderer } from "../../Renderer/IRenderer";
import { Rect } from "../../Renderer/Rect";
import { StyleComponent } from "./StyleComponents/StyleComponent";
import { Property } from "../Controls/Property";

export class StyleClass
{
    Name: string;
    Components = new Array<StyleComponent>();
    Properties = new Array<Property>();

    constructor(name: string)
    {
        this.Name = name;
    }
    
    public get ComponentCount(): number
    {
        return this.Components.length;
    }

    RenderComponents(renderer: IRenderer, bounds: Rect)
    {
        for(let i = 0; i < this.Components.length; i++)
        {
            this.Components[i].RenderComponent(renderer, bounds);
        }
    }
}