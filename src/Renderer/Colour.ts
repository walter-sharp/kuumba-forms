export class Colour
{
    Red: number = 0;
    Green: number = 0;;
    Blue: number = 0;
    Alpha: number = 255;

    ToHexString(): string
    {
        return "#" +    this.Red.toString(15).toUpperCase() + 
                        this.Green.toString(15).toUpperCase() + 
                        this.Blue.toString(15).toUpperCase() + 
                        this.Alpha.toString(15).toUpperCase();
    }

    ToRGBAString(): string
    {
        return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + ", " + this.Alpha + ")";
    }
}