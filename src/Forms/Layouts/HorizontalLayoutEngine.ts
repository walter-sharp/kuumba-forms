import { ILayoutEngine } from "./ILayoutEngine";
import { Control } from "../Controls/Control";
import { Position } from "../../Renderer/Position";

export enum HorizontalLayoutControlAlignment 
{ 
    Top, 
    Middle, 
    Bottom 
};

export class HorizontalLayoutEngine implements ILayoutEngine
{
    HeightToContents: boolean = true;
    HeightToParent: boolean = false;
    
    WidthToContents: boolean = false;
    RightToLeft: boolean = false;

    SpacerSize: number = 0.0;

    ControlAlignment: HorizontalLayoutControlAlignment = HorizontalLayoutControlAlignment.Top;

    protected GetLargestChildHeight(control: Control)
    {
        let maxHeight = 0.0;
                            
        for (let i = 0; i < control.ChildCount; i++)
        {
            let size = control.GetChildAtIndex(i).Size;
            let margins = control.Margins;

            if ((size.Height + margins.VerticalPadding) > maxHeight)
            {
                maxHeight = size.Height + margins.VerticalPadding;
            }
        }

        return maxHeight;
    }

    PerformLayout(control: Control)
    {
        let parentBounds = control.Bounds;
        let padding = control.Padding;

        parentBounds.X += padding.Left;
        parentBounds.Y += padding.Top;
        parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);
        parentBounds.Height = parentBounds.Height - (padding.VerticalPadding);

        let currentWidthOffset = (this.RightToLeft == false) ? 0.0 : parentBounds.Width;
        let height = parentBounds.Height;

        for (let i = 0; i < control.ChildCount; i++)
        {
            let previousChild: Control = null;

            let child = control.GetChildAtIndex(i);
            
            let margins = child.Margins;
            let size = child.Size;

            let newPosition = new Position();
            let newSize = size;

            currentWidthOffset = (this.RightToLeft == false) ? currentWidthOffset + margins.Left : currentWidthOffset - margins.Left;

            newPosition.X = (this.RightToLeft == false) ? parentBounds.X + currentWidthOffset : (parentBounds.X + currentWidthOffset) - (padding.Right + size.Width);
            
            //calculate Y position based on alignment set for layout
            switch (this.ControlAlignment)
            {
            case HorizontalLayoutControlAlignment.Top:
                newPosition.Y = parentBounds.Y + margins.Top;
                break;
            case HorizontalLayoutControlAlignment.Middle:
                newPosition.Y = parentBounds.Y + ((parentBounds.Height * 0.5) - (size.Height * 0.5));
                break;
            case HorizontalLayoutControlAlignment.Bottom:
                newPosition.Y = (parentBounds.Y + parentBounds.Height) - size.Height - margins.Bottom;
                break;
            default:
                break;
            }

            if ((this.HeightToParent == true) && (this.HeightToContents == false))
            {
                newSize.Height = parentBounds.Height - (margins.VerticalPadding);
            }
            else if ((this.HeightToParent == false) && (this.HeightToContents == true))
            {
                height = this.GetLargestChildHeight(control);

                control.SetSize(control.Size.Width, height + padding.VerticalPadding);
            }
            else if ((this.HeightToParent == true) && (this.HeightToContents == true))
            {
                height = this.GetLargestChildHeight(control);

                //adjust all child controls
                for (let j = 0; j < control.ChildCount; j++)
                {
                    if (j != i)
                    {
                        let childSize = control.GetChildAtIndex(j).Size;
                        control.GetChildAtIndex(j).SetSize(childSize.Width, height);
                    }
                }

                control.SetSize(control.Size.Width, height + padding.VerticalPadding);
            }

            if (this.RightToLeft == false)
            {
                currentWidthOffset = currentWidthOffset + this.SpacerSize + size.Width + margins.Right + ((previousChild != null) ? previousChild.Margins.Left : 0.0);
            }
            else
            {
                currentWidthOffset = currentWidthOffset - (size.Width + this.SpacerSize + margins.Right + ((previousChild != null) ? previousChild.Margins.Left : 0.0));
            }
                                    
            child.SetSize(newSize.Width, newSize.Height);
            child.SetPosition(newPosition.X, newPosition.Y);
            
            child.PerformLayout();

            previousChild = child;
        }

        if (this.WidthToContents == true)
        {
            control.SetSize(currentWidthOffset + padding.HorizontalPadding, height + padding.VerticalPadding);
        }
    }
}