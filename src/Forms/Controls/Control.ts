import { Padding } from "../Padding"
import { AnchorStyle } from "../AnchorStyle";
import { DockStyle } from "../DockStyle";
import { AlignmentStyle } from "../AlignmentStyle";
import { Size } from "../../Renderer/Size";
import { Rect } from "../../Renderer/Rect";
import { Position } from "../../Renderer/Position";
import { ILayoutEngine } from "../Layouts/ILayoutEngine";
import { Style } from "../Theming/Style";
import { IRenderer } from "../../Renderer/IRenderer";
import { ControlMoveEvent, ControlResizeEvent, ControlEventTypes, ControlPointerEvent, ControlKeyboardEvent, KEYBOARD_EVENTS_BEGIN, KEYBOARD_EVENTS_END, POINTER_EVENTS_BEGIN, POINTER_EVENTS_END } from "../Events/ControlEvents";
import { PointerEventTypes, PointerButtons } from "../Events/PointerEvents";
import { Event, EventNotifier } from "../Events/Events"
import { Property } from "./Property";
import { KeyboardEventTypes } from "../Events/KeyboardEvents";

export var ControlClasses =
{
    Default: "default",
    Pressed: "pressed",
    Hover: "hover",
    Disabled: "disabled",
    Focused: "focused",
    Toggled: "toggled"
}

export class Control extends EventNotifier
{
    private _Name: string ="";
    
    private _LayoutSuspended: boolean = false;
    private _UndergoingLayout: boolean = false; 

    private _Focusable: boolean = true;
    private _Focused: boolean = false;

    private _Visible: boolean = true;
    private _Enabled: boolean = true;

    private _ClipsChildren: boolean = true;

    private _Parent: Control = null;
    private _Children: Array<Control> = new Array<Control>();

    private _FocusedChild: Control = null;
    private _PointerEventChild: Control = null;

    private _Margins: Padding = new Padding();
    private _Padding: Padding = new Padding();

    private _Anchor: AnchorStyle = new AnchorStyle();
    private _Dock: DockStyle = DockStyle.None;
    private _Alignment: AlignmentStyle = AlignmentStyle.None;
    
    private _Size: Size = new Size();
    private _Position: Position = new Position();

    private _LayoutEngine: ILayoutEngine = null;

    private _ActiveControlClasses: Array<string> = new Array<string>();
    private _Style: Style;

    private _PaintRequestCallback: () => void;

    constructor(name?: string)
    {
        super();

        this._Name = name;
    }

    public get Name(): string
    {
        return this._Name;
    }
    
    public get LayoutSuspended(): boolean
    {
        return this._LayoutSuspended;
    }

    public set LayoutSuspended(suspended: boolean)
    {
        this._LayoutSuspended = suspended;
    }
    
    Paint(renderer: IRenderer)
    {					
        if (this._Visible == true)
        {	
            if (this._Style != null)
            {
                this._Style.RenderStyle(renderer, this._ActiveControlClasses, this.AbsoluteBounds);
            }
                        
            for (let i = 0; i < this._Children.length; i++)
            {
                this._Children[i].Paint(renderer);
            }						
        }					
    }

    RequestPaint()
    {
        if (this._PaintRequestCallback != null)
        {
            this._PaintRequestCallback();
        }
    }

    AddControlClass(controlClass: string)
    {
        let classAlreadyApplied: boolean = this.IsControlClassSet(controlClass);
        
        if (classAlreadyApplied == false)
        {
            this._ActiveControlClasses.push(controlClass);
            this.RequestPaint();
        }
    }
    
    RemoveControlClass(controlClass: string)
    {
        for (let i = 0; i < this._ActiveControlClasses.length; i++)
        {
            if (this._ActiveControlClasses[i] == controlClass)
            {
                this._ActiveControlClasses.splice(i, 1);
                this.RequestPaint();
                break;
            }
        }
    }
    
    IsControlClassSet(controlClass: string)
    {
        for (let i = 0; i < this._ActiveControlClasses.length; i++)
        {
            if (this._ActiveControlClasses[i] == controlClass)
            {
                return true;
            }
        }
                            
        return false;
    }
                        
