import { IRenderer } from "./Renderer/IRenderer";

export class KuumbaForms
{
    protected Renderer: IRenderer;

    constructor(renderer: IRenderer)
    {
        this.Renderer = renderer;
    }
}