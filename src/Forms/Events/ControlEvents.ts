import { Event } from "./Events";
import { Control } from "../Controls/Control";
import { PointerEvent, PointerEventTypes, PointerButtons } from "./PointerEvents";
import { KeyboardEvent, KeyboardEventTypes } from "./KeyboardEvents";
import { Size } from "../../Renderer/Size";
import { Position } from "../../Renderer/Position";

export enum ControlEventTypes
{
    Resize,
    Moved,
    FocusLost,
    Focused,
    TextChanged,
    Pointer,
    Keyboard
}

export const KEYBOARD_EVENTS_BEGIN = <number>KeyboardEventTypes.KeyDown;
export const KEYBOARD_EVENTS_END = <number>KeyboardEventTypes.KeyPressed;

export const POINTER_EVENTS_BEGIN = <number>PointerEventTypes.PointerMove;
export const POINTER_EVENTS_END = <number>PointerEventTypes.PointerLeave;

export class ControlEvent extends Event
{
    Control: Control;

    constructor(control: Control, type: ControlEventTypes)
    {
        super(type);
        this.Control = control;
    }    
}

export class ControlPointerEvent extends ControlEvent
{					
    PointerEvent: PointerEvent;

    constructor(control: Control, x: number, y: number, button: PointerButtons, type: PointerEventTypes)        
    {
        super(control, ControlEventTypes.Pointer);
        this.PointerEvent = new PointerEvent(x, y, button, type);
    }
}

export class ControlKeyboardEvent extends ControlEvent
{					
    KeyboardEvent: KeyboardEvent;

    constructor(control: Control, type: KeyboardEventTypes)        
    {
        super(control, ControlEventTypes.Keyboard);
        this.KeyboardEvent = new KeyboardEvent(type);
    }    
};
                
export class ControlResizeEvent extends ControlEvent
{
    OldSize: Size;
    NewSize: Size;

    constructor(control: Control, oldSize: Size, newSize: Size)
    {
        super(control, ControlEventTypes.Resize);

        this.OldSize = oldSize;
        this.NewSize = newSize;
    }
};

export class ControlMoveEvent extends ControlEvent
{
    OldPosition: Position;
    NewPosition: Position;

    constructor(control: Control, oldPosition: Position, newPosition: Position)
    {
        super(control, ControlEventTypes.Moved);

        this.OldPosition = oldPosition;
        this.NewPosition = newPosition;
    }
};

export class TextChangedEvent extends ControlEvent
{
    OldText: string;
    NewText: string;

    constructor(control: Control, oldText: string, newText: string)
    {
        super(control, ControlEventTypes.TextChanged);

        this.OldText = oldText;
        this.NewText = newText;
    }
};				