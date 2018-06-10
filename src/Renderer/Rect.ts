export class Rect
{
    X: number;
    Y: number;

    Width: number;
    Height: number;    

	constructor(x?: number, y?: number, width?: number, height?: number)
	{
		this.X = x;
		this.Y = y;

		this.Width = width;
		this.Height = height;
	}

    InsideRect(x: number, y: number): boolean
	{
		return ((x > this.X) && (x < this.X + this.Width) && (y > this.Y) && (y < this.Y + this.Height));
	}

	static InsideRect(x: number, y: number, rect: Rect): boolean
	{
		return ((x > rect.X) && (x < rect.X + rect.Width) && (y > rect.Y) && (y < rect.Y + rect.Height));
	}
}