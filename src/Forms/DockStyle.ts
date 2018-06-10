import { Rect } from "../Renderer/Rect";
import { Padding } from "./Padding";

export enum DockStyle
{
    Top, Left, Bottom, Right, Fill, None
}

export function GetDockStyleBounds(dock: DockStyle, availableBounds: Rect, currentBounds: Rect, boundMargins: Padding): Rect
{
    let newBounds = new Rect();

    switch (dock)
    {
    case DockStyle.Top:
        newBounds.X = availableBounds.X + boundMargins.Left;
        newBounds.Y = availableBounds.Y + boundMargins.Top;
        newBounds.Width = availableBounds.Width - boundMargins.Right - boundMargins.Left;
        newBounds.Height = currentBounds.Height;

        availableBounds.Y += newBounds.Height + boundMargins.Bottom + boundMargins.Top;
        availableBounds.Height -= newBounds.Height + boundMargins.Bottom + boundMargins.Top;
        break;
    case DockStyle.Left:
        newBounds.X = availableBounds.X + boundMargins.Left;
        newBounds.Y = availableBounds.Y + boundMargins.Top;
        newBounds.Width = currentBounds.Width;
        newBounds.Height = availableBounds.Height - boundMargins.Top - boundMargins.Bottom;

        availableBounds.X += newBounds.Width + boundMargins.Left + boundMargins.Right;
        availableBounds.Width = availableBounds.Width - (newBounds.Width + boundMargins.Left + boundMargins.Right);
        break;
    case DockStyle.Right:
        newBounds.X = (availableBounds.X + availableBounds.Width) - currentBounds.Width - boundMargins.Right;
        newBounds.Y = availableBounds.Y + boundMargins.Top;
        newBounds.Width = currentBounds.Width;
        newBounds.Height = availableBounds.Height - boundMargins.Top - boundMargins.Bottom;

        availableBounds.Width = availableBounds.Width - (newBounds.Width + boundMargins.Left + boundMargins.Right);
        break;
    case DockStyle.Bottom:
        newBounds.X = availableBounds.X + boundMargins.Left;
        newBounds.Y = (availableBounds.Y + availableBounds.Height) - currentBounds.Height - boundMargins.Bottom;
        newBounds.Width = availableBounds.Width - boundMargins.Left - boundMargins.Right;
        newBounds.Height = currentBounds.Height;

        availableBounds.Height = availableBounds.Height - (newBounds.Height + boundMargins.Bottom + boundMargins.Top);
        break;
    case DockStyle.Fill:
        newBounds.X = availableBounds.X + boundMargins.Left;
        newBounds.Y = availableBounds.Y + boundMargins.Top;
        newBounds.Width = availableBounds.Width - (boundMargins.Left + boundMargins.Right);
        newBounds.Height = availableBounds.Height - (boundMargins.Top + boundMargins.Bottom);

        availableBounds.X = newBounds.Width;
        availableBounds.Y = newBounds.Height;
        availableBounds.Height = 0.0;
        availableBounds.Width = 0.0;
        break;
    default:
        break;
    }

    return newBounds;
}