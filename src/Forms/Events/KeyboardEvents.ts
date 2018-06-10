import { Event } from "./Events";

export enum KeyboardEventTypes
{
    KeyDown = 8,
    KeyUp = 9,
    KeyPressed = 10
};

export class KeyboardEvent extends Event
{    
    constructor(type: KeyboardEventTypes)
    {
        super(type);
    }
};