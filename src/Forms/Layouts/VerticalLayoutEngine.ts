import { ILayoutEngine } from "./ILayoutEngine";
import { Control } from "../Controls/Control";
import { Position } from "../../Renderer/Position";

export class VerticalLayoutEngine implements ILayoutEngine
{
    ChildWidthToParent: boolean = true;
    
    WidthToContents: boolean = false;    
    HeightToContents: boolean = false;

    SpacerSize: number = 0.0;

    protected GetLargestChildWidth(control: Control): number
    {
        let maxWidth: number = 0.0;

        for (let i = 0; i < control.ChildCount; i++)
        {
            let size = control.GetChildAtIndex(i).Size;
            let margins = control.Margins;

            if ((size.Width + margins.HorizontalPadding) > maxWidth)
            {
                maxWidth = size.Width + margins.HorizontalPadding;
            }
        }

        return maxWidth;
    }

    PerformLayout(control: Control)
    {
        let totalHeight = 0.0;

        let padding = control.Padding;
        let parentBounds = control.Bounds;

        parentBounds.X += padding.Left;
        parentBounds.Y += padding.Top;
        parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);

        let currentHeightOffset = padding.Top;
        let width = parentBounds.Width;

        for (let i = 0; i < control.ChildCount; i++)
        {
            let child = control.GetChildAtIndex(i);

            let margins = child.Margins;
            let size = child.Size;

            let newPosition = new Position();
            let newSize = size;

            currentHeightOffset += margins.Top;

            newPosition.X = parentBounds.X + margins.Left + padding.Left;
            newPosition.Y = parentBounds.Y + currentHeightOffset;

            if ((this.ChildWidthToParent == true) && (this.WidthToContents == false))
            {
                newSize.Width = parentBounds.Width - (margins.HorizontalPadding);
            }
            else if ((this.ChildWidthToParent == false) && (this.WidthToContents == true))
            {
                width = this.GetLargestChildWidth(control);
            }
            else if ((this.ChildWidthToParent == true) && (this.WidthToContents == true))
            {
                width = this.GetLargestChildWidth(control);

                //adjust all child controls
                for (let j = 0; j < control.ChildCount; j++)
                {
                    if (j != i)
                    {
                        let childSize = control.GetChildAtIndex(j).Size;
                        control.GetChildAtIndex(j).SetSize(width, childSize.Height);
                    }
                }

                control.SetSize(width + padding.HorizontalPadding, control.Size.Height);
            }

            currentHeightOffset += size.Height + margins.Bottom + this.SpacerSize;

            child.SetSize(newSize.Width, newSize.Height);
            child.SetPosition(newPosition.X, newPosition.Y);
            

            child.PerformLayout();
        }

        if (this.HeightToContents == true)
        {
            control.SetSize(width + padding.HorizontalPadding, currentHeightOffset + padding.VerticalPadding);
        }
    }
}