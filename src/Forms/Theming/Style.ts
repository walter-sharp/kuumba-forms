import { StyleClass } from "./StyleClass";
import { StyleComponent } from "./StyleComponents/StyleComponent";
import { Property } from "../Controls/Property";
import { IRenderer } from "../../Renderer/IRenderer";
import { Rect } from "../../Renderer/Rect";

export class Style
{
    private _Name: string;

    private _StyleProperties = new Array<Property>();
    private _StyleComponents = new Array<StyleComponent>();
    private _StyleClasses = new Array<StyleClass>();

    constructor(name: string)
    {
        this._Name = name;
    }
    
    AddStyleClass(styleClass: StyleClass)
    {
        this._StyleClasses.push(styleClass);
    }

    AddStyleComponent(styleComponent: StyleComponent)
    {
        this._StyleComponents.push(styleComponent);
    }
    
    AddStyleProperty(property: Property)
    {
        this._StyleProperties.push(property);
    }

    FindStyleComponent(name: string): StyleComponent
    {
        let component: StyleComponent = null;

        //first search the global components, then search the style class components
        for (let i = 0; i < this._StyleComponents.length; i++)
        {
            if (this._StyleComponents[i].Name == name)
            {
                component = this._StyleComponents[i];
                break;
            }
        }

        if (component == null)
        {
            for (let i = 0; i < this._StyleClasses.length; i++)
            {
                for (let j = 0; j < this._StyleClasses[i].ComponentCount; j++)
                {
                    if (this._StyleClasses[i].Components[j].Name == name)
                    {
                        component = this._StyleClasses[i].Components[j];
                        break;
                    }
                }
            }
        }

        return component;
    }

    public get Name()
    {
        return this._Name;
    }

    FindProperty(name: string): Property
    {
        for (let i = 0; i < this._StyleProperties.length; i++)
        {
            if (this._StyleProperties[i].Name == name)
            {
                return this._StyleProperties[i];
            }
        }

        return new Property();
    }
                    
    ContainsClass(styleClass: string): boolean
    {
        for (let i = 0; i < this._StyleClasses.length; i++)
        {
            if (styleClass == this._StyleClasses[i].Name)
            {
                return true;
            }
        }

        return false;
    }

    FindStyleClass(name: string): StyleClass
    {
        for (let i = 0; i < this._StyleClasses.length; i++)
        {
            if (this._StyleClasses[i].Name == name)
            {
                return this._StyleClasses[i];
            }
        }

        return null;
    }

    RenderStyle(renderer: IRenderer, classes: Array<string>, bounds: Rect)
    {
        let classesRendered = 0;

        if (this._StyleClasses.length > 0)
        {
            //try to find the state we're trying to render
            for (let i = 0; i < classes.length; i++)
            {
                for (let j = 0; j < this._StyleClasses.length; j++)
                {
                    if (this._StyleClasses[j].Name == classes[i])
                    {
                        this._StyleClasses[j].RenderComponents(renderer, bounds);
                        classesRendered += 1;
                        break;
                    }
                }
            }
        }

        if (classesRendered == 0)
        {
            //try to render the default style
            for (let i = 0; i < this._StyleClasses.length; i++)
            {							
                if (this._StyleClasses[i].Name == "default")
                {
                    this._StyleClasses[i].RenderComponents(renderer, bounds);
                    classesRendered += 1;
                    break;
                }							
            }
        }        
    }
    
    RenderStyleClass(renderer: IRenderer, styleClass: StyleClass, bounds: Rect)
    {
        if (styleClass)
        {
            //Graphics->ClipRegion(ControlBounds);
            styleClass.RenderComponents(renderer, bounds);
        }
    }

    RenderStyleClassAtIndex(renderer: IRenderer, index: number, bounds: Rect)
    {
        if ((index >= 0) && (index < this._StyleClasses.length))
        {
            this._StyleClasses[index].RenderComponents(renderer, bounds);
        }
    }
}