    PerformLayout()
    {
        if((this._UndergoingLayout == false) && (this._LayoutSuspended == false))
        {
            if(this._LayoutEngine != null)
            {
                this._UndergoingLayout = true;

                this._LayoutEngine.PerformLayout(this);
                this.RequestPaint();

                this._UndergoingLayout = false;
            }
        }
    }

    public get ChildCount(): number
    {
        return this._Children.length;
    }

    GetChildAtIndex(index: number): Control
    {
        return this._Children[index];
    }

    public get Parent(): Control
    {
        return this._Parent;
    }
    
    AddChildControl(child: Control)
    {					
        if (child.Parent == null)
        {
            child._Parent = this;
            this._Children.push(child);

            this.PerformLayout();
        }					
    }

    RemoveChildControl(child: Control)
    {
        if (child.Parent == this)
        {
            for (let i = 0; i < this._Children.length; i++)
            {
                if (this._Children[i] == child)
                {
                    this.RemoveChildControlAtIndex(i);
                    break;
                }
            }
        }
    }

    RemoveChildControlAtIndex(index: number)
    {
        if ((index >= 0) && (index < this._Children.length))
        {
            this._Children[index]._Parent = null;

            if (this._Children[index] == this._FocusedChild)
            {
                this._FocusedChild = null;
            }
                                                            
            this._Children.splice(index, 1);
            this.PerformLayout();
        }
    }

    SetPosition(x: number, y: number)
    {
        if ((this._Position.X != x) || (this._Position.Y != y))
        {
            let moveData = new ControlMoveEvent(this, this._Position, new Position(x, y));

            this._Position.X = x;
            this._Position.Y = y;

            this.NotifyEventSubscribers(moveData);
        }
    }

    public get Position(): Position
    {
        return this._Position;
    }

    SetSize(width: number, height: number)
    {
        if ((this._Size.Width != width) || (this._Size.Height != height))
        {
            let resizeData = new ControlResizeEvent(this, this._Size, new Size(width, height));

            this._Size.Width = width;
            this._Size.Height = height;

            if (this._Parent != null)
            {
                this._Parent.PerformLayout();							
            }
            else
            {
                this.PerformLayout();
            }

            this.NotifyEventSubscribers(resizeData);
        }
    }

    public get Size(): Size
    {
        return this._Size;
    }

    public get Anchor(): AnchorStyle
    {
        return this._Anchor;
    }

    public set Anchor(anchor: AnchorStyle)
    {
        this._Dock = DockStyle.None;
        this._Alignment = AlignmentStyle.None;

        this._Anchor = anchor;

        if(this._Parent != null)
        {
            this._Parent.PerformLayout();
        }
    }

    public get Dock(): DockStyle
    {
        return this._Dock;
    }
    
    public set Dock(dock: DockStyle)
    {
        this._Anchor.ClearAnchorStyle();
        this._Alignment = AlignmentStyle.None;

        this._Dock = dock;

        if(this._Parent != null)
        {
            this._Parent.PerformLayout();
        }
    }

    public get Alignment(): AlignmentStyle
    {
        return this._Alignment;
    }
    
    public set Alignment(alignment: AlignmentStyle)
    {
        this._Dock = DockStyle.None;
        this._Anchor.ClearAnchorStyle();

        this._Alignment = alignment;

        if(this._Parent != null)
        {
            this._Parent.PerformLayout();
        }
    }

    public get Padding(): Padding
    {
        return this._Padding;
    }

    public set Padding(padding: Padding)
    {
        this._Padding = padding;
        this.PerformLayout();
    }

    public get Margins(): Padding
    {
        return this._Margins;
    }

    public set Margins(margins: Padding)
    {
        this._Margins = margins;

        if(this._Parent != null)
        {
            this._Parent.PerformLayout();
        }
    }

    public get Bounds(): Rect
    {
        let bounds = new Rect(this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);

        return bounds;
    }

