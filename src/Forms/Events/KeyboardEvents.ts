import { Event } from "./Events";

export enum KeyboardEventTypes
{
    KeyDown = 8,
    KeyUp = 9,
    KeyPressed = 10
};

export class KeyboardState
{
    LeftShift: boolean;
    RightShift: boolean;
    LeftCtrl: boolean;
    RightCtrl: boolean;
    LeftAlt: boolean;
    RightAlt: boolean;
}

export class KeyboardEvent extends Event
{    
    KeyCode: string;
    State: KeyboardState;

    constructor(keyCode: string, type: KeyboardEventTypes, state: KeyboardState)
    {        
        super(type);

        this.State = state;
        this.KeyCode = keyCode;
    }
}