declare module "Renderer/Brushes/Brush" {
    export enum BrushTypes {
        SolidColour = 0,
        Image = 1,
        LinearGradient = 2,
        RadialGradient = 3
    }
    export class Brush {
        private _Type;
        constructor(type: BrushTypes);
        readonly Type: BrushTypes;
    }
}
declare module "Renderer/Colour" {
    export class Colour {
        Red: number;
        Green: number;
        Blue: number;
        Alpha: number;
        ToHexString(): string;
        ToRGBAString(): string;
    }
}
declare module "Renderer/Pen" {
    import { Colour } from "Renderer/Colour";
    export class Pen {
        StrokeWidth: number;
        StrokeColour: Colour;
    }
}
declare module "Renderer/Position" {
    export class Position {
        X: number;
        Y: number;
        Z: number;
        constructor(x?: number, y?: number, z?: number);
    }
}
declare module "Renderer/Rect" {
    export class Rect {
        X: number;
        Y: number;
        Width: number;
        Height: number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        InsideRect(x: number, y: number): boolean;
        static InsideRect(x: number, y: number, rect: Rect): boolean;
    }
}
declare module "Renderer/Font" {
    export class Font {
    }
}
declare module "Renderer/IRenderer" {
    import { Brush } from "Renderer/Brushes/Brush";
    import { Pen } from "Renderer/Pen";
    import { Position } from "Renderer/Position";
    import { Rect } from "Renderer/Rect";
    import { Font } from "Renderer/Font";
    export enum ImageDrawRectMismatch {
        ClampToSource = 0,
        StretchToDestination = 1,
        StretchToDestinationMaintainAspect = 2,
        Tile = 3
    }
    export interface IRenderer {
        DrawCircle(radius: number, position: Position, brush: Brush, pen: Pen): any;
        DrawImage(path: string, sourceRect: Rect, destinationRect: Rect, rectMismatchOption: ImageDrawRectMismatch): any;
        DrawLine(start: Position, end: Position, pen: Pen): any;
        DrawRectangle(rect: Rect, brush: Brush, pen: Pen): any;
        DrawRoundedRectangle(rect: Rect, brush: Brush, pen: Pen, radius: number): any;
        DrawText(text: string, rect: Rect, font: Font, brush: Brush, pen: Pen): any;
        GetTextSize(text: string, font: Font): Rect;
    }
}
declare module "Forms/Padding" {
    export class Padding {
        Left: number;
        Right: number;
        Top: number;
        Bottom: number;
        readonly VerticalPadding: number;
        readonly HorizontalPadding: number;
        SetVerticalPadding(padding: number): void;
        SetHorizontalPadding(padding: number): void;
        SetAll(padding: number): void;
    }
}
declare module "Forms/AnchorStyle" {
    import { Rect } from "Renderer/Rect";
    export class AnchorStyle {
        AnchorLeft: boolean;
        AnchorRight: boolean;
        AnchorTop: boolean;
        AnchorBottom: boolean;
        AnchorLeftDistance: number;
        AnchorRightDistance: number;
        AnchorTopDistance: number;
        AnchorBottomDistance: number;
        AnchorAll(all: number): void;
        AnchorSeperately(left: number, right: number, top: number, bottom: number): void;
        HasAnchorStyle(): boolean;
        ClearAnchorStyle(): void;
        GetBounds(objectBounds: Rect, parentBounds: Rect): Rect;
    }
}
declare module "Forms/DockStyle" {
    import { Rect } from "Renderer/Rect";
    import { Padding } from "Forms/Padding";
    export enum DockStyle {
        Top = 0,
        Left = 1,
        Bottom = 2,
        Right = 3,
        Fill = 4,
        None = 5
    }
    export function GetDockStyleBounds(dock: DockStyle, availableBounds: Rect, currentBounds: Rect, boundMargins: Padding): Rect;
}
declare module "Forms/AlignmentStyle" {
    import { Rect } from "Renderer/Rect";
    import { Padding } from "Forms/Padding";
    export enum AlignmentStyle {
        None = 0,
        TopLeft = 1,
        TopCenter = 2,
        TopRight = 3,
        MiddleLeft = 4,
        MiddleCenter = 5,
        MiddleRight = 6,
        BottomLeft = 7,
        BottomCenter = 8,
        BottomRight = 9
    }
    export function GetAlignmentStyleBounds(alignment: AlignmentStyle, currentBounds: Rect, currentBoundsMargin: Padding, parentBounds: Rect, parentBoundsPadding: Padding): Rect;
}
declare module "Renderer/Size" {
    export class Size {
        Width: number;
        Height: number;
        Length: number;
        constructor(width?: number, height?: number, length?: number);
    }
}
declare module "Forms/Layouts/ILayoutEngine" {
    import { Control } from "Forms/Controls/Control";
    export interface ILayoutEngine {
        PerformLayout(control: Control): any;
    }
}
declare module "Forms/Theming/StyleComponents/StyleComponent" {
    import { AnchorStyle } from "Forms/AnchorStyle";
    import { AlignmentStyle } from "Forms/AlignmentStyle";
    import { Size } from "Renderer/Size";
    import { Position } from "Renderer/Position";
    import { Brush } from "Renderer/Brushes/Brush";
    import { Pen } from "Renderer/Pen";
    import { IRenderer } from "Renderer/IRenderer";
    import { Rect } from "Renderer/Rect";
    export enum StyleComponentTypes {
        TextGraphic = 0,
        CircleGraphic = 1,
        RectangleGraphic = 2,
        RoundedRectangleGraphic = 3,
        LineGraphic = 4,
        ImageGraphic = 5,
        ComponentLink = 6,
        Control = 7
    }
    export abstract class StyleComponent {
        Name: string;
        Type: StyleComponentTypes;
        Brush: Brush;
        Pen: Pen;
        Anchor: AnchorStyle;
        Alignment: AlignmentStyle;
        Size: Size;
        Position: Position;
        constructor(name: string, type: StyleComponentTypes);
        protected GetRenderBounds(controlBounds: Rect, position: Position, size: Size): void;
        abstract RenderComponent(renderer: IRenderer, bounds: Rect): any;
    }
}
declare module "Forms/Controls/Property" {
    export enum PropertyTypes {
        Integer = 0,
        Float = 1,
        String = 2,
        Boolean = 3,
        Colour = 4,
        Rect = 5,
        Point = 6,
        Dimension = 7,
        Brush = 8
    }
    export class Property {
        Name: string;
        Value: string;
        Type: PropertyTypes;
    }
}
declare module "Forms/Theming/StyleClass" {
    import { IRenderer } from "Renderer/IRenderer";
    import { Rect } from "Renderer/Rect";
    import { StyleComponent } from "Forms/Theming/StyleComponents/StyleComponent";
    import { Property } from "Forms/Controls/Property";
    export class StyleClass {
        Name: string;
        Components: StyleComponent[];
        Properties: Property[];
        constructor(name: string);
        readonly ComponentCount: number;
        RenderComponents(renderer: IRenderer, bounds: Rect): void;
    }
}
declare module "Forms/Theming/Style" {
    import { StyleClass } from "Forms/Theming/StyleClass";
    import { StyleComponent } from "Forms/Theming/StyleComponents/StyleComponent";
    import { Property } from "Forms/Controls/Property";
    import { IRenderer } from "Renderer/IRenderer";
    import { Rect } from "Renderer/Rect";
    export class Style {
        Name: string;
        StyleProperties: Property[];
        StyleComponents: StyleComponent[];
        StyleClasses: StyleClass[];
        constructor(name: string);
        FindStyleComponent(name: string): StyleComponent;
        FindProperty(name: string): Property;
        ContainsClass(styleClass: string): boolean;
        FindStyleClass(name: string): StyleClass;
        RenderStyle(renderer: IRenderer, classes: Array<string>, bounds: Rect): void;
        RenderStyleClass(renderer: IRenderer, styleClass: StyleClass, bounds: Rect): void;
        RenderStyleClassAtIndex(renderer: IRenderer, index: number, bounds: Rect): void;
    }
}
declare module "Forms/Events/Events" {
    export class Event {
        Code: number;
        constructor(code: number);
    }
    export type EventHandler = (e: Event) => Promise<boolean>;
    export class EventSubscription {
        Code: number;
        Handler: EventHandler;
    }
    export class EventNotifier {
        protected EventHandlers: EventSubscription[];
        SubscribeToEvent(code: number, handler: EventHandler): void;
        UnsubscribeFromEvent(code: number, handler: EventHandler): void;
        NotifyEventSubscribers(event: Event): void;
    }
}
declare module "Forms/Events/PointerEvents" {
    import { Event } from "Forms/Events/Events";
    export enum PointerButtons {
        None = 0,
        Left = 1,
        Right = 2,
        Middle = 3
    }
    export enum PointerEventTypes {
        PointerMove = 1,
        PointerDown = 2,
        PointerUp = 3,
        PointerClicked = 4,
        PointerDoubleClicked = 5,
        PointerEnter = 6,
        PointerLeave = 7,
        PointerDrag = 8
    }
    export class PointerEvent extends Event {
        X: number;
        Y: number;
        Button: PointerButtons;
        constructor(x: number, y: number, button: PointerButtons, type: PointerEventTypes);
    }
}
declare module "Forms/Events/KeyboardEvents" {
    import { Event } from "Forms/Events/Events";
    export enum KeyboardEventTypes {
        KeyDown = 8,
        KeyUp = 9,
        KeyPressed = 10
    }
    export class KeyboardState {
        LeftShift: boolean;
        RightShift: boolean;
        LeftCtrl: boolean;
        RightCtrl: boolean;
        LeftAlt: boolean;
        RightAlt: boolean;
    }
    export class KeyboardEvent extends Event {
        KeyCode: string;
        State: KeyboardState;
        constructor(keyCode: string, type: KeyboardEventTypes, state: KeyboardState);
    }
}
declare module "Forms/Events/ControlEvents" {
    import { Event } from "Forms/Events/Events";
    import { Control } from "Forms/Controls/Control";
    import { PointerEvent, PointerEventTypes, PointerButtons } from "Forms/Events/PointerEvents";
    import { KeyboardEvent, KeyboardEventTypes, KeyboardState } from "Forms/Events/KeyboardEvents";
    import { Size } from "Renderer/Size";
    import { Position } from "Renderer/Position";
    export enum ControlEventTypes {
        Resize = 0,
        Moved = 1,
        FocusLost = 2,
        Focused = 3,
        TextChanged = 4,
        Pointer = 5,
        Keyboard = 6
    }
    export const KEYBOARD_EVENTS_BEGIN: number;
    export const KEYBOARD_EVENTS_END: number;
    export const POINTER_EVENTS_BEGIN: number;
    export const POINTER_EVENTS_END: number;
    export class ControlEvent extends Event {
        Control: Control;
        constructor(control: Control, type: ControlEventTypes);
    }
    export class ControlPointerEvent extends ControlEvent {
        PointerEvent: PointerEvent;
        constructor(control: Control, x: number, y: number, button: PointerButtons, type: PointerEventTypes);
    }
    export class ControlKeyboardEvent extends ControlEvent {
        KeyboardEvent: KeyboardEvent;
        constructor(control: Control, type: KeyboardEventTypes, keyCode: string, state: KeyboardState);
    }
    export class ControlResizeEvent extends ControlEvent {
        OldSize: Size;
        NewSize: Size;
        constructor(control: Control, oldSize: Size, newSize: Size);
    }
    export class ControlMoveEvent extends ControlEvent {
        OldPosition: Position;
        NewPosition: Position;
        constructor(control: Control, oldPosition: Position, newPosition: Position);
    }
    export class TextChangedEvent extends ControlEvent {
        OldText: string;
        NewText: string;
        constructor(control: Control, oldText: string, newText: string);
    }
}
declare module "Forms/Controls/Control" {
    import { Padding } from "Forms/Padding";
    import { AnchorStyle } from "Forms/AnchorStyle";
    import { DockStyle } from "Forms/DockStyle";
    import { AlignmentStyle } from "Forms/AlignmentStyle";
    import { Size } from "Renderer/Size";
    import { Rect } from "Renderer/Rect";
    import { Position } from "Renderer/Position";
    import { ILayoutEngine } from "Forms/Layouts/ILayoutEngine";
    import { Style } from "Forms/Theming/Style";
    import { IRenderer } from "Renderer/IRenderer";
    import { ControlPointerEvent, ControlKeyboardEvent } from "Forms/Events/ControlEvents";
    import { Event, EventNotifier } from "Forms/Events/Events";
    import { Property } from "Forms/Controls/Property";
    export var ControlClasses: {
        Default: string;
        Pressed: string;
        Hover: string;
        Disabled: string;
        Focused: string;
        Toggled: string;
    };
    export class Control extends EventNotifier {
        private _Name;
        private _LayoutSuspended;
        private _UndergoingLayout;
        private _Focusable;
        private _Focused;
        private _Visible;
        private _Enabled;
        private _ClipsChildren;
        private _Parent;
        private _Children;
        private _FocusedChild;
        private _PointerEventChild;
        private _Margins;
        private _Padding;
        private _Anchor;
        private _Dock;
        private _Alignment;
        private _Size;
        private _Position;
        private _LayoutEngine;
        private _ActiveControlClasses;
        private _Style;
        private _PaintRequestCallback;
        constructor(name?: string);
        readonly Name: string;
        LayoutSuspended: boolean;
        Paint(renderer: IRenderer): void;
        RequestPaint(): void;
        AddControlClass(controlClass: string): void;
        RemoveControlClass(controlClass: string): void;
        IsControlClassSet(controlClass: string): boolean;
        PerformLayout(): void;
        readonly ChildCount: number;
        GetChildAtIndex(index: number): Control;
        readonly Parent: Control;
        AddChildControl(child: Control): void;
        RemoveChildControl(child: Control): void;
        RemoveChildControlAtIndex(index: number): void;
        SetPosition(x: number, y: number): void;
        readonly Position: Position;
        SetSize(width: number, height: number): void;
        readonly Size: Size;
        Anchor: AnchorStyle;
        Dock: DockStyle;
        Alignment: AlignmentStyle;
        Padding: Padding;
        Margins: Padding;
        readonly Bounds: Rect;
        readonly AbsoluteBounds: Rect;
        protected ChildGotFocus(control: Control): void;
        Focused: boolean;
        Focusable: boolean;
        Visible: boolean;
        Enabled: boolean;
        protected GetIntersectingChild(position: Position): Control;
        HandleEvent(event: Event): void;
        protected HandleChildPointerLeaveEvent(intersect: Control, event: ControlPointerEvent): void;
        protected HandleChildPointerEnterEvent(intersect: Control, event: ControlPointerEvent): void;
        protected HandlePointerEvent(event: ControlPointerEvent): void;
        protected HandleKeyboardEvent(event: ControlKeyboardEvent): void;
        protected HandleOnPointerClicked(event: ControlPointerEvent): void;
        protected HandleOnPointerDoubleClicked(event: ControlPointerEvent): void;
        protected HandleOnPointerDown(event: ControlPointerEvent): void;
        protected HandleOnPointerEnter(event: ControlPointerEvent): void;
        protected HandleOnPointerLeave(event: ControlPointerEvent): void;
        protected HandleOnPointerMove(event: ControlPointerEvent): void;
        protected HandleOnPointerUp(event: ControlPointerEvent): void;
        protected HandleOnKeyDown(event: ControlKeyboardEvent): void;
        protected HandleOnKeyPressed(event: ControlKeyboardEvent): void;
        protected HandleOnKeyUp(event: ControlKeyboardEvent): void;
        LayoutEngine: ILayoutEngine;
        Style: Style;
        protected ApplyControlProperties(properties: Array<Property>): void;
        protected UpdateControlFromStyle(): void;
        SetPaintRequestCallback(callback: () => void, recursive: boolean): void;
        Tick(time: number): void;
    }
}
declare module "KuumbaForms" {
    import { IRenderer } from "Renderer/IRenderer";
    import { Control } from "Forms/Controls/Control";
    export class InitialisationOptions {
        Element: HTMLCanvasElement;
        Maximized: boolean;
        Renderer: IRenderer;
        RootControl: Control;
    }
    export class KuumbaForms {
        private _Options;
        constructor(options: InitialisationOptions);
        private Initialise;
        private Paint;
        BeginAnimationLoop(): void;
    }
}
declare module "Renderer/Brushes/SolidColourBrush" {
    import { Brush } from "Renderer/Brushes/Brush";
    import { Colour } from "Renderer/Colour";
    export class SolidColourBrush extends Brush {
        protected _Colour: Colour;
        constructor(colour?: Colour);
        Colour: Colour;
    }
}
declare module "Renderer/Brushes/GradientBrush" {
    import { Brush, BrushTypes } from "Renderer/Brushes/Brush";
    import { Colour } from "Renderer/Colour";
    export class GradientBrush extends Brush {
        private _ColourStops;
        constructor(type: BrushTypes);
        AddColourStop(colourStop: Colour): void;
        readonly ColourStops: Array<Colour>;
    }
}
declare module "Renderer/Brushes/LinearGradient" {
    import { GradientBrush } from "Renderer/Brushes/GradientBrush";
    export class LinearGradient extends GradientBrush {
        X1: number;
        Y1: number;
        X2: number;
        Y2: number;
        constructor(x1: number, y1: number, x2: number, y2: number);
    }
}
declare module "Renderer/Brushes/RadialGradient" {
    import { GradientBrush } from "Renderer/Brushes/GradientBrush";
    export class RadialGradient extends GradientBrush {
        X1: number;
        Y1: number;
        R1: number;
        X2: number;
        Y2: number;
        R2: number;
        constructor(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number);
    }
}
declare module "Renderer/Canvas2dRenderer" {
    import { IRenderer, ImageDrawRectMismatch } from "Renderer/IRenderer";
    import { Brush } from "Renderer/Brushes/Brush";
    import { Pen } from "Renderer/Pen";
    import { Position } from "Renderer/Position";
    import { Rect } from "Renderer/Rect";
    import { Font } from "Renderer/Font";
    import { GradientBrush } from "Renderer/Brushes/GradientBrush";
    export class Canvas2dRenderer implements IRenderer {
        protected Context: CanvasRenderingContext2D;
        constructor(canvas: HTMLCanvasElement);
        protected LoadColourStops(brush: GradientBrush, gradient: CanvasGradient): void;
        protected LoadFillStyle(brush: Brush): string | CanvasGradient;
        protected LoadStyles(brush: Brush, pen: Pen): void;
        protected FinaliseShape(): void;
        DrawCircle(radius: number, position: Position, brush: Brush, pen: Pen): void;
        DrawImage(path: string, sourceRect: Rect, destinationRect: Rect, rectMismatchOption: ImageDrawRectMismatch): void;
        DrawLine(start: Position, end: Position, pen: Pen): void;
        DrawRectangle(rect: Rect, brush: Brush, pen: Pen): void;
        DrawRoundedRectangle(rect: Rect, brush: Brush, pen: Pen, radius: number): void;
        DrawText(text: string, rect: Rect, font: Font, brush: Brush, pen: Pen): void;
        GetTextSize(text: string, font: Font): Rect;
    }
}
