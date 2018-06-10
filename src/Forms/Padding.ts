export class Padding
{    
    Left : number;
    Right : number;
    Top : number;
    Bottom : number;
        
    public GetVerticalPadding(): number
    {
        return this.Bottom + this.Top;
    }

    public GetHorizontalPadding(): number
    {
        return this.Left + this.Right;
    }

    public SetVerticalPadding(padding: number)
    {
        this.Bottom = this.Top = padding;
    }

    public SetHorizontalPadding(padding: number)
    {
        this.Right = this.Left = padding;
    }

    public SetAll(padding: number)
    {
        this.Right = this.Left = this.Bottom = this.Top = padding;
    }
}