    public get AbsoluteBounds(): Rect
    {
        if(this._Parent != null)
        {
            let bounds = this._Parent.AbsoluteBounds;

            return new Rect(bounds.X + this._Position.X, bounds.Y + this._Position.Y, this._Size.Width, this._Size.Height);
        }
        else	
        {
            return new Rect(this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);
        }
    }

    protected ChildGotFocus(control: Control)
    {
        if (control != this._FocusedChild)
        {
            if (this._FocusedChild != null)
            {
                this._FocusedChild.Focused = false;
            }

            this._FocusedChild = control;
        }

        if (this._Focusable == true)
        {						
            if (this._Parent != null)
            {
                this._Parent.ChildGotFocus(this);
            }
        }
    }

    public get Focused(): boolean
    {
        return this._Focused;
    }

    public set Focused(focus: boolean)
    {
        let oldFocus = this._Focused;
        this._Focused = focus;

        if (this._Focused == true)
        {
            if (this._Focusable == true)
            {
                this.AddControlClass(ControlClasses.Focused);

                if (this._Parent != null)
                {
                    this._Parent.ChildGotFocus(this);
                }

                //defocus our children
                for (let i = 0; i < this._Children.length; i++)
                {
                    this._Children[i].Focused = false;
                }

                if (oldFocus == false)
                {
                    let focusEvent = new Event(ControlEventTypes.Focused);

                    this.NotifyEventSubscribers(focusEvent);
                }
            }
        }
        else
        {
            this.RemoveControlClass(ControlClasses.Focused);

            //since we're no longer focused, our children cant be focused either 
            for (let i = 0; i < this._Children.length; i++)
            {
                this._Children[i].Focused = false;
            }

            if (oldFocus == true)
            {
                let focusLostEvent = new Event(ControlEventTypes.FocusLost);

                this.NotifyEventSubscribers(focusLostEvent);
            }
        }
    }

    public set Focusable(focusable: boolean)
    {
        this._Focusable = focusable;
    }

    public get Focusable(): boolean
    {
        return this._Focusable;
    }

    public get Visible(): boolean
    { 
        return this._Visible; 
    }

    public get Enabled(): boolean
    { 
        return this._Enabled; 
    }

    public set Visible(visible: boolean) 
    { 
        this._Visible = visible;
        this.RequestPaint();
    }

    public set Enabled(enabled: boolean)
    {
        this._Enabled = enabled;

        if (this._Enabled == false)
        {
            this.AddControlClass(ControlClasses.Disabled);
        }
        else
        {
            this.RemoveControlClass(ControlClasses.Disabled);
        }
    }

    GetIntersectingChild(position: Position): Control
    {
        let intersectingChild: Control = null;

        for (let i = this._Children.length - 1; i >= 0; i--)
        {
            intersectingChild = this._Children[i].GetIntersectingChild(position);

            if (intersectingChild != null)
            {
                return intersectingChild;
            }
        }

        if (this.AbsoluteBounds.InsideRect(position.X, position.Y))
        {
            intersectingChild = this;
        }

        return intersectingChild;
    }

