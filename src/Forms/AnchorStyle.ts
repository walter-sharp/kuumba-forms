import { Rect } from "../Renderer/Rect";

export class AnchorStyle
{
    AnchorLeft: boolean = false;
	AnchorRight: boolean = false;
	AnchorTop: boolean = false;
	AnchorBottom: boolean = false;

	AnchorLeftDistance: number = 0;
	AnchorRightDistance: number = 0;
	AnchorTopDistance: number = 0;
    AnchorBottomDistance: number = 0;
    
    AnchorAll(all: number)
    {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;
        this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = all;
    }

    AnchorSeperately(left: number, right: number, top: number, bottom: number)
    {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;

        this.AnchorLeftDistance = left;
        this.AnchorRightDistance = right;
        this.AnchorBottomDistance = bottom;
        this.AnchorTopDistance = top;
    }

    HasAnchorStyle(): boolean
    {
        return this.AnchorBottom || this.AnchorLeft || this.AnchorRight || this.AnchorTop;
    }
        
    ClearAnchorStyle(): void
    {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = false;
        this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = 0;
    }

    GetBounds(objectBounds: Rect, parentBounds: Rect): Rect
    {
        let bounds = objectBounds;

        //first do vertical anchoring layout
        if ((this.AnchorBottom == true) && (this.AnchorTop == false))
        {
            bounds.Y = parentBounds.Height - objectBounds.Height - this.AnchorBottomDistance;
        }
        else if ((this.AnchorTop == true) && (this.AnchorBottom == false))
        {
            bounds.Y = parentBounds.Y + this.AnchorTopDistance;
        }
        else if ((this.AnchorTop == true) && (this.AnchorBottom == true))
        {
            //here we're anchoring both bottom AND top						
            bounds.Y = parentBounds.Y + this.AnchorTopDistance;
            bounds.Height = parentBounds.Height - (this.AnchorTopDistance + this.AnchorBottomDistance);
        }

        //then do horizontal
        if ((this.AnchorLeft == true) && (this.AnchorRight == false))
        {
            bounds.X = parentBounds.X + this.AnchorLeftDistance;
        }
        else if ((this.AnchorRight == true) && (this.AnchorLeft == false))
        {
            bounds.X = parentBounds.Width - objectBounds.Width - this.AnchorRightDistance;
        }
        else if ((this.AnchorLeft == true) && (this.AnchorRight == true))
        {
            //here we're anchoring both left AND right
            bounds.X = parentBounds.X + this.AnchorLeftDistance;
            bounds.Width = parentBounds.Width - (this.AnchorLeftDistance + this.AnchorRightDistance);
        }

        return bounds;
    }
}