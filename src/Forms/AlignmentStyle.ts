import { Rect } from "../Renderer/Rect";
import { Padding } from "./Padding";

export enum AlignmentStyle
{
    None, TopLeft, TopCenter, TopRight, MiddleLeft, MiddleCenter, MiddleRight, BottomLeft, BottomCenter, BottomRight
}

export function GetAlignmentStyleBounds(alignment: AlignmentStyle, currentBounds: Rect, currentBoundsMargin: Padding, parentBounds: Rect, parentBoundsPadding: Padding)
{					
    let newBounds = new Rect;

    switch (alignment)
    {
        case AlignmentStyle.TopLeft:
            newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
            newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
            break;
        case AlignmentStyle.TopCenter:
            newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
            newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
            break;
        case AlignmentStyle.TopRight:
            newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
            newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
            break;
        case AlignmentStyle.MiddleLeft:
            newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
            newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
            break;
        case AlignmentStyle.MiddleCenter:
            newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
            newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
            break;
        case AlignmentStyle.MiddleRight:
            newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
            newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
            break;
        case AlignmentStyle.BottomLeft:
            newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
            newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
            break;
        case AlignmentStyle.BottomCenter:
            newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
            newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
            break;
        case AlignmentStyle.BottomRight:
            newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
            newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
            break;
        default:
        break;
    }

    return newBounds;
}