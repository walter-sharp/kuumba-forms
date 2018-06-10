import { IRenderer } from "../../Renderer/IRenderer";
import { Rect } from "../../Renderer/Rect";
import { StyleComponent } from "./StyleComponents/StyleComponent";
import { Property } from "../Controls/Property";

export class StyleClass
{
    private _Name: string;
    private _Components = new Array<StyleComponent>();
    private _Properties = new Array<Property>();

    constructor(name: string)
    {
        this._Name = name;
    }

    public get Name(): string
    {
        return this._Name;
    }

    public get Components(): Array<StyleComponent>
    {
        return this._Components;
    }

    public get Properties(): Array<Property>
    {
        return this._Properties;
    }

    public get ComponentCount(): number
    {
        return this._Components.length;
    }

    RenderComponents(renderer: IRenderer, bounds: Rect)
    {
        for(let i = 0; i < this._Components.length; i++)
        {
            this._Components[i].RenderComponent(renderer, bounds);
        }
    }
}