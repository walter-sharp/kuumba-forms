import { StyleClass } from "./StyleClass";
import { StyleComponent } from "./StyleComponents/StyleComponent";
import { Property } from "../Controls/Property";
import { IRenderer } from "../../Renderer/IRenderer";
import { Rect } from "../../Renderer/Rect";

export class Style
{
    Name: string;

    StyleProperties = new Array<Property>();
    StyleComponents = new Array<StyleComponent>();
    StyleClasses = new Array<StyleClass>();

    constructor(name: string)
    {
        this.Name = name;
    }
        
    FindStyleComponent(name: string): StyleComponent
    {
        let component: StyleComponent = null;

        //first search the global components, then search the style class components
        for (let i = 0; i < this.StyleComponents.length; i++)
        {
            if (this.StyleComponents[i].Name == name)
            {
                component = this.StyleComponents[i];
                break;
            }
        }

        if (component == null)
        {
            for (let i = 0; i < this.StyleClasses.length; i++)
            {
                for (let j = 0; j < this.StyleClasses[i].ComponentCount; j++)
                {
                    if (this.StyleClasses[i].Components[j].Name == name)
                    {
                        component = this.StyleClasses[i].Components[j];
                        break;
                    }
                }
            }
        }

        return component;
    }
    
    FindProperty(name: string): Property
    {
        for (let i = 0; i < this.StyleProperties.length; i++)
        {
            if (this.StyleProperties[i].Name == name)
            {
                return this.StyleProperties[i];
            }
        }

        return new Property();
    }
                    
    ContainsClass(styleClass: string): boolean
    {
        for (let i = 0; i < this.StyleClasses.length; i++)
        {
            if (styleClass == this.StyleClasses[i].Name)
            {
                return true;
            }
        }

        return false;
    }

    FindStyleClass(name: string): StyleClass
    {
        for (let i = 0; i < this.StyleClasses.length; i++)
        {
            if (this.StyleClasses[i].Name == name)
            {
                return this.StyleClasses[i];
            }
        }

        return null;
    }

    RenderStyle(renderer: IRenderer, classes: Array<string>, bounds: Rect)
    {
        let classesRendered = 0;

        if (this.StyleClasses.length > 0)
        {
            //try to find the state we're trying to render
            for (let i = 0; i < classes.length; i++)
            {
                for (let j = 0; j < this.StyleClasses.length; j++)
                {
                    if (this.StyleClasses[j].Name == classes[i])
                    {
                        this.StyleClasses[j].RenderComponents(renderer, bounds);
                        classesRendered += 1;
                        break;
                    }
                }
            }
        }

        if (classesRendered == 0)
        {
            //try to render the default style
            for (let i = 0; i < this.StyleClasses.length; i++)
            {							
                if (this.StyleClasses[i].Name == "default")
                {
                    this.StyleClasses[i].RenderComponents(renderer, bounds);
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
        if ((index >= 0) && (index < this.StyleClasses.length))
        {
            this.StyleClasses[index].RenderComponents(renderer, bounds);
        }
    }
}