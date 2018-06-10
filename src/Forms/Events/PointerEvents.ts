import { Event } from "./Events";

export enum PointerButtons
{
    None,
    Left, 
    Right,
    Middle
}

export enum PointerEventTypes
{
    PointerMove = 1,
    PointerDown = 2,
    PointerUp = 3,
    PointerClicked = 4,
    PointerDoubleClicked = 5,
    PointerEnter = 6,
    PointerLeave = 7,
    PointerDrag = 8
}

export class PointerEvent extends Event
{
    X: number;
    Y: number;
    Button: PointerButtons;

    constructor(x: number, y: number, button: PointerButtons, type: PointerEventTypes)
    {
        super(type);

        this.X = x;
        this.Y = y;

        this.Button = button;
    }
}
