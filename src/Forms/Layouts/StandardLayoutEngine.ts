import { ILayoutEngine } from "./ILayoutEngine";
import { Control } from "../Controls/Control";
import { Rect } from "../../Renderer/Rect";
import { Padding } from "../Padding";
import { GetAlignmentStyleBounds, AlignmentStyle } from "../AlignmentStyle";
import { GetDockStyleBounds, DockStyle } from "../DockStyle";

export class StandardLayoutEngine implements ILayoutEngine
{
    protected CalculateAnchorStyleBounds(control: Control, parentBounds: Rect)
    {
        let anchor = control.Anchor;
        let bounds = control.Bounds;

        let newBounds = anchor.GetBounds(bounds, parentBounds);

        control.SetSize(newBounds.Width, newBounds.Height);
        control.SetPosition(newBounds.X, newBounds.Y);
    }

    protected CalculateAlignmentStyleBounds(control: Control, parentBounds: Rect, padding: Padding)
    {
        let alignment = control.Alignment;							
        let margins = control.Margins;
        let bounds = control.Bounds;

        let newBounds = GetAlignmentStyleBounds(alignment, bounds, margins, parentBounds, padding);
                                                
        control.SetPosition(newBounds.X, newBounds.Y);
    }

    protected CalculateDockStyleBounds(control: Control, availableBounds: Rect)
    {
        let currentBounds = control.Bounds;
        let margins = control.Margins;
        let dock = control.Dock;

        let newBounds = GetDockStyleBounds(dock, availableBounds, currentBounds, margins);
                            
        control.SetSize(newBounds.Width, newBounds.Height);
        control.SetPosition(newBounds.X, newBounds.Y);
    }

    PerformLayout(control: Control)
    {					
        let parentBounds = control.Bounds;
        let availableBounds = parentBounds;

        let padding = control.Padding;

        availableBounds.X += padding.Left;
        availableBounds.Y += padding.Top;
        availableBounds.Height = parentBounds.Height - padding.Bottom - padding.Top;
        availableBounds.Width = parentBounds.Width - padding.Right - padding.Left;

        for (let i = 0; i < control.ChildCount; i++)
        {
            let child = control.GetChildAtIndex(i);

            let currentBounds = child.Bounds;
            let newBounds = currentBounds;

            if (child.Anchor.HasAnchorStyle() == true)
            {
                this.CalculateAnchorStyleBounds(child, parentBounds);
            }
            else if (child.Alignment != AlignmentStyle.None)
            {
                this.CalculateAlignmentStyleBounds(child, parentBounds, padding);
            }
            else if (child.Dock != DockStyle.None)
            {
                this.CalculateDockStyleBounds(child, availableBounds);
            }
            
            child.PerformLayout();
        }
    }
}