    HandleEvent(event: Event)
    {
        if (this._Enabled == true)
        {
            let events = new Array<Event>();

            if ((event.Code >= KEYBOARD_EVENTS_BEGIN) && (event.Code <= KEYBOARD_EVENTS_END))
            {
                //keyboard events are directed to child controls that are focused, there must be a focus chain built whenever
                //a control gets focus, if none exists, this control consumes the event							
                if (this._FocusedChild != null)
                {
                    this._FocusedChild.HandleEvent(event);
                }
                else
                {								
                    this.HandleKeyboardEvent(<ControlKeyboardEvent>event);
                }
            }
            else if ((event.Code >= POINTER_EVENTS_BEGIN) && (event.Code <= POINTER_EVENTS_END))
            {
                //mouse events go to the control directly under the mouse at the time the event was fired, 
                //if the mouse isnt above any child control, this control will consume it
                let data = <ControlPointerEvent>event;

                let intersect = this.GetIntersectingChild(new Position(data.PointerEvent.X, data.PointerEvent.Y));

                //handle the mouse leave and enter events
                if (data.PointerEvent.Code == PointerEventTypes.PointerMove)
                {
                    this.HandleChildPointerEnterEvent(intersect, data);
                    this.HandleChildPointerLeaveEvent(intersect, data);
                }

                if ((intersect != null) && (intersect != this))
                {
                    intersect.HandleEvent(event);
                }
                else
                {
                    //SDL captures any click from any button as a mouse click event, we need to transform these events into something
                    //more useable to the framework i.e click, double click etc
                    /* if (data.PointerEvent.Code == PointerEventTypes.PointerUp)
                    {
                        //send through the click event
                        let click = new ControlPointerEvent(data.Control, data.PointerEvent.PointerData.X, data.PointerEvent.PointerData.Y, PointerEventTypes.PointerClicked);
                        
                        events.push_back(click);
                    }

                    if (data->PointerEvent->Code == (int)Input::PointerEventTypes::PointerDown)
                    {
                        if (data->PointerEvent->ClickCount == 2)
                        {
                            //create double click event
                            auto doubleClick = new Events::ControlPointerEvent(data->Control, data->PointerEvent->PointerData.Position.X, data->PointerEvent->PointerData.Position.Y,
                                2, data->PointerEvent->PointerData.Button, Input::PointerEventTypes::PointerDoubleClicked);
                            
                            events.push_back(doubleClick);
                        }

                        //any control that recieves a mouse down becomes the focused control
                        SetFocused(true);
                    } */

                    this.HandlePointerEvent(data);

                    for (let i = 0; i < events.length; i++)
                    {
                        this.HandleEvent(events[i]);                        
                    }
                }	

                this._PointerEventChild = intersect;
            }
        }
    }

    HandleChildPointerLeaveEvent(intersect: Control, event: ControlPointerEvent)
    {
        event.PointerEvent.Code = PointerEventTypes.PointerLeave;
                            
        if (this._PointerEventChild)
        {
            if (intersect == null)
            {
                //we've moved the pointer over the control after leaving the controls child
                this._PointerEventChild.HandlePointerEvent(event);
            }
            else if ((intersect != null) && (intersect != this._PointerEventChild))
            {
                //we've moved the pointer from one control to another, tell the old control about the pointer leave
                this._PointerEventChild.HandlePointerEvent(event);
            }
        }

        event.PointerEvent.Code = PointerEventTypes.PointerMove;
    }

    HandleChildPointerEnterEvent(intersect: Control, event: ControlPointerEvent)
    {
        event.PointerEvent.Code = PointerEventTypes.PointerEnter;

        if ((intersect != null) && (intersect != this))
        {						
            if ((this._PointerEventChild != intersect) || (this._PointerEventChild == null))
            {
                //we've moved onto a new control
                intersect.HandlePointerEvent(event);
            }
        }

        event.PointerEvent.Code = PointerEventTypes.PointerMove;
    }

    HandlePointerEvent(event: ControlPointerEvent)
    {
        if (this._Enabled == true)
        {
            switch (<PointerEventTypes>event.PointerEvent.Code)
            {
            case PointerEventTypes.PointerClicked:
                this.HandleOnPointerClicked(event);
                break;
            case PointerEventTypes.PointerDoubleClicked:
                this.HandleOnPointerDoubleClicked(event);
                break;
            case PointerEventTypes.PointerDown:
                this.HandleOnPointerDown(event);
                break;
            case PointerEventTypes.PointerEnter:
                this.HandleOnPointerEnter(event);
                break;
            case PointerEventTypes.PointerLeave:
                this.HandleOnPointerLeave(event);
                break;
            case PointerEventTypes.PointerMove:
                this.HandleOnPointerMove(event);
                break;
            case PointerEventTypes.PointerUp:
                this.HandleOnPointerUp(event);
                break;
            default:
                break;
            }
        }
    }

    HandleKeyboardEvent(event: ControlKeyboardEvent)
    {
        if (this._Enabled == true)
        {
            switch (<KeyboardEventTypes>event.KeyboardEvent.Code)
            {
            case KeyboardEventTypes.KeyDown:
                this.HandleOnKeyDown(event);
                break;
            case KeyboardEventTypes.KeyPressed:
                this.HandleOnKeyPressed(event);
                break;
            case KeyboardEventTypes.KeyUp:
                this.HandleOnKeyUp(event);
                break;
            default:
                break;
            }
        }
    }

    HandleOnPointerClicked(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);
    }

    HandleOnPointerDoubleClicked(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);
    }

    HandleOnPointerDown(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);

        if (event.PointerEvent.Button == PointerButtons.Left)
        {
            this.AddControlClass(ControlClasses.Pressed);
        }
    }

    HandleOnPointerEnter(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);
    }

    HandleOnPointerLeave(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);
                            
        if ((this._PointerEventChild != null) && (this._PointerEventChild != this))
        {
            this._PointerEventChild.HandleOnPointerLeave(event);
        }

        this.RemoveControlClass(ControlClasses.Hover);
        this.RemoveControlClass(ControlClasses.Pressed);
    }

    HandleOnPointerMove(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);

        if (event.PointerEvent.Button == PointerButtons.None)
        {
            this.AddControlClass(ControlClasses.Hover);
            this.RemoveControlClass(ControlClasses.Default);
        }
    }

    HandleOnPointerUp(event: ControlPointerEvent)
    {
        this.NotifyEventSubscribers(event);

        this.RemoveControlClass(ControlClasses.Pressed);
    }

    HandleOnKeyDown(event: ControlKeyboardEvent)
    {
        this.NotifyEventSubscribers(event);
    }

    HandleOnKeyPressed(event: ControlKeyboardEvent)
    {
        this. NotifyEventSubscribers(event);
    }

    HandleOnKeyUp(event: ControlKeyboardEvent)
    {
        this.NotifyEventSubscribers(event);
    }

    

    
    SetLayoutEngine(engine: ILayoutEngine)
    {
        this._LayoutEngine = engine;
        this.PerformLayout();
    }

    SetStyle(style: Style)
    {
        this._Style = style;

        this.UpdateControlFromStyle();
    }

    ApplyControlProperties(properties: Array<Property>)
    {				
        for(let i = 0; i < properties.length; i++)
        {
            if (properties[i].Name == "Size")
            {
                let size: Size = JSON.parse(properties[i].Value);
                this.SetSize(size.Width, size.Height);
            }
            else if (properties[i].Name == "Position")
            {
                let position: Position = JSON.parse(properties[i].Value);
                this.SetPosition(position.X, position.Y);
            }
            else if (properties[i].Name == "Dock")
            {
                this.Dock = <DockStyle>parseInt(properties[i].Value);
            }
            else if (properties[i].Name == "ControlAlignment")
            {
                this.Alignment = <AlignmentStyle>parseInt(properties[i].Value);
            }
            else if (properties[i].Name == "Anchor")
            {
                this.Anchor = JSON.parse(properties[i].Value);
            }
            else if (properties[i].Name == "Padding")
            {
                this.Padding = JSON.parse(properties[i].Value);
            }
            else if (properties[i].Name == "Margin")
            {
                this.Margins = JSON.parse(properties[i].Value);
            }
        }
    }

    /// <summary>
    /// Will update the properties of the control (size, dock, anchor etc...) from it's style
    /// </summary>
    UpdateControlFromStyle()
    {
        if (this._Style != null)
        {
            //the properties for the current state
            for (let i = 0; i < this._ActiveControlClasses.length; i++)
            {
                let styleClass = this._Style.FindStyleClass(this._ActiveControlClasses[i]);

                if (styleClass)
                {
                    this.ApplyControlProperties(styleClass.Properties);								
                }							
            }
        }
    }

    SetPaintRequestCallback(callback: () => void, recursive: boolean)
    {
        this._PaintRequestCallback = callback;

        if (recursive == true)
        {
            for (let i = 0; i < this._Children.length; i++)
            {
                this._Children[i].SetPaintRequestCallback(callback, recursive);
            }						
        }
    }

    Tick(time: number)
    {
        for (let i = 0; i < this._Children.length; i++)
        {
            this._Children[i].Tick(time);
        }
    }
}