System.register("Renderer/Brushes/Brush", [], function (exports_1, context_1) {
    "use strict";
    var BrushTypes, Brush;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (BrushTypes) {
                BrushTypes[BrushTypes["SolidColour"] = 0] = "SolidColour";
                BrushTypes[BrushTypes["Image"] = 1] = "Image";
                BrushTypes[BrushTypes["LinearGradient"] = 2] = "LinearGradient";
                BrushTypes[BrushTypes["RadialGradient"] = 3] = "RadialGradient";
            })(BrushTypes || (BrushTypes = {}));
            exports_1("BrushTypes", BrushTypes);
            Brush = class Brush {
                constructor(type) {
                    this._Type = type;
                }
                get Type() {
                    return this._Type;
                }
            };
            exports_1("Brush", Brush);
        }
    };
});
System.register("Renderer/Colour", [], function (exports_2, context_2) {
    "use strict";
    var Colour;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Colour = class Colour {
                constructor() {
                    this.Red = 0;
                    this.Green = 0;
                    this.Blue = 0;
                    this.Alpha = 255;
                }
                ;
                ToHexString() {
                    return "#" + this.Red.toString(15).toUpperCase() +
                        this.Green.toString(15).toUpperCase() +
                        this.Blue.toString(15).toUpperCase() +
                        this.Alpha.toString(15).toUpperCase();
                }
                ToRGBAString() {
                    return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + ", " + this.Alpha + ")";
                }
            };
            exports_2("Colour", Colour);
        }
    };
});
System.register("Renderer/Pen", ["Renderer/Colour"], function (exports_3, context_3) {
    "use strict";
    var Colour_1, Pen;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Colour_1_1) {
                Colour_1 = Colour_1_1;
            }
        ],
        execute: function () {
            Pen = class Pen {
                constructor() {
                    this.StrokeWidth = 0;
                    this.StrokeColour = new Colour_1.Colour();
                }
            };
            exports_3("Pen", Pen);
        }
    };
});
System.register("Renderer/Position", [], function (exports_4, context_4) {
    "use strict";
    var Position;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            Position = class Position {
                constructor(x, y, z) {
                    this.X = x;
                    this.Y = y;
                    this.Z = z;
                }
            };
            exports_4("Position", Position);
        }
    };
});
System.register("Renderer/Rect", [], function (exports_5, context_5) {
    "use strict";
    var Rect;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            Rect = class Rect {
                constructor(x, y, width, height) {
                    this.X = x;
                    this.Y = y;
                    this.Width = width;
                    this.Height = height;
                }
                InsideRect(x, y) {
                    return ((x > this.X) && (x < this.X + this.Width) && (y > this.Y) && (y < this.Y + this.Height));
                }
                static InsideRect(x, y, rect) {
                    return ((x > rect.X) && (x < rect.X + rect.Width) && (y > rect.Y) && (y < rect.Y + rect.Height));
                }
            };
            exports_5("Rect", Rect);
        }
    };
});
System.register("Renderer/Font", [], function (exports_6, context_6) {
    "use strict";
    var Font;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            Font = class Font {
            };
            exports_6("Font", Font);
        }
    };
});
System.register("Renderer/IRenderer", [], function (exports_7, context_7) {
    "use strict";
    var ImageDrawRectMismatch;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            (function (ImageDrawRectMismatch) {
                ImageDrawRectMismatch[ImageDrawRectMismatch["ClampToSource"] = 0] = "ClampToSource";
                ImageDrawRectMismatch[ImageDrawRectMismatch["StretchToDestination"] = 1] = "StretchToDestination";
                ImageDrawRectMismatch[ImageDrawRectMismatch["StretchToDestinationMaintainAspect"] = 2] = "StretchToDestinationMaintainAspect";
                ImageDrawRectMismatch[ImageDrawRectMismatch["Tile"] = 3] = "Tile";
            })(ImageDrawRectMismatch || (ImageDrawRectMismatch = {}));
            exports_7("ImageDrawRectMismatch", ImageDrawRectMismatch);
        }
    };
});
System.register("Forms/Padding", [], function (exports_8, context_8) {
    "use strict";
    var Padding;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            Padding = class Padding {
                get VerticalPadding() {
                    return this.Bottom + this.Top;
                }
                get HorizontalPadding() {
                    return this.Left + this.Right;
                }
                SetVerticalPadding(padding) {
                    this.Bottom = this.Top = padding;
                }
                SetHorizontalPadding(padding) {
                    this.Right = this.Left = padding;
                }
                SetAll(padding) {
                    this.Right = this.Left = this.Bottom = this.Top = padding;
                }
            };
            exports_8("Padding", Padding);
        }
    };
});
System.register("Forms/AnchorStyle", [], function (exports_9, context_9) {
    "use strict";
    var AnchorStyle;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            AnchorStyle = class AnchorStyle {
                constructor() {
                    this.AnchorLeft = false;
                    this.AnchorRight = false;
                    this.AnchorTop = false;
                    this.AnchorBottom = false;
                    this.AnchorLeftDistance = 0;
                    this.AnchorRightDistance = 0;
                    this.AnchorTopDistance = 0;
                    this.AnchorBottomDistance = 0;
                }
                AnchorAll(all) {
                    this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;
                    this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = all;
                }
                AnchorSeperately(left, right, top, bottom) {
                    this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;
                    this.AnchorLeftDistance = left;
                    this.AnchorRightDistance = right;
                    this.AnchorBottomDistance = bottom;
                    this.AnchorTopDistance = top;
                }
                HasAnchorStyle() {
                    return this.AnchorBottom || this.AnchorLeft || this.AnchorRight || this.AnchorTop;
                }
                ClearAnchorStyle() {
                    this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = false;
                    this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = 0;
                }
                GetBounds(objectBounds, parentBounds) {
                    let bounds = objectBounds;
                    //first do vertical anchoring layout
                    if ((this.AnchorBottom == true) && (this.AnchorTop == false)) {
                        bounds.Y = parentBounds.Height - objectBounds.Height - this.AnchorBottomDistance;
                    }
                    else if ((this.AnchorTop == true) && (this.AnchorBottom == false)) {
                        bounds.Y = parentBounds.Y + this.AnchorTopDistance;
                    }
                    else if ((this.AnchorTop == true) && (this.AnchorBottom == true)) {
                        //here we're anchoring both bottom AND top						
                        bounds.Y = parentBounds.Y + this.AnchorTopDistance;
                        bounds.Height = parentBounds.Height - (this.AnchorTopDistance + this.AnchorBottomDistance);
                    }
                    //then do horizontal
                    if ((this.AnchorLeft == true) && (this.AnchorRight == false)) {
                        bounds.X = parentBounds.X + this.AnchorLeftDistance;
                    }
                    else if ((this.AnchorRight == true) && (this.AnchorLeft == false)) {
                        bounds.X = parentBounds.Width - objectBounds.Width - this.AnchorRightDistance;
                    }
                    else if ((this.AnchorLeft == true) && (this.AnchorRight == true)) {
                        //here we're anchoring both left AND right
                        bounds.X = parentBounds.X + this.AnchorLeftDistance;
                        bounds.Width = parentBounds.Width - (this.AnchorLeftDistance + this.AnchorRightDistance);
                    }
                    return bounds;
                }
            };
            exports_9("AnchorStyle", AnchorStyle);
        }
    };
});
System.register("Forms/DockStyle", ["Renderer/Rect"], function (exports_10, context_10) {
    "use strict";
    var Rect_1, DockStyle;
    var __moduleName = context_10 && context_10.id;
    function GetDockStyleBounds(dock, availableBounds, currentBounds, boundMargins) {
        let newBounds = new Rect_1.Rect();
        switch (dock) {
            case DockStyle.Top:
                newBounds.X = availableBounds.X + boundMargins.Left;
                newBounds.Y = availableBounds.Y + boundMargins.Top;
                newBounds.Width = availableBounds.Width - boundMargins.Right - boundMargins.Left;
                newBounds.Height = currentBounds.Height;
                availableBounds.Y += newBounds.Height + boundMargins.Bottom + boundMargins.Top;
                availableBounds.Height -= newBounds.Height + boundMargins.Bottom + boundMargins.Top;
                break;
            case DockStyle.Left:
                newBounds.X = availableBounds.X + boundMargins.Left;
                newBounds.Y = availableBounds.Y + boundMargins.Top;
                newBounds.Width = currentBounds.Width;
                newBounds.Height = availableBounds.Height - boundMargins.Top - boundMargins.Bottom;
                availableBounds.X += newBounds.Width + boundMargins.Left + boundMargins.Right;
                availableBounds.Width = availableBounds.Width - (newBounds.Width + boundMargins.Left + boundMargins.Right);
                break;
            case DockStyle.Right:
                newBounds.X = (availableBounds.X + availableBounds.Width) - currentBounds.Width - boundMargins.Right;
                newBounds.Y = availableBounds.Y + boundMargins.Top;
                newBounds.Width = currentBounds.Width;
                newBounds.Height = availableBounds.Height - boundMargins.Top - boundMargins.Bottom;
                availableBounds.Width = availableBounds.Width - (newBounds.Width + boundMargins.Left + boundMargins.Right);
                break;
            case DockStyle.Bottom:
                newBounds.X = availableBounds.X + boundMargins.Left;
                newBounds.Y = (availableBounds.Y + availableBounds.Height) - currentBounds.Height - boundMargins.Bottom;
                newBounds.Width = availableBounds.Width - boundMargins.Left - boundMargins.Right;
                newBounds.Height = currentBounds.Height;
                availableBounds.Height = availableBounds.Height - (newBounds.Height + boundMargins.Bottom + boundMargins.Top);
                break;
            case DockStyle.Fill:
                newBounds.X = availableBounds.X + boundMargins.Left;
                newBounds.Y = availableBounds.Y + boundMargins.Top;
                newBounds.Width = availableBounds.Width - (boundMargins.Left + boundMargins.Right);
                newBounds.Height = availableBounds.Height - (boundMargins.Top + boundMargins.Bottom);
                availableBounds.X = newBounds.Width;
                availableBounds.Y = newBounds.Height;
                availableBounds.Height = 0.0;
                availableBounds.Width = 0.0;
                break;
            default:
                break;
        }
        return newBounds;
    }
    exports_10("GetDockStyleBounds", GetDockStyleBounds);
    return {
        setters: [
            function (Rect_1_1) {
                Rect_1 = Rect_1_1;
            }
        ],
        execute: function () {
            (function (DockStyle) {
                DockStyle[DockStyle["Top"] = 0] = "Top";
                DockStyle[DockStyle["Left"] = 1] = "Left";
                DockStyle[DockStyle["Bottom"] = 2] = "Bottom";
                DockStyle[DockStyle["Right"] = 3] = "Right";
                DockStyle[DockStyle["Fill"] = 4] = "Fill";
                DockStyle[DockStyle["None"] = 5] = "None";
            })(DockStyle || (DockStyle = {}));
            exports_10("DockStyle", DockStyle);
        }
    };
});
System.register("Forms/AlignmentStyle", ["Renderer/Rect"], function (exports_11, context_11) {
    "use strict";
    var Rect_2, AlignmentStyle;
    var __moduleName = context_11 && context_11.id;
    function GetAlignmentStyleBounds(alignment, currentBounds, currentBoundsMargin, parentBounds, parentBoundsPadding) {
        let newBounds = new Rect_2.Rect;
        switch (alignment) {
            case AlignmentStyle.TopLeft:
                newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
                newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
                break;
            case AlignmentStyle.TopCenter:
                newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
                newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
                break;
            case AlignmentStyle.TopRight:
                newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
                newBounds.Y = parentBounds.Y + parentBoundsPadding.Top + currentBoundsMargin.Top;
                break;
            case AlignmentStyle.MiddleLeft:
                newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
                newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
                break;
            case AlignmentStyle.MiddleCenter:
                newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
                newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
                break;
            case AlignmentStyle.MiddleRight:
                newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
                newBounds.Y = parentBounds.Y + (parentBounds.Height / 2) - (currentBounds.Height / 2);
                break;
            case AlignmentStyle.BottomLeft:
                newBounds.X = parentBounds.X + parentBoundsPadding.Left + currentBoundsMargin.Left;
                newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
                break;
            case AlignmentStyle.BottomCenter:
                newBounds.X = parentBounds.X + (parentBounds.Width / 2) - (currentBounds.Width / 2);
                newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
                break;
            case AlignmentStyle.BottomRight:
                newBounds.X = parentBounds.X + parentBounds.Width - currentBounds.Width;
                newBounds.Y = parentBounds.Y + (parentBounds.Height) - (currentBounds.Height);
                break;
            default:
                break;
        }
        return newBounds;
    }
    exports_11("GetAlignmentStyleBounds", GetAlignmentStyleBounds);
    return {
        setters: [
            function (Rect_2_1) {
                Rect_2 = Rect_2_1;
            }
        ],
        execute: function () {
            (function (AlignmentStyle) {
                AlignmentStyle[AlignmentStyle["None"] = 0] = "None";
                AlignmentStyle[AlignmentStyle["TopLeft"] = 1] = "TopLeft";
                AlignmentStyle[AlignmentStyle["TopCenter"] = 2] = "TopCenter";
                AlignmentStyle[AlignmentStyle["TopRight"] = 3] = "TopRight";
                AlignmentStyle[AlignmentStyle["MiddleLeft"] = 4] = "MiddleLeft";
                AlignmentStyle[AlignmentStyle["MiddleCenter"] = 5] = "MiddleCenter";
                AlignmentStyle[AlignmentStyle["MiddleRight"] = 6] = "MiddleRight";
                AlignmentStyle[AlignmentStyle["BottomLeft"] = 7] = "BottomLeft";
                AlignmentStyle[AlignmentStyle["BottomCenter"] = 8] = "BottomCenter";
                AlignmentStyle[AlignmentStyle["BottomRight"] = 9] = "BottomRight";
            })(AlignmentStyle || (AlignmentStyle = {}));
            exports_11("AlignmentStyle", AlignmentStyle);
        }
    };
});
System.register("Renderer/Size", [], function (exports_12, context_12) {
    "use strict";
    var Size;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            Size = class Size {
                constructor(width, height, length) {
                    this.Width = width;
                    this.Height = height;
                    this.Length = length;
                }
            };
            exports_12("Size", Size);
        }
    };
});
System.register("Forms/Layouts/ILayoutEngine", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Forms/Theming/StyleComponents/StyleComponent", ["Forms/AnchorStyle", "Forms/AlignmentStyle", "Renderer/Rect", "Forms/Padding"], function (exports_14, context_14) {
    "use strict";
    var AnchorStyle_1, AlignmentStyle_1, Rect_3, Padding_1, StyleComponentTypes, StyleComponent;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (AnchorStyle_1_1) {
                AnchorStyle_1 = AnchorStyle_1_1;
            },
            function (AlignmentStyle_1_1) {
                AlignmentStyle_1 = AlignmentStyle_1_1;
            },
            function (Rect_3_1) {
                Rect_3 = Rect_3_1;
            },
            function (Padding_1_1) {
                Padding_1 = Padding_1_1;
            }
        ],
        execute: function () {
            (function (StyleComponentTypes) {
                StyleComponentTypes[StyleComponentTypes["TextGraphic"] = 0] = "TextGraphic";
                StyleComponentTypes[StyleComponentTypes["CircleGraphic"] = 1] = "CircleGraphic";
                StyleComponentTypes[StyleComponentTypes["RectangleGraphic"] = 2] = "RectangleGraphic";
                StyleComponentTypes[StyleComponentTypes["RoundedRectangleGraphic"] = 3] = "RoundedRectangleGraphic";
                StyleComponentTypes[StyleComponentTypes["LineGraphic"] = 4] = "LineGraphic";
                StyleComponentTypes[StyleComponentTypes["ImageGraphic"] = 5] = "ImageGraphic";
                StyleComponentTypes[StyleComponentTypes["ComponentLink"] = 6] = "ComponentLink";
                StyleComponentTypes[StyleComponentTypes["Control"] = 7] = "Control";
            })(StyleComponentTypes || (StyleComponentTypes = {}));
            exports_14("StyleComponentTypes", StyleComponentTypes);
            StyleComponent = class StyleComponent {
                constructor(name, type) {
                    this.Name = "";
                    this.Anchor = new AnchorStyle_1.AnchorStyle();
                    this.Alignment = AlignmentStyle_1.AlignmentStyle.None;
                    this.Name = name;
                    this.Type = type;
                }
                GetRenderBounds(controlBounds, position, size) {
                    if (this.Anchor.HasAnchorStyle() == true) {
                        let graphicBounds = new Rect_3.Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
                        let renderBounds = this.Anchor.GetBounds(graphicBounds, controlBounds);
                        position.X = renderBounds.X;
                        position.Y = renderBounds.Y;
                        size.Width = renderBounds.Width;
                        size.Height = renderBounds.Height;
                    }
                    else if (this.Alignment != AlignmentStyle_1.AlignmentStyle.None) {
                        let graphicBounds = new Rect_3.Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
                        let renderBounds = AlignmentStyle_1.GetAlignmentStyleBounds(this.Alignment, graphicBounds, new Padding_1.Padding(), controlBounds, new Padding_1.Padding());
                        position.X = renderBounds.X;
                        position.Y = renderBounds.Y;
                        size.Width = this.Size.Width;
                        size.Height = this.Size.Height;
                    }
                    else {
                        position.X = controlBounds.X + this.Position.X;
                        position.Y = controlBounds.Y + this.Position.Y;
                        size.Width = this.Size.Width;
                        size.Height = this.Size.Height;
                    }
                }
            };
            exports_14("StyleComponent", StyleComponent);
        }
    };
});
System.register("Forms/Controls/Property", [], function (exports_15, context_15) {
    "use strict";
    var PropertyTypes, Property;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            (function (PropertyTypes) {
                PropertyTypes[PropertyTypes["Integer"] = 0] = "Integer";
                PropertyTypes[PropertyTypes["Float"] = 1] = "Float";
                PropertyTypes[PropertyTypes["String"] = 2] = "String";
                PropertyTypes[PropertyTypes["Boolean"] = 3] = "Boolean";
                PropertyTypes[PropertyTypes["Colour"] = 4] = "Colour";
                PropertyTypes[PropertyTypes["Rect"] = 5] = "Rect";
                PropertyTypes[PropertyTypes["Point"] = 6] = "Point";
                PropertyTypes[PropertyTypes["Dimension"] = 7] = "Dimension";
                PropertyTypes[PropertyTypes["Brush"] = 8] = "Brush";
            })(PropertyTypes || (PropertyTypes = {}));
            exports_15("PropertyTypes", PropertyTypes);
            Property = class Property {
            };
            exports_15("Property", Property);
        }
    };
});
System.register("Forms/Theming/StyleClass", [], function (exports_16, context_16) {
    "use strict";
    var StyleClass;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
            StyleClass = class StyleClass {
                constructor(name) {
                    this.Components = new Array();
                    this.Properties = new Array();
                    this.Name = name;
                }
                get ComponentCount() {
                    return this.Components.length;
                }
                RenderComponents(renderer, bounds) {
                    for (let i = 0; i < this.Components.length; i++) {
                        this.Components[i].RenderComponent(renderer, bounds);
                    }
                }
            };
            exports_16("StyleClass", StyleClass);
        }
    };
});
System.register("Forms/Theming/Style", ["Forms/Controls/Property"], function (exports_17, context_17) {
    "use strict";
    var Property_1, Style;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (Property_1_1) {
                Property_1 = Property_1_1;
            }
        ],
        execute: function () {
            Style = class Style {
                constructor(name) {
                    this.StyleProperties = new Array();
                    this.StyleComponents = new Array();
                    this.StyleClasses = new Array();
                    this.Name = name;
                }
                FindStyleComponent(name) {
                    let component = null;
                    //first search the global components, then search the style class components
                    for (let i = 0; i < this.StyleComponents.length; i++) {
                        if (this.StyleComponents[i].Name == name) {
                            component = this.StyleComponents[i];
                            break;
                        }
                    }
                    if (component == null) {
                        for (let i = 0; i < this.StyleClasses.length; i++) {
                            for (let j = 0; j < this.StyleClasses[i].ComponentCount; j++) {
                                if (this.StyleClasses[i].Components[j].Name == name) {
                                    component = this.StyleClasses[i].Components[j];
                                    break;
                                }
                            }
                        }
                    }
                    return component;
                }
                FindProperty(name) {
                    for (let i = 0; i < this.StyleProperties.length; i++) {
                        if (this.StyleProperties[i].Name == name) {
                            return this.StyleProperties[i];
                        }
                    }
                    return new Property_1.Property();
                }
                ContainsClass(styleClass) {
                    for (let i = 0; i < this.StyleClasses.length; i++) {
                        if (styleClass == this.StyleClasses[i].Name) {
                            return true;
                        }
                    }
                    return false;
                }
                FindStyleClass(name) {
                    for (let i = 0; i < this.StyleClasses.length; i++) {
                        if (this.StyleClasses[i].Name == name) {
                            return this.StyleClasses[i];
                        }
                    }
                    return null;
                }
                RenderStyle(renderer, classes, bounds) {
                    let classesRendered = 0;
                    if (this.StyleClasses.length > 0) {
                        //try to find the state we're trying to render
                        for (let i = 0; i < classes.length; i++) {
                            for (let j = 0; j < this.StyleClasses.length; j++) {
                                if (this.StyleClasses[j].Name == classes[i]) {
                                    this.StyleClasses[j].RenderComponents(renderer, bounds);
                                    classesRendered += 1;
                                    break;
                                }
                            }
                        }
                    }
                    if (classesRendered == 0) {
                        //try to render the default style
                        for (let i = 0; i < this.StyleClasses.length; i++) {
                            if (this.StyleClasses[i].Name == "default") {
                                this.StyleClasses[i].RenderComponents(renderer, bounds);
                                classesRendered += 1;
                                break;
                            }
                        }
                    }
                }
                RenderStyleClass(renderer, styleClass, bounds) {
                    if (styleClass) {
                        //Graphics->ClipRegion(ControlBounds);
                        styleClass.RenderComponents(renderer, bounds);
                    }
                }
                RenderStyleClassAtIndex(renderer, index, bounds) {
                    if ((index >= 0) && (index < this.StyleClasses.length)) {
                        this.StyleClasses[index].RenderComponents(renderer, bounds);
                    }
                }
            };
            exports_17("Style", Style);
        }
    };
});
System.register("Forms/Events/Events", [], function (exports_18, context_18) {
    "use strict";
    var Event, EventSubscription, EventNotifier;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
            Event = class Event {
                constructor(code) {
                    this.Code = code;
                }
            };
            exports_18("Event", Event);
            EventSubscription = class EventSubscription {
            };
            exports_18("EventSubscription", EventSubscription);
            EventNotifier = class EventNotifier {
                constructor() {
                    this.EventHandlers = new Array();
                }
                SubscribeToEvent(code, handler) {
                    this.EventHandlers.push({ Code: code, Handler: handler });
                }
                UnsubscribeFromEvent(code, handler) {
                    for (let i = 0; i < this.EventHandlers.length; i++) {
                        if ((this.EventHandlers[i].Code == code) && (this.EventHandlers[i].Handler == handler)) {
                            this.EventHandlers.splice(i, 1);
                            break;
                        }
                    }
                }
                NotifyEventSubscribers(event) {
                    for (let i = 0; i < this.EventHandlers.length; i++) {
                        if ((this.EventHandlers[i].Code == event.Code) && (this.EventHandlers[i].Handler != null)) {
                            this.EventHandlers[i].Handler(event);
                        }
                    }
                }
            };
            exports_18("EventNotifier", EventNotifier);
        }
    };
});
System.register("Forms/Events/PointerEvents", ["Forms/Events/Events"], function (exports_19, context_19) {
    "use strict";
    var Events_1, PointerButtons, PointerEventTypes, PointerEvent;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (Events_1_1) {
                Events_1 = Events_1_1;
            }
        ],
        execute: function () {
            (function (PointerButtons) {
                PointerButtons[PointerButtons["None"] = 0] = "None";
                PointerButtons[PointerButtons["Left"] = 1] = "Left";
                PointerButtons[PointerButtons["Right"] = 2] = "Right";
                PointerButtons[PointerButtons["Middle"] = 3] = "Middle";
            })(PointerButtons || (PointerButtons = {}));
            exports_19("PointerButtons", PointerButtons);
            (function (PointerEventTypes) {
                PointerEventTypes[PointerEventTypes["PointerMove"] = 1] = "PointerMove";
                PointerEventTypes[PointerEventTypes["PointerDown"] = 2] = "PointerDown";
                PointerEventTypes[PointerEventTypes["PointerUp"] = 3] = "PointerUp";
                PointerEventTypes[PointerEventTypes["PointerClicked"] = 4] = "PointerClicked";
                PointerEventTypes[PointerEventTypes["PointerDoubleClicked"] = 5] = "PointerDoubleClicked";
                PointerEventTypes[PointerEventTypes["PointerEnter"] = 6] = "PointerEnter";
                PointerEventTypes[PointerEventTypes["PointerLeave"] = 7] = "PointerLeave";
                PointerEventTypes[PointerEventTypes["PointerDrag"] = 8] = "PointerDrag";
            })(PointerEventTypes || (PointerEventTypes = {}));
            exports_19("PointerEventTypes", PointerEventTypes);
            PointerEvent = class PointerEvent extends Events_1.Event {
                constructor(x, y, button, type) {
                    super(type);
                    this.X = x;
                    this.Y = y;
                    this.Button = button;
                }
            };
            exports_19("PointerEvent", PointerEvent);
        }
    };
});
System.register("Forms/Events/KeyboardEvents", ["Forms/Events/Events"], function (exports_20, context_20) {
    "use strict";
    var Events_2, KeyboardEventTypes, KeyboardState, KeyboardEvent;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (Events_2_1) {
                Events_2 = Events_2_1;
            }
        ],
        execute: function () {
            (function (KeyboardEventTypes) {
                KeyboardEventTypes[KeyboardEventTypes["KeyDown"] = 8] = "KeyDown";
                KeyboardEventTypes[KeyboardEventTypes["KeyUp"] = 9] = "KeyUp";
                KeyboardEventTypes[KeyboardEventTypes["KeyPressed"] = 10] = "KeyPressed";
            })(KeyboardEventTypes || (KeyboardEventTypes = {}));
            exports_20("KeyboardEventTypes", KeyboardEventTypes);
            ;
            KeyboardState = class KeyboardState {
            };
            exports_20("KeyboardState", KeyboardState);
            KeyboardEvent = class KeyboardEvent extends Events_2.Event {
                constructor(keyCode, type, state) {
                    super(type);
                    this.State = state;
                    this.KeyCode = keyCode;
                }
            };
            exports_20("KeyboardEvent", KeyboardEvent);
        }
    };
});
System.register("Forms/Events/ControlEvents", ["Forms/Events/Events", "Forms/Events/PointerEvents", "Forms/Events/KeyboardEvents"], function (exports_21, context_21) {
    "use strict";
    var Events_3, PointerEvents_1, KeyboardEvents_1, ControlEventTypes, KEYBOARD_EVENTS_BEGIN, KEYBOARD_EVENTS_END, POINTER_EVENTS_BEGIN, POINTER_EVENTS_END, ControlEvent, ControlPointerEvent, ControlKeyboardEvent, ControlResizeEvent, ControlMoveEvent, TextChangedEvent;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (Events_3_1) {
                Events_3 = Events_3_1;
            },
            function (PointerEvents_1_1) {
                PointerEvents_1 = PointerEvents_1_1;
            },
            function (KeyboardEvents_1_1) {
                KeyboardEvents_1 = KeyboardEvents_1_1;
            }
        ],
        execute: function () {
            (function (ControlEventTypes) {
                ControlEventTypes[ControlEventTypes["Resize"] = 0] = "Resize";
                ControlEventTypes[ControlEventTypes["Moved"] = 1] = "Moved";
                ControlEventTypes[ControlEventTypes["FocusLost"] = 2] = "FocusLost";
                ControlEventTypes[ControlEventTypes["Focused"] = 3] = "Focused";
                ControlEventTypes[ControlEventTypes["TextChanged"] = 4] = "TextChanged";
                ControlEventTypes[ControlEventTypes["Pointer"] = 5] = "Pointer";
                ControlEventTypes[ControlEventTypes["Keyboard"] = 6] = "Keyboard";
            })(ControlEventTypes || (ControlEventTypes = {}));
            exports_21("ControlEventTypes", ControlEventTypes);
            exports_21("KEYBOARD_EVENTS_BEGIN", KEYBOARD_EVENTS_BEGIN = KeyboardEvents_1.KeyboardEventTypes.KeyDown);
            exports_21("KEYBOARD_EVENTS_END", KEYBOARD_EVENTS_END = KeyboardEvents_1.KeyboardEventTypes.KeyPressed);
            exports_21("POINTER_EVENTS_BEGIN", POINTER_EVENTS_BEGIN = PointerEvents_1.PointerEventTypes.PointerMove);
            exports_21("POINTER_EVENTS_END", POINTER_EVENTS_END = PointerEvents_1.PointerEventTypes.PointerLeave);
            ControlEvent = class ControlEvent extends Events_3.Event {
                constructor(control, type) {
                    super(type);
                    this.Control = control;
                }
            };
            exports_21("ControlEvent", ControlEvent);
            ControlPointerEvent = class ControlPointerEvent extends ControlEvent {
                constructor(control, x, y, button, type) {
                    super(control, ControlEventTypes.Pointer);
                    this.PointerEvent = new PointerEvents_1.PointerEvent(x, y, button, type);
                }
            };
            exports_21("ControlPointerEvent", ControlPointerEvent);
            ControlKeyboardEvent = class ControlKeyboardEvent extends ControlEvent {
                constructor(control, type, keyCode, state) {
                    super(control, ControlEventTypes.Keyboard);
                    this.KeyboardEvent = new KeyboardEvents_1.KeyboardEvent(keyCode, type, state);
                }
            };
            exports_21("ControlKeyboardEvent", ControlKeyboardEvent);
            ;
            ControlResizeEvent = class ControlResizeEvent extends ControlEvent {
                constructor(control, oldSize, newSize) {
                    super(control, ControlEventTypes.Resize);
                    this.OldSize = oldSize;
                    this.NewSize = newSize;
                }
            };
            exports_21("ControlResizeEvent", ControlResizeEvent);
            ;
            ControlMoveEvent = class ControlMoveEvent extends ControlEvent {
                constructor(control, oldPosition, newPosition) {
                    super(control, ControlEventTypes.Moved);
                    this.OldPosition = oldPosition;
                    this.NewPosition = newPosition;
                }
            };
            exports_21("ControlMoveEvent", ControlMoveEvent);
            ;
            TextChangedEvent = class TextChangedEvent extends ControlEvent {
                constructor(control, oldText, newText) {
                    super(control, ControlEventTypes.TextChanged);
                    this.OldText = oldText;
                    this.NewText = newText;
                }
            };
            exports_21("TextChangedEvent", TextChangedEvent);
            ;
        }
    };
});
System.register("Forms/Controls/Control", ["Forms/Padding", "Forms/AnchorStyle", "Forms/DockStyle", "Forms/AlignmentStyle", "Renderer/Size", "Renderer/Rect", "Renderer/Position", "Forms/Events/ControlEvents", "Forms/Events/PointerEvents", "Forms/Events/Events", "Forms/Events/KeyboardEvents"], function (exports_22, context_22) {
    "use strict";
    var Padding_2, AnchorStyle_2, DockStyle_1, AlignmentStyle_2, Size_1, Rect_4, Position_1, ControlEvents_1, PointerEvents_2, Events_4, KeyboardEvents_2, ControlClasses, Control;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (Padding_2_1) {
                Padding_2 = Padding_2_1;
            },
            function (AnchorStyle_2_1) {
                AnchorStyle_2 = AnchorStyle_2_1;
            },
            function (DockStyle_1_1) {
                DockStyle_1 = DockStyle_1_1;
            },
            function (AlignmentStyle_2_1) {
                AlignmentStyle_2 = AlignmentStyle_2_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            },
            function (Rect_4_1) {
                Rect_4 = Rect_4_1;
            },
            function (Position_1_1) {
                Position_1 = Position_1_1;
            },
            function (ControlEvents_1_1) {
                ControlEvents_1 = ControlEvents_1_1;
            },
            function (PointerEvents_2_1) {
                PointerEvents_2 = PointerEvents_2_1;
            },
            function (Events_4_1) {
                Events_4 = Events_4_1;
            },
            function (KeyboardEvents_2_1) {
                KeyboardEvents_2 = KeyboardEvents_2_1;
            }
        ],
        execute: function () {
            exports_22("ControlClasses", ControlClasses = {
                Default: "default",
                Pressed: "pressed",
                Hover: "hover",
                Disabled: "disabled",
                Focused: "focused",
                Toggled: "toggled"
            });
            Control = class Control extends Events_4.EventNotifier {
                constructor(name) {
                    super();
                    this._Name = "";
                    this._LayoutSuspended = false;
                    this._UndergoingLayout = false;
                    this._Focusable = true;
                    this._Focused = false;
                    this._Visible = true;
                    this._Enabled = true;
                    this._ClipsChildren = true;
                    this._Parent = null;
                    this._Children = new Array();
                    this._FocusedChild = null;
                    this._PointerEventChild = null;
                    this._Margins = new Padding_2.Padding();
                    this._Padding = new Padding_2.Padding();
                    this._Anchor = new AnchorStyle_2.AnchorStyle();
                    this._Dock = DockStyle_1.DockStyle.None;
                    this._Alignment = AlignmentStyle_2.AlignmentStyle.None;
                    this._Size = new Size_1.Size();
                    this._Position = new Position_1.Position();
                    this._LayoutEngine = null;
                    this._ActiveControlClasses = new Array();
                    this._Name = name;
                }
                get Name() {
                    return this._Name;
                }
                get LayoutSuspended() {
                    return this._LayoutSuspended;
                }
                set LayoutSuspended(suspended) {
                    this._LayoutSuspended = suspended;
                }
                Paint(renderer) {
                    if (this._Visible == true) {
                        if (this._Style != null) {
                            this._Style.RenderStyle(renderer, this._ActiveControlClasses, this.AbsoluteBounds);
                        }
                        for (let i = 0; i < this._Children.length; i++) {
                            this._Children[i].Paint(renderer);
                        }
                    }
                }
                RequestPaint() {
                    if (this._PaintRequestCallback != null) {
                        this._PaintRequestCallback();
                    }
                }
                AddControlClass(controlClass) {
                    let classAlreadyApplied = this.IsControlClassSet(controlClass);
                    if (classAlreadyApplied == false) {
                        this._ActiveControlClasses.push(controlClass);
                        this.RequestPaint();
                    }
                }
                RemoveControlClass(controlClass) {
                    for (let i = 0; i < this._ActiveControlClasses.length; i++) {
                        if (this._ActiveControlClasses[i] == controlClass) {
                            this._ActiveControlClasses.splice(i, 1);
                            this.RequestPaint();
                            break;
                        }
                    }
                }
                IsControlClassSet(controlClass) {
                    for (let i = 0; i < this._ActiveControlClasses.length; i++) {
                        if (this._ActiveControlClasses[i] == controlClass) {
                            return true;
                        }
                    }
                    return false;
                }
                PerformLayout() {
                    if ((this._UndergoingLayout == false) && (this._LayoutSuspended == false)) {
                        if (this._LayoutEngine != null) {
                            this._UndergoingLayout = true;
                            this._LayoutEngine.PerformLayout(this);
                            this.RequestPaint();
                            this._UndergoingLayout = false;
                        }
                    }
                }
                get ChildCount() {
                    return this._Children.length;
                }
                GetChildAtIndex(index) {
                    return this._Children[index];
                }
                get Parent() {
                    return this._Parent;
                }
                AddChildControl(child) {
                    if (child.Parent == null) {
                        child._Parent = this;
                        this._Children.push(child);
                        this.PerformLayout();
                    }
                }
                RemoveChildControl(child) {
                    if (child.Parent == this) {
                        for (let i = 0; i < this._Children.length; i++) {
                            if (this._Children[i] == child) {
                                this.RemoveChildControlAtIndex(i);
                                break;
                            }
                        }
                    }
                }
                RemoveChildControlAtIndex(index) {
                    if ((index >= 0) && (index < this._Children.length)) {
                        this._Children[index]._Parent = null;
                        if (this._Children[index] == this._FocusedChild) {
                            this._FocusedChild = null;
                        }
                        this._Children.splice(index, 1);
                        this.PerformLayout();
                    }
                }
                SetPosition(x, y) {
                    if ((this._Position.X != x) || (this._Position.Y != y)) {
                        let moveData = new ControlEvents_1.ControlMoveEvent(this, this._Position, new Position_1.Position(x, y));
                        this._Position.X = x;
                        this._Position.Y = y;
                        this.NotifyEventSubscribers(moveData);
                    }
                }
                get Position() {
                    return this._Position;
                }
                SetSize(width, height) {
                    if ((this._Size.Width != width) || (this._Size.Height != height)) {
                        let resizeData = new ControlEvents_1.ControlResizeEvent(this, this._Size, new Size_1.Size(width, height));
                        this._Size.Width = width;
                        this._Size.Height = height;
                        if (this._Parent != null) {
                            this._Parent.PerformLayout();
                        }
                        else {
                            this.PerformLayout();
                        }
                        this.NotifyEventSubscribers(resizeData);
                    }
                }
                get Size() {
                    return this._Size;
                }
                get Anchor() {
                    return this._Anchor;
                }
                set Anchor(anchor) {
                    this._Dock = DockStyle_1.DockStyle.None;
                    this._Alignment = AlignmentStyle_2.AlignmentStyle.None;
                    this._Anchor = anchor;
                    if (this._Parent != null) {
                        this._Parent.PerformLayout();
                    }
                }
                get Dock() {
                    return this._Dock;
                }
                set Dock(dock) {
                    this._Anchor.ClearAnchorStyle();
                    this._Alignment = AlignmentStyle_2.AlignmentStyle.None;
                    this._Dock = dock;
                    if (this._Parent != null) {
                        this._Parent.PerformLayout();
                    }
                }
                get Alignment() {
                    return this._Alignment;
                }
                set Alignment(alignment) {
                    this._Dock = DockStyle_1.DockStyle.None;
                    this._Anchor.ClearAnchorStyle();
                    this._Alignment = alignment;
                    if (this._Parent != null) {
                        this._Parent.PerformLayout();
                    }
                }
                get Padding() {
                    return this._Padding;
                }
                set Padding(padding) {
                    this._Padding = padding;
                    this.PerformLayout();
                }
                get Margins() {
                    return this._Margins;
                }
                set Margins(margins) {
                    this._Margins = margins;
                    if (this._Parent != null) {
                        this._Parent.PerformLayout();
                    }
                }
                get Bounds() {
                    let bounds = new Rect_4.Rect(this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);
                    return bounds;
                }
                get AbsoluteBounds() {
                    if (this._Parent != null) {
                        let bounds = this._Parent.AbsoluteBounds;
                        return new Rect_4.Rect(bounds.X + this._Position.X, bounds.Y + this._Position.Y, this._Size.Width, this._Size.Height);
                    }
                    else {
                        return new Rect_4.Rect(this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);
                    }
                }
                ChildGotFocus(control) {
                    if (control != this._FocusedChild) {
                        if (this._FocusedChild != null) {
                            this._FocusedChild.Focused = false;
                        }
                        this._FocusedChild = control;
                    }
                    if (this._Focusable == true) {
                        if (this._Parent != null) {
                            this._Parent.ChildGotFocus(this);
                        }
                    }
                }
                get Focused() {
                    return this._Focused;
                }
                set Focused(focus) {
                    let oldFocus = this._Focused;
                    this._Focused = focus;
                    if (this._Focused == true) {
                        if (this._Focusable == true) {
                            this.AddControlClass(ControlClasses.Focused);
                            if (this._Parent != null) {
                                this._Parent.ChildGotFocus(this);
                            }
                            //defocus our children
                            for (let i = 0; i < this._Children.length; i++) {
                                this._Children[i].Focused = false;
                            }
                            if (oldFocus == false) {
                                let focusEvent = new Events_4.Event(ControlEvents_1.ControlEventTypes.Focused);
                                this.NotifyEventSubscribers(focusEvent);
                            }
                        }
                    }
                    else {
                        this.RemoveControlClass(ControlClasses.Focused);
                        //since we're no longer focused, our children cant be focused either 
                        for (let i = 0; i < this._Children.length; i++) {
                            this._Children[i].Focused = false;
                        }
                        if (oldFocus == true) {
                            let focusLostEvent = new Events_4.Event(ControlEvents_1.ControlEventTypes.FocusLost);
                            this.NotifyEventSubscribers(focusLostEvent);
                        }
                    }
                }
                set Focusable(focusable) {
                    this._Focusable = focusable;
                }
                get Focusable() {
                    return this._Focusable;
                }
                get Visible() {
                    return this._Visible;
                }
                get Enabled() {
                    return this._Enabled;
                }
                set Visible(visible) {
                    this._Visible = visible;
                    this.RequestPaint();
                }
                set Enabled(enabled) {
                    this._Enabled = enabled;
                    if (this._Enabled == false) {
                        this.AddControlClass(ControlClasses.Disabled);
                    }
                    else {
                        this.RemoveControlClass(ControlClasses.Disabled);
                    }
                }
                GetIntersectingChild(position) {
                    let intersectingChild = null;
                    for (let i = this._Children.length - 1; i >= 0; i--) {
                        intersectingChild = this._Children[i].GetIntersectingChild(position);
                        if (intersectingChild != null) {
                            return intersectingChild;
                        }
                    }
                    if (this.AbsoluteBounds.InsideRect(position.X, position.Y)) {
                        intersectingChild = this;
                    }
                    return intersectingChild;
                }
                HandleEvent(event) {
                    if (this._Enabled == true) {
                        let events = new Array();
                        if ((event.Code >= ControlEvents_1.KEYBOARD_EVENTS_BEGIN) && (event.Code <= ControlEvents_1.KEYBOARD_EVENTS_END)) {
                            //keyboard events are directed to child controls that are focused, there must be a focus chain built whenever
                            //a control gets focus, if none exists, this control consumes the event							
                            if (this._FocusedChild != null) {
                                this._FocusedChild.HandleEvent(event);
                            }
                            else {
                                this.HandleKeyboardEvent(event);
                            }
                        }
                        else if ((event.Code >= ControlEvents_1.POINTER_EVENTS_BEGIN) && (event.Code <= ControlEvents_1.POINTER_EVENTS_END)) {
                            //mouse events go to the control directly under the mouse at the time the event was fired, 
                            //if the mouse isnt above any child control, this control will consume it
                            let data = event;
                            let intersect = this.GetIntersectingChild(new Position_1.Position(data.PointerEvent.X, data.PointerEvent.Y));
                            //handle the mouse leave and enter events
                            if (data.PointerEvent.Code == PointerEvents_2.PointerEventTypes.PointerMove) {
                                this.HandleChildPointerEnterEvent(intersect, data);
                                this.HandleChildPointerLeaveEvent(intersect, data);
                            }
                            if ((intersect != null) && (intersect != this)) {
                                intersect.HandleEvent(event);
                            }
                            else {
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
                                for (let i = 0; i < events.length; i++) {
                                    this.HandleEvent(events[i]);
                                }
                            }
                            this._PointerEventChild = intersect;
                        }
                    }
                }
                HandleChildPointerLeaveEvent(intersect, event) {
                    event.PointerEvent.Code = PointerEvents_2.PointerEventTypes.PointerLeave;
                    if (this._PointerEventChild) {
                        if (intersect == null) {
                            //we've moved the pointer over the control after leaving the controls child
                            this._PointerEventChild.HandlePointerEvent(event);
                        }
                        else if ((intersect != null) && (intersect != this._PointerEventChild)) {
                            //we've moved the pointer from one control to another, tell the old control about the pointer leave
                            this._PointerEventChild.HandlePointerEvent(event);
                        }
                    }
                    event.PointerEvent.Code = PointerEvents_2.PointerEventTypes.PointerMove;
                }
                HandleChildPointerEnterEvent(intersect, event) {
                    event.PointerEvent.Code = PointerEvents_2.PointerEventTypes.PointerEnter;
                    if ((intersect != null) && (intersect != this)) {
                        if ((this._PointerEventChild != intersect) || (this._PointerEventChild == null)) {
                            //we've moved onto a new control
                            intersect.HandlePointerEvent(event);
                        }
                    }
                    event.PointerEvent.Code = PointerEvents_2.PointerEventTypes.PointerMove;
                }
                HandlePointerEvent(event) {
                    if (this._Enabled == true) {
                        switch (event.PointerEvent.Code) {
                            case PointerEvents_2.PointerEventTypes.PointerClicked:
                                this.HandleOnPointerClicked(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerDoubleClicked:
                                this.HandleOnPointerDoubleClicked(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerDown:
                                this.HandleOnPointerDown(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerEnter:
                                this.HandleOnPointerEnter(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerLeave:
                                this.HandleOnPointerLeave(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerMove:
                                this.HandleOnPointerMove(event);
                                break;
                            case PointerEvents_2.PointerEventTypes.PointerUp:
                                this.HandleOnPointerUp(event);
                                break;
                            default:
                                break;
                        }
                    }
                }
                HandleKeyboardEvent(event) {
                    if (this._Enabled == true) {
                        switch (event.KeyboardEvent.Code) {
                            case KeyboardEvents_2.KeyboardEventTypes.KeyDown:
                                this.HandleOnKeyDown(event);
                                break;
                            case KeyboardEvents_2.KeyboardEventTypes.KeyPressed:
                                this.HandleOnKeyPressed(event);
                                break;
                            case KeyboardEvents_2.KeyboardEventTypes.KeyUp:
                                this.HandleOnKeyUp(event);
                                break;
                            default:
                                break;
                        }
                    }
                }
                HandleOnPointerClicked(event) {
                    this.NotifyEventSubscribers(event);
                }
                HandleOnPointerDoubleClicked(event) {
                    this.NotifyEventSubscribers(event);
                }
                HandleOnPointerDown(event) {
                    this.NotifyEventSubscribers(event);
                    if (event.PointerEvent.Button == PointerEvents_2.PointerButtons.Left) {
                        this.AddControlClass(ControlClasses.Pressed);
                    }
                }
                HandleOnPointerEnter(event) {
                    this.NotifyEventSubscribers(event);
                }
                HandleOnPointerLeave(event) {
                    this.NotifyEventSubscribers(event);
                    if ((this._PointerEventChild != null) && (this._PointerEventChild != this)) {
                        this._PointerEventChild.HandleOnPointerLeave(event);
                    }
                    this.RemoveControlClass(ControlClasses.Hover);
                    this.RemoveControlClass(ControlClasses.Pressed);
                }
                HandleOnPointerMove(event) {
                    this.NotifyEventSubscribers(event);
                    if (event.PointerEvent.Button == PointerEvents_2.PointerButtons.None) {
                        this.AddControlClass(ControlClasses.Hover);
                        this.RemoveControlClass(ControlClasses.Default);
                    }
                }
                HandleOnPointerUp(event) {
                    this.NotifyEventSubscribers(event);
                    this.RemoveControlClass(ControlClasses.Pressed);
                }
                HandleOnKeyDown(event) {
                    this.NotifyEventSubscribers(event);
                }
                HandleOnKeyPressed(event) {
                    this.NotifyEventSubscribers(event);
                }
                HandleOnKeyUp(event) {
                    this.NotifyEventSubscribers(event);
                }
                set LayoutEngine(engine) {
                    this._LayoutEngine = engine;
                    this.PerformLayout();
                }
                set Style(style) {
                    this._Style = style;
                    this.UpdateControlFromStyle();
                }
                ApplyControlProperties(properties) {
                    for (let i = 0; i < properties.length; i++) {
                        if (properties[i].Name == "Size") {
                            let size = JSON.parse(properties[i].Value);
                            this.SetSize(size.Width, size.Height);
                        }
                        else if (properties[i].Name == "Position") {
                            let position = JSON.parse(properties[i].Value);
                            this.SetPosition(position.X, position.Y);
                        }
                        else if (properties[i].Name == "Dock") {
                            this.Dock = parseInt(properties[i].Value);
                        }
                        else if (properties[i].Name == "ControlAlignment") {
                            this.Alignment = parseInt(properties[i].Value);
                        }
                        else if (properties[i].Name == "Anchor") {
                            this.Anchor = JSON.parse(properties[i].Value);
                        }
                        else if (properties[i].Name == "Padding") {
                            this.Padding = JSON.parse(properties[i].Value);
                        }
                        else if (properties[i].Name == "Margin") {
                            this.Margins = JSON.parse(properties[i].Value);
                        }
                    }
                }
                /// <summary>
                /// Will update the properties of the control (size, dock, anchor etc...) from it's style
                /// </summary>
                UpdateControlFromStyle() {
                    if (this._Style != null) {
                        //the properties for the current state
                        for (let i = 0; i < this._ActiveControlClasses.length; i++) {
                            let styleClass = this._Style.FindStyleClass(this._ActiveControlClasses[i]);
                            if (styleClass) {
                                this.ApplyControlProperties(styleClass.Properties);
                            }
                        }
                    }
                }
                SetPaintRequestCallback(callback, recursive) {
                    this._PaintRequestCallback = callback;
                    if (recursive == true) {
                        for (let i = 0; i < this._Children.length; i++) {
                            this._Children[i].SetPaintRequestCallback(callback, recursive);
                        }
                    }
                }
                Tick(time) {
                    for (let i = 0; i < this._Children.length; i++) {
                        this._Children[i].Tick(time);
                    }
                }
            };
            exports_22("Control", Control);
        }
    };
});
System.register("KuumbaForms", [], function (exports_23, context_23) {
    "use strict";
    var InitialisationOptions, KuumbaForms;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
            InitialisationOptions = class InitialisationOptions {
                constructor() {
                    this.Maximized = true;
                    this.Renderer = null;
                    this.RootControl = null;
                }
            };
            exports_23("InitialisationOptions", InitialisationOptions);
            KuumbaForms = class KuumbaForms {
                constructor(options) {
                    this._Options = options;
                    this.Initialise();
                }
                Initialise() {
                    let opts = this._Options;
                    if (opts.Maximized == true) {
                        opts.Element.width = window.innerWidth;
                        opts.Element.height = window.innerHeight;
                    }
                }
                Paint() {
                    let requestId = requestAnimationFrame(this.Paint);
                    try {
                        this._Options.RootControl.Paint(this._Options.Renderer);
                    }
                    catch (ex) {
                        cancelAnimationFrame(requestId);
                        console.error("Kuumba: " + ex);
                    }
                }
                BeginAnimationLoop() {
                    this.Paint();
                }
            };
            exports_23("KuumbaForms", KuumbaForms);
        }
    };
});
System.register("Forms/Controls/TextControl", ["Forms/Controls/Control", "Forms/AlignmentStyle", "Renderer/Rect", "Forms/Events/ControlEvents"], function (exports_24, context_24) {
    "use strict";
    var Control_1, AlignmentStyle_3, Rect_5, ControlEvents_2, TextControl;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (Control_1_1) {
                Control_1 = Control_1_1;
            },
            function (AlignmentStyle_3_1) {
                AlignmentStyle_3 = AlignmentStyle_3_1;
            },
            function (Rect_5_1) {
                Rect_5 = Rect_5_1;
            },
            function (ControlEvents_2_1) {
                ControlEvents_2 = ControlEvents_2_1;
            }
        ],
        execute: function () {
            TextControl = class TextControl extends Control_1.Control {
                constructor(name) {
                    super(name);
                }
                CalculateTextBounds(renderer) {
                    if (this.LayoutSuspended == false) {
                        let bounds = renderer.GetTextSize(this._Text, this._Font);
                        let heightOffset = this.Padding.Top;
                        let horizontalOffset = this.Padding.Left;
                        if ((this._TextAlignment == AlignmentStyle_3.AlignmentStyle.BottomCenter) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.BottomLeft) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.BottomRight)) {
                            heightOffset += this.Size.Height - bounds.Height;
                        }
                        else if ((this._TextAlignment == AlignmentStyle_3.AlignmentStyle.MiddleCenter) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.MiddleLeft) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.MiddleRight)) {
                            heightOffset += (this.Size.Height * 0.5) - (bounds.Height * 0.5);
                        }
                        if (this._WrapText == false) {
                            //we need to adjust horizontal offset if we're center or right aligning on single line text box
                            if ((this._TextAlignment == AlignmentStyle_3.AlignmentStyle.BottomCenter) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.MiddleCenter) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.TopCenter)) {
                                horizontalOffset += (this.Size.Width * 0.5) - (bounds.Width * 0.5);
                            }
                            else if ((this._TextAlignment == AlignmentStyle_3.AlignmentStyle.BottomRight) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.MiddleRight) || (this._TextAlignment == AlignmentStyle_3.AlignmentStyle.TopRight)) {
                                heightOffset += this.Size.Height * -1;
                            }
                        }
                        this._TextOffset.X = this.Position.X + horizontalOffset;
                        this._TextOffset.Y = this.Position.X + heightOffset;
                    }
                }
                set Text(text) {
                    if (this._Text != text) {
                        let event = new ControlEvents_2.TextChangedEvent(this, this._Text, text);
                        this._Text = text;
                        this.NotifyEventSubscribers(event);
                        this.RequestPaint();
                    }
                }
                get Text() {
                    return this._Text;
                }
                Paint(renderer) {
                    super.Paint(renderer);
                    //now render the text
                    this.CalculateTextBounds(renderer);
                    let bounds = this.AbsoluteBounds;
                    let textBounds = new Rect_5.Rect(bounds.X + this._TextOffset.X, bounds.Y + this._TextOffset.Y, this.Size.Width, this.Size.Height);
                    renderer.DrawText(this._Text, textBounds, this._Font, this._TextBackground, this._TextStroke);
                }
                ApplyControlProperties(properties) {
                    super.ApplyControlProperties(properties);
                    for (let i = 0; i < properties.length; i++) {
                        if (properties[i].Name == "TextAlignment") {
                            this._TextAlignment = parseInt(properties[i].Value);
                        }
                        else if (properties[i].Name == "TextStroke") {
                            this._TextStroke = JSON.parse(properties[i].Value);
                        }
                        else if (properties[i].Name == "TextBackground") {
                            this._TextBackground = JSON.parse(properties[i].Value);
                        }
                        else if (properties[i].Name == "Font") {
                            this._Font = JSON.parse(properties[i].Value);
                        }
                        else if (properties[i].Name == "WrapText") {
                            this._WrapText = JSON.parse(properties[i].Value);
                        }
                    }
                }
            };
            exports_24("TextControl", TextControl);
        }
    };
});
System.register("Forms/Controls/EditableTextControl", ["Forms/Controls/TextControl", "Renderer/Rect"], function (exports_25, context_25) {
    "use strict";
    var TextControl_1, Rect_6, TextMode, TextState, EditableTextControl;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (TextControl_1_1) {
                TextControl_1 = TextControl_1_1;
            },
            function (Rect_6_1) {
                Rect_6 = Rect_6_1;
            }
        ],
        execute: function () {
            (function (TextMode) {
                TextMode[TextMode["Character"] = 0] = "Character";
                TextMode[TextMode["Space"] = 1] = "Space";
            })(TextMode || (TextMode = {}));
            TextState = class TextState {
                constructor(text, caretLine, caretColumn) {
                    this.Text = text;
                    this.CaretColumn = caretLine;
                    this.CaretLine = caretColumn;
                }
            };
            exports_25("TextState", TextState);
            EditableTextControl = class EditableTextControl extends TextControl_1.TextControl {
                constructor(name) {
                    super(name);
                    this._CaptureHistory = true;
                    this._TextSelectionBegin = -1;
                    this._TextSelectionEnd = -1;
                    this._TextSelectionBounds = new Array();
                    this._TextSelectionStyle = null;
                    this._CaretStyle = null;
                    this._CaretPosition = 0;
                    this._CaretLine = 0;
                    this._CaretColumn = 0;
                    this._MaxLength = 0;
                    this._MaxUndoStates = 50;
                    this._UndoStack = new Array();
                    this._RedoStack = new Array();
                    this._CaretVisible = false;
                    this._CaretBounds = new Rect_6.Rect();
                    this._PreviousTime = 0;
                }
                UpdateCaretCoordinates() {
                    if (this._WrapText == false) {
                        this._CaretLine = 0;
                        this._CaretColumn = this._CaretPosition;
                    }
                    else {
                        //first get the line the caret is in						
                        let textArray = this._Text;
                        let line = 0;
                        let column = 0;
                        let lastLineBegin = 0;
                        for (let i = 0; i < this._CaretPosition; i++) {
                            if (textArray[i] == '\n') {
                                line += 1;
                                lastLineBegin = i + 1;
                            }
                        }
                        column = this._CaretPosition - lastLineBegin;
                        this._CaretLine = line;
                        this._CaretColumn = column;
                    }
                }
                UpdateCaretLineAndColumn() {
                    if (this._WrapText == false) {
                        this._CaretLine = 0;
                        this._CaretColumn = this._CaretPosition;
                    }
                    else {
                        //first get the line the caret is in						
                        let textArray = this._Text;
                        let line = 0;
                        let column = 0;
                        let lastLineBegin = 0;
                        for (let i = 0; i < this._CaretPosition; i++) {
                            if (textArray[i] == '\n') {
                                line += 1;
                                lastLineBegin = i + 1;
                            }
                        }
                        column = this._CaretPosition - lastLineBegin;
                        this._CaretLine = line;
                        this._CaretColumn = column;
                    }
                }
                HandleOnKeyDown(event) {
                    switch (event.KeyboardEvent.KeyCode) {
                        case "KeyLeft":
                            if (this._CaretPosition > 0) {
                                if (event.KeyboardEvent.State.LeftCtrl == true) {
                                    this._CaretPosition = this.GetPreviousWordIndex(this._CaretPosition - 1);
                                }
                                else {
                                    this._CaretPosition -= 1;
                                }
                                if (event.KeyboardEvent.State.LeftShift == true) {
                                    let selectStart = (this._TextSelectionBegin == -1) ? this._CaretPosition + 1 : this._TextSelectionBegin;
                                    let selectEnd = (this._TextSelectionEnd == -1) ? this._CaretPosition : this._TextSelectionEnd;
                                    this.SetTextSelectionRange(selectStart, selectEnd);
                                }
                                this.SetCaretPosition(this._CaretPosition);
                            }
                            break;
                        case "KeyRight":
                            if (event.KeyboardEvent.State.LeftCtrl == true) {
                                this._CaretPosition = this.GetNextWordIndex(this._CaretPosition);
                            }
                            else {
                                this._CaretPosition += 1;
                            }
                            if (event.KeyboardEvent.State.LeftShift == true) {
                                let selectStart = (this._TextSelectionBegin == -1) ? this._CaretPosition : this._TextSelectionBegin;
                                let selectEnd = (this._TextSelectionEnd == -1) ? this._CaretPosition : this._TextSelectionEnd;
                                this.SetTextSelectionRange(selectStart, selectEnd);
                            }
                            this.SetCaretPosition(this._CaretPosition);
                            break;
                        case "KeyBackspace":
                            if ((this._Text.length > 0) && (this._CaretPosition > 0)) {
                                let currentText = this._Text;
                                if (event.KeyboardEvent.State.LeftCtrl == true) {
                                    let stoppingPoint = this.GetPreviousWordIndex(this._CaretPosition - 1);
                                    //now go from the caret position to the stopping point and delete the text
                                    let startString = stoppingPoint > 0 ? currentText.substr(0, stoppingPoint) : "";
                                    let endString = currentText.substr(this._CaretPosition);
                                    this.SetCaretPosition(stoppingPoint);
                                    this.Text = (startString + endString);
                                }
                                else {
                                    //currentText.
                                    //System::String::RemoveAt(currentText, this._CaretPosition - 1);
                                    this.SetCaretPosition(this._CaretPosition - 1);
                                    this._Text = currentText;
                                }
                            }
                            break;
                        case "KeyDelete":
                            if ((this._Text.length >= 0) && (this._CaretPosition < this._Text.length)) {
                                let currentText = this._Text;
                                if (event.KeyboardEvent.State.LeftCtrl == true) {
                                    let stoppingPoint = this.GetNextWordIndex(this._CaretPosition);
                                    //now go from the caret position to the stopping point and delete the text
                                    let startString = this._CaretPosition > 0 ? currentText.substr(0, this._CaretPosition) : "";
                                    let endString = ((stoppingPoint + 1) > currentText.length - 1) ? "" : currentText.substr(stoppingPoint + 1);
                                    currentText = startString + endString;
                                }
                                else {
                                    //System::String::RemoveAt(currentText, this._CaretPosition);
                                }
                                this.Text = currentText;
                            }
                            break;
                        case "KeyHome":
                            this.SetCaretPosition(0);
                            break;
                        case "KeyEnd":
                            this.SetCaretPosition(this._Text.length == 0 ? 0 : this._Text.length);
                            break;
                        default:
                            break;
                    }
                    this.HandleOnKeyDown(event);
                }
                HandleOnKeyPressed(event) {
                    if ((event.KeyboardEvent.KeyCode != "KeyBackspace") && (event.KeyboardEvent.KeyCode != "KeyDelete")) {
                        if ((event.KeyboardEvent.KeyCode == "KeyZ") && (event.KeyboardEvent.State.LeftCtrl == true)) {
                            this.Undo();
                        }
                        else if ((event.KeyboardEvent.KeyCode == "KeyY") && (event.KeyboardEvent.State.LeftCtrl == true)) {
                            this.Redo();
                        }
                        else {
                            if ((event.KeyboardEvent.KeyCode == "KeyEnter") && (this._WrapText == false)) {
                                //do nothing
                                this.HandleOnKeyPressed(event);
                                return;
                            }
                            let text = this._Text;
                            // System::String::Insert(text, CaretPosition, std::to_string((char)event.KeyboardEvent->KeyboardState.Key));
                            this.Text = text;
                            this.SetCaretPosition(this._CaretPosition + 1);
                        }
                    }
                    this.HandleOnKeyPressed(event);
                }
                SetCaretPosition(position) {
                    this._CaretPosition = position;
                    this.UpdateCaretLineAndColumn();
                    this.UpdateCaretCoordinates();
                }
                SetCaretLineAndColumn(line, column) {
                    let textArray = this._Text;
                    let textLength = textArray.length;
                    let lineCount = 0;
                    let lastLineBegin = 0;
                    let currentPosition = 0;
                    for (let i = 0; i < textLength; i++) {
                        if (textArray[i] == '\n') {
                            lineCount += 1;
                            lastLineBegin = i + 1;
                        }
                        currentPosition += 1;
                        if (lineCount >= line) {
                            break;
                        }
                    }
                    this._CaretLine = lineCount;
                    let position = lastLineBegin + column;
                    if (position > textLength) {
                        this._CaretPosition = textLength;
                    }
                    else {
                        this._CaretPosition = position;
                    }
                    this._CaretColumn = this._CaretPosition - currentPosition;
                    this.UpdateCaretCoordinates();
                }
                GetPreviousWordIndex(position) {
                    let text = this._Text;
                    let stoppingPoint = position;
                    if ((text.length <= 0) || (position <= 0)) {
                        return 0;
                    }
                    if (position > text.length - 1) {
                        return text.length - 1;
                    }
                    let currentMode = text[position] == ' ' ? TextMode.Space : TextMode.Character; //are we in character or space mode
                    let previousMode = currentMode;
                    for (let i = position - 1; i >= 0; i--) {
                        if (i == 0) {
                            stoppingPoint = 0;
                            break;
                        }
                        currentMode = text[i] == ' ' ? TextMode.Space : TextMode.Character;
                        if (currentMode != previousMode) {
                            break;
                        }
                        stoppingPoint--;
                        previousMode = currentMode;
                    }
                    return stoppingPoint;
                }
                GetNextWordIndex(position) {
                    let text = this._Text;
                    let stoppingPoint = position + 1;
                    if (text.length <= 0) {
                        return 0;
                    }
                    if (position > text.length - 1) {
                        return text.length - 1;
                    }
                    let currentMode = text[position] == ' ' ? TextMode.Space : TextMode.Character; //are we in character or space mode
                    let previousMode = currentMode;
                    for (let i = position + 1; i < text.length; i++) {
                        if (i == text.length - 1) {
                            stoppingPoint = text.length;
                            break;
                        }
                        currentMode = text[i] == ' ' ? TextMode.Space : TextMode.Character;
                        if (currentMode != previousMode) {
                            break;
                        }
                        stoppingPoint++;
                        previousMode = currentMode;
                    }
                    return stoppingPoint;
                }
                set Text(text) {
                    let currentText = this._Text;
                    if (currentText != text) {
                        if (this._CaptureHistory == true) {
                            this._UndoStack.push(new TextState(currentText, this._CaretLine, this._CaretColumn));
                            this._RedoStack.splice(0);
                            if (this._UndoStack.length > this._MaxUndoStates) {
                                this._UndoStack.splice(0, 1);
                            }
                        }
                        this._Text = text;
                    }
                }
                Undo() {
                    if (this._UndoStack.length > 0) {
                        //save the current state to the redo stack
                        this._RedoStack.push(new TextState(this._Text, this._CaretLine, this._CaretColumn));
                        let state = this._UndoStack.pop();
                        this.SetCaretLineAndColumn(state.CaretLine, state.CaretColumn);
                        this._Text = state.Text;
                    }
                }
                Redo() {
                    if (this._RedoStack.length > 0) {
                        //save the current state to the undo stack
                        this._UndoStack.push(new TextState(this._Text, this._CaretLine, this._CaretColumn + 1));
                        let state = this._RedoStack.pop();
                        this.SetCaretLineAndColumn(state.CaretLine, state.CaretColumn + 1);
                        this._Text = state.Text;
                    }
                }
                set CaretStyle(style) {
                    this._CaretStyle = style;
                }
                set TextSelectionStyle(style) {
                    this._TextSelectionStyle = style;
                }
                Paint(renderer) {
                    super.Paint(renderer);
                    if (this._CaretVisible == true) {
                        if (this._CaretStyle != null) {
                            this._CaretStyle.RenderStyleClassAtIndex(renderer, 0, this._CaretBounds);
                        }
                    }
                    if ((this._TextSelectionBegin != -1) && (this._TextSelectionEnd != -1)) {
                        if (this._TextSelectionStyle != null) {
                            for (let i = 0; i < this._TextSelectionBounds.length; i++) {
                                this._TextSelectionStyle.RenderStyleClassAtIndex(renderer, 0, this._TextSelectionBounds[0]);
                            }
                        }
                    }
                }
                Tick(time) {
                    if (this.Focused == true) {
                        let difference = time - this._PreviousTime;
                        if ((difference / 1000) > 6000) {
                            this._PreviousTime = time;
                            this._CaretVisible = !this._CaretVisible;
                            this.RequestPaint();
                        }
                    }
                    else {
                        this._CaretVisible = false;
                    }
                    super.Tick(time);
                }
                SetSize(width, height) {
                    super.SetSize(width, height);
                    this._CaretBounds.Width = width;
                    this._CaretBounds.Height = height;
                }
                SetPosition(x, y) {
                    super.SetPosition(x, y);
                    this._CaretBounds.X = x;
                    this._CaretBounds.Y = y;
                }
                SetTextSelectionRange(begin, end) {
                    if ((begin >= 0) && (begin < end) && (begin < this._Text.length) && (end > 0) && (end < this._Text.length)) {
                        this._TextSelectionBegin = begin;
                        this._TextSelectionEnd = end;
                        this._TextSelectionBounds.splice(0);
                        /*Framework::Point StartPosition = Text::FontManager::GetInstance()->GetCharacterPosition(TextGraphic.GetText(), TextSelectionBegin, TextGraphic.GetFont());
                        Framework::Point EndPosition = Text::FontManager::GetInstance()->GetCharacterPosition(TextGraphic.GetText(), TextSelectionEnd, TextGraphic.GetFont());
            
                        float X1 = this->AbsolutePosition.X + StartPosition.X;
                        float X2 = this->AbsolutePosition.X + EndPosition.X;
                                                
                        TextSelectionBounds.push_back(Framework::Rect(X1, AbsolutePosition.Y, (X2) - X1 , Size.Height));*/
                    }
                }
                ClearTextSelection() {
                    this._TextSelectionBegin = -1;
                    this._TextSelectionEnd = -1;
                    this._TextSelectionBounds.splice(0);
                }
            };
            exports_25("EditableTextControl", EditableTextControl);
        }
    };
});
System.register("Forms/Layouts/HorizontalLayoutEngine", ["Renderer/Position"], function (exports_26, context_26) {
    "use strict";
    var Position_2, HorizontalLayoutControlAlignment, HorizontalLayoutEngine;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (Position_2_1) {
                Position_2 = Position_2_1;
            }
        ],
        execute: function () {
            (function (HorizontalLayoutControlAlignment) {
                HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Top"] = 0] = "Top";
                HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Middle"] = 1] = "Middle";
                HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Bottom"] = 2] = "Bottom";
            })(HorizontalLayoutControlAlignment || (HorizontalLayoutControlAlignment = {}));
            exports_26("HorizontalLayoutControlAlignment", HorizontalLayoutControlAlignment);
            ;
            HorizontalLayoutEngine = class HorizontalLayoutEngine {
                constructor() {
                    this.HeightToContents = true;
                    this.HeightToParent = false;
                    this.WidthToContents = false;
                    this.RightToLeft = false;
                    this.SpacerSize = 0.0;
                    this.ControlAlignment = HorizontalLayoutControlAlignment.Top;
                }
                GetLargestChildHeight(control) {
                    let maxHeight = 0.0;
                    for (let i = 0; i < control.ChildCount; i++) {
                        let size = control.GetChildAtIndex(i).Size;
                        let margins = control.Margins;
                        if ((size.Height + margins.VerticalPadding) > maxHeight) {
                            maxHeight = size.Height + margins.VerticalPadding;
                        }
                    }
                    return maxHeight;
                }
                PerformLayout(control) {
                    let parentBounds = control.Bounds;
                    let padding = control.Padding;
                    parentBounds.X += padding.Left;
                    parentBounds.Y += padding.Top;
                    parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);
                    parentBounds.Height = parentBounds.Height - (padding.VerticalPadding);
                    let currentWidthOffset = (this.RightToLeft == false) ? 0.0 : parentBounds.Width;
                    let height = parentBounds.Height;
                    for (let i = 0; i < control.ChildCount; i++) {
                        let previousChild = null;
                        let child = control.GetChildAtIndex(i);
                        let margins = child.Margins;
                        let size = child.Size;
                        let newPosition = new Position_2.Position();
                        let newSize = size;
                        currentWidthOffset = (this.RightToLeft == false) ? currentWidthOffset + margins.Left : currentWidthOffset - margins.Left;
                        newPosition.X = (this.RightToLeft == false) ? parentBounds.X + currentWidthOffset : (parentBounds.X + currentWidthOffset) - (padding.Right + size.Width);
                        //calculate Y position based on alignment set for layout
                        switch (this.ControlAlignment) {
                            case HorizontalLayoutControlAlignment.Top:
                                newPosition.Y = parentBounds.Y + margins.Top;
                                break;
                            case HorizontalLayoutControlAlignment.Middle:
                                newPosition.Y = parentBounds.Y + ((parentBounds.Height * 0.5) - (size.Height * 0.5));
                                break;
                            case HorizontalLayoutControlAlignment.Bottom:
                                newPosition.Y = (parentBounds.Y + parentBounds.Height) - size.Height - margins.Bottom;
                                break;
                            default:
                                break;
                        }
                        if ((this.HeightToParent == true) && (this.HeightToContents == false)) {
                            newSize.Height = parentBounds.Height - (margins.VerticalPadding);
                        }
                        else if ((this.HeightToParent == false) && (this.HeightToContents == true)) {
                            height = this.GetLargestChildHeight(control);
                            control.SetSize(control.Size.Width, height + padding.VerticalPadding);
                        }
                        else if ((this.HeightToParent == true) && (this.HeightToContents == true)) {
                            height = this.GetLargestChildHeight(control);
                            //adjust all child controls
                            for (let j = 0; j < control.ChildCount; j++) {
                                if (j != i) {
                                    let childSize = control.GetChildAtIndex(j).Size;
                                    control.GetChildAtIndex(j).SetSize(childSize.Width, height);
                                }
                            }
                            control.SetSize(control.Size.Width, height + padding.VerticalPadding);
                        }
                        if (this.RightToLeft == false) {
                            currentWidthOffset = currentWidthOffset + this.SpacerSize + size.Width + margins.Right + ((previousChild != null) ? previousChild.Margins.Left : 0.0);
                        }
                        else {
                            currentWidthOffset = currentWidthOffset - (size.Width + this.SpacerSize + margins.Right + ((previousChild != null) ? previousChild.Margins.Left : 0.0));
                        }
                        child.SetSize(newSize.Width, newSize.Height);
                        child.SetPosition(newPosition.X, newPosition.Y);
                        child.PerformLayout();
                        previousChild = child;
                    }
                    if (this.WidthToContents == true) {
                        control.SetSize(currentWidthOffset + padding.HorizontalPadding, height + padding.VerticalPadding);
                    }
                }
            };
            exports_26("HorizontalLayoutEngine", HorizontalLayoutEngine);
        }
    };
});
System.register("Forms/Layouts/StandardLayoutEngine", ["Forms/AlignmentStyle", "Forms/DockStyle"], function (exports_27, context_27) {
    "use strict";
    var AlignmentStyle_4, DockStyle_2, StandardLayoutEngine;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [
            function (AlignmentStyle_4_1) {
                AlignmentStyle_4 = AlignmentStyle_4_1;
            },
            function (DockStyle_2_1) {
                DockStyle_2 = DockStyle_2_1;
            }
        ],
        execute: function () {
            StandardLayoutEngine = class StandardLayoutEngine {
                CalculateAnchorStyleBounds(control, parentBounds) {
                    let anchor = control.Anchor;
                    let bounds = control.Bounds;
                    let newBounds = anchor.GetBounds(bounds, parentBounds);
                    control.SetSize(newBounds.Width, newBounds.Height);
                    control.SetPosition(newBounds.X, newBounds.Y);
                }
                CalculateAlignmentStyleBounds(control, parentBounds, padding) {
                    let alignment = control.Alignment;
                    let margins = control.Margins;
                    let bounds = control.Bounds;
                    let newBounds = AlignmentStyle_4.GetAlignmentStyleBounds(alignment, bounds, margins, parentBounds, padding);
                    control.SetPosition(newBounds.X, newBounds.Y);
                }
                CalculateDockStyleBounds(control, availableBounds) {
                    let currentBounds = control.Bounds;
                    let margins = control.Margins;
                    let dock = control.Dock;
                    let newBounds = DockStyle_2.GetDockStyleBounds(dock, availableBounds, currentBounds, margins);
                    control.SetSize(newBounds.Width, newBounds.Height);
                    control.SetPosition(newBounds.X, newBounds.Y);
                }
                PerformLayout(control) {
                    let parentBounds = control.Bounds;
                    let availableBounds = parentBounds;
                    let padding = control.Padding;
                    availableBounds.X += padding.Left;
                    availableBounds.Y += padding.Top;
                    availableBounds.Height = parentBounds.Height - padding.Bottom - padding.Top;
                    availableBounds.Width = parentBounds.Width - padding.Right - padding.Left;
                    for (let i = 0; i < control.ChildCount; i++) {
                        let child = control.GetChildAtIndex(i);
                        let currentBounds = child.Bounds;
                        let newBounds = currentBounds;
                        if (child.Anchor.HasAnchorStyle() == true) {
                            this.CalculateAnchorStyleBounds(child, parentBounds);
                        }
                        else if (child.Alignment != AlignmentStyle_4.AlignmentStyle.None) {
                            this.CalculateAlignmentStyleBounds(child, parentBounds, padding);
                        }
                        else if (child.Dock != DockStyle_2.DockStyle.None) {
                            this.CalculateDockStyleBounds(child, availableBounds);
                        }
                        child.PerformLayout();
                    }
                }
            };
            exports_27("StandardLayoutEngine", StandardLayoutEngine);
        }
    };
});
System.register("Forms/Layouts/VerticalLayoutEngine", ["Renderer/Position"], function (exports_28, context_28) {
    "use strict";
    var Position_3, VerticalLayoutEngine;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [
            function (Position_3_1) {
                Position_3 = Position_3_1;
            }
        ],
        execute: function () {
            VerticalLayoutEngine = class VerticalLayoutEngine {
                constructor() {
                    this.ChildWidthToParent = true;
                    this.WidthToContents = false;
                    this.HeightToContents = false;
                    this.SpacerSize = 0.0;
                }
                GetLargestChildWidth(control) {
                    let maxWidth = 0.0;
                    for (let i = 0; i < control.ChildCount; i++) {
                        let size = control.GetChildAtIndex(i).Size;
                        let margins = control.Margins;
                        if ((size.Width + margins.HorizontalPadding) > maxWidth) {
                            maxWidth = size.Width + margins.HorizontalPadding;
                        }
                    }
                    return maxWidth;
                }
                PerformLayout(control) {
                    let totalHeight = 0.0;
                    let padding = control.Padding;
                    let parentBounds = control.Bounds;
                    parentBounds.X += padding.Left;
                    parentBounds.Y += padding.Top;
                    parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);
                    let currentHeightOffset = padding.Top;
                    let width = parentBounds.Width;
                    for (let i = 0; i < control.ChildCount; i++) {
                        let child = control.GetChildAtIndex(i);
                        let margins = child.Margins;
                        let size = child.Size;
                        let newPosition = new Position_3.Position();
                        let newSize = size;
                        currentHeightOffset += margins.Top;
                        newPosition.X = parentBounds.X + margins.Left + padding.Left;
                        newPosition.Y = parentBounds.Y + currentHeightOffset;
                        if ((this.ChildWidthToParent == true) && (this.WidthToContents == false)) {
                            newSize.Width = parentBounds.Width - (margins.HorizontalPadding);
                        }
                        else if ((this.ChildWidthToParent == false) && (this.WidthToContents == true)) {
                            width = this.GetLargestChildWidth(control);
                        }
                        else if ((this.ChildWidthToParent == true) && (this.WidthToContents == true)) {
                            width = this.GetLargestChildWidth(control);
                            //adjust all child controls
                            for (let j = 0; j < control.ChildCount; j++) {
                                if (j != i) {
                                    let childSize = control.GetChildAtIndex(j).Size;
                                    control.GetChildAtIndex(j).SetSize(width, childSize.Height);
                                }
                            }
                            control.SetSize(width + padding.HorizontalPadding, control.Size.Height);
                        }
                        currentHeightOffset += size.Height + margins.Bottom + this.SpacerSize;
                        child.SetSize(newSize.Width, newSize.Height);
                        child.SetPosition(newPosition.X, newPosition.Y);
                        child.PerformLayout();
                    }
                    if (this.HeightToContents == true) {
                        control.SetSize(width + padding.HorizontalPadding, currentHeightOffset + padding.VerticalPadding);
                    }
                }
            };
            exports_28("VerticalLayoutEngine", VerticalLayoutEngine);
        }
    };
});
System.register("Forms/Theming/Theme", [], function (exports_29, context_29) {
    "use strict";
    var Theme;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [],
        execute: function () {
            Theme = class Theme {
                constructor() {
                    this.Styles = new Array();
                }
                /**
                 * Loads a JSON theme file from the given path, on success this method calls LoadThemeFromSource using the response
                 * @param path The path to the JSON theme file
                 */
                LoadThemeFromPath(path) {
                    let promise = new Promise((resolve, reject) => {
                        let request = new XMLHttpRequest();
                        request.onreadystatechange = () => {
                            if (request.readyState == 4) {
                                if (request.status == 200) {
                                    if (this.LoadThemeFromSource(request.responseText) == true) {
                                        resolve();
                                    }
                                    else {
                                        reject("Kuumba: An error ocurred parsing the theme file, see log for more details.");
                                    }
                                }
                                else {
                                    console.error("Kuumba: Unable to load theme from path: " + path + ". Server return: (" + request.status + ") " + request.statusText);
                                    reject(request.statusText);
                                }
                            }
                        };
                        request.open("GET", path, true);
                    });
                    return promise;
                }
                /**
                 * Loads the theme from a raw JSON string
                 * @param source
                 */
                LoadThemeFromSource(source) {
                    try {
                        var themeData = JSON.parse(source);
                        this.Name = themeData.Name;
                        this.Version = themeData.Version;
                        this.ReleaseDate = themeData.ReleaseDate;
                        this.Styles = themeData.Styles;
                        return true;
                    }
                    catch (ex) {
                        console.error("Kuumba: Unable to load theme from source. " + ex);
                    }
                    return false;
                }
            };
            exports_29("Theme", Theme);
        }
    };
});
System.register("Forms/Theming/StyleComponents/CircleGraphic", ["Forms/Theming/StyleComponents/StyleComponent", "Renderer/Size", "Renderer/Position"], function (exports_30, context_30) {
    "use strict";
    var StyleComponent_1, Size_2, Position_4, CircleGraphic;
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [
            function (StyleComponent_1_1) {
                StyleComponent_1 = StyleComponent_1_1;
            },
            function (Size_2_1) {
                Size_2 = Size_2_1;
            },
            function (Position_4_1) {
                Position_4 = Position_4_1;
            }
        ],
        execute: function () {
            CircleGraphic = class CircleGraphic extends StyleComponent_1.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_1.StyleComponentTypes.CircleGraphic);
                    this.Radius = 0;
                    this.RadiusToBounds = false;
                }
                RenderComponent(renderer, bounds) {
                    let radius = this.Radius;
                    let position = new Position_4.Position();
                    let size = new Size_2.Size();
                    this.GetRenderBounds(bounds, position, size);
                    if (this.RadiusToBounds == true) {
                        //the circle is perfectly round so we set the radius to the smallest dimension
                        radius = (size.Width > size.Height ? size.Height : size.Width) / 2;
                    }
                    renderer.DrawCircle(radius, position, this.Brush, this.Pen);
                }
            };
            exports_30("CircleGraphic", CircleGraphic);
        }
    };
});
System.register("Forms/Theming/StyleComponents/ImageGraphic", ["Forms/Theming/StyleComponents/StyleComponent", "Renderer/Rect"], function (exports_31, context_31) {
    "use strict";
    var StyleComponent_2, Rect_7, ImageGraphic;
    var __moduleName = context_31 && context_31.id;
    return {
        setters: [
            function (StyleComponent_2_1) {
                StyleComponent_2 = StyleComponent_2_1;
            },
            function (Rect_7_1) {
                Rect_7 = Rect_7_1;
            }
        ],
        execute: function () {
            ImageGraphic = class ImageGraphic extends StyleComponent_2.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_2.StyleComponentTypes.ImageGraphic);
                }
                RenderComponent(renderer, bounds) {
                    renderer.DrawImage(this.Path, new Rect_7.Rect(this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height), bounds, this.ImageDrawOptions);
                }
            };
            exports_31("ImageGraphic", ImageGraphic);
        }
    };
});
System.register("Forms/Theming/StyleComponents/LineGraphic", ["Forms/Theming/StyleComponents/StyleComponent"], function (exports_32, context_32) {
    "use strict";
    var StyleComponent_3, LineGraphic;
    var __moduleName = context_32 && context_32.id;
    return {
        setters: [
            function (StyleComponent_3_1) {
                StyleComponent_3 = StyleComponent_3_1;
            }
        ],
        execute: function () {
            LineGraphic = class LineGraphic extends StyleComponent_3.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_3.StyleComponentTypes.LineGraphic);
                }
                RenderComponent(renderer, bounds) {
                    renderer.DrawLine(this.Position, this.LineTo, this.Pen);
                }
            };
            exports_32("LineGraphic", LineGraphic);
        }
    };
});
System.register("Forms/Theming/StyleComponents/RectangleGraphic", ["Forms/Theming/StyleComponents/StyleComponent", "Renderer/Rect", "Renderer/Position", "Renderer/Size"], function (exports_33, context_33) {
    "use strict";
    var StyleComponent_4, Rect_8, Position_5, Size_3, RectangleGraphic;
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [
            function (StyleComponent_4_1) {
                StyleComponent_4 = StyleComponent_4_1;
            },
            function (Rect_8_1) {
                Rect_8 = Rect_8_1;
            },
            function (Position_5_1) {
                Position_5 = Position_5_1;
            },
            function (Size_3_1) {
                Size_3 = Size_3_1;
            }
        ],
        execute: function () {
            RectangleGraphic = class RectangleGraphic extends StyleComponent_4.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_4.StyleComponentTypes.RectangleGraphic);
                }
                RenderComponent(renderer, bounds) {
                    let position = new Position_5.Position();
                    let size = new Size_3.Size();
                    this.GetRenderBounds(bounds, position, size);
                    renderer.DrawRectangle(new Rect_8.Rect(position.X, position.Y, size.Width, size.Height), this.Brush, this.Pen);
                }
            };
            exports_33("RectangleGraphic", RectangleGraphic);
        }
    };
});
System.register("Forms/Theming/StyleComponents/RoundedRectangleGraphic", ["Forms/Theming/StyleComponents/StyleComponent", "Renderer/Rect", "Renderer/Position", "Renderer/Size"], function (exports_34, context_34) {
    "use strict";
    var StyleComponent_5, Rect_9, Position_6, Size_4, RoundedRectangleGraphic;
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [
            function (StyleComponent_5_1) {
                StyleComponent_5 = StyleComponent_5_1;
            },
            function (Rect_9_1) {
                Rect_9 = Rect_9_1;
            },
            function (Position_6_1) {
                Position_6 = Position_6_1;
            },
            function (Size_4_1) {
                Size_4 = Size_4_1;
            }
        ],
        execute: function () {
            RoundedRectangleGraphic = class RoundedRectangleGraphic extends StyleComponent_5.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_5.StyleComponentTypes.RoundedRectangleGraphic);
                    this.BorderRadius = 0;
                }
                RenderComponent(renderer, bounds) {
                    let position = new Position_6.Position();
                    let size = new Size_4.Size();
                    this.GetRenderBounds(bounds, position, size);
                    renderer.DrawRoundedRectangle(new Rect_9.Rect(position.X, position.Y, size.Width, size.Height), this.Brush, this.Pen, this.BorderRadius);
                }
            };
            exports_34("RoundedRectangleGraphic", RoundedRectangleGraphic);
        }
    };
});
System.register("Forms/Theming/StyleComponents/TextGraphic", ["Forms/Theming/StyleComponents/StyleComponent"], function (exports_35, context_35) {
    "use strict";
    var StyleComponent_6, TextGraphic;
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [
            function (StyleComponent_6_1) {
                StyleComponent_6 = StyleComponent_6_1;
            }
        ],
        execute: function () {
            TextGraphic = class TextGraphic extends StyleComponent_6.StyleComponent {
                constructor(name) {
                    super(name, StyleComponent_6.StyleComponentTypes.TextGraphic);
                }
                RenderComponent(renderer, bounds) {
                    renderer.DrawText(this.Text, bounds, this.Font, this.Brush, this.Pen);
                }
            };
            exports_35("TextGraphic", TextGraphic);
        }
    };
});
System.register("Renderer/Brushes/SolidColourBrush", ["Renderer/Brushes/Brush"], function (exports_36, context_36) {
    "use strict";
    var Brush_1, SolidColourBrush;
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [
            function (Brush_1_1) {
                Brush_1 = Brush_1_1;
            }
        ],
        execute: function () {
            SolidColourBrush = class SolidColourBrush extends Brush_1.Brush {
                constructor(colour) {
                    super(Brush_1.BrushTypes.SolidColour);
                }
                get Colour() {
                    return this._Colour;
                }
                set Colour(v) {
                    this._Colour = v;
                }
            };
            exports_36("SolidColourBrush", SolidColourBrush);
        }
    };
});
System.register("Renderer/Brushes/GradientBrush", ["Renderer/Brushes/Brush"], function (exports_37, context_37) {
    "use strict";
    var Brush_2, GradientBrush;
    var __moduleName = context_37 && context_37.id;
    return {
        setters: [
            function (Brush_2_1) {
                Brush_2 = Brush_2_1;
            }
        ],
        execute: function () {
            GradientBrush = class GradientBrush extends Brush_2.Brush {
                constructor(type) {
                    super(type);
                    this._ColourStops = new Array();
                }
                AddColourStop(colourStop) {
                    this._ColourStops.push(colourStop);
                }
                get ColourStops() {
                    return this._ColourStops;
                }
            };
            exports_37("GradientBrush", GradientBrush);
        }
    };
});
System.register("Renderer/Brushes/LinearGradient", ["Renderer/Brushes/GradientBrush", "Renderer/Brushes/Brush"], function (exports_38, context_38) {
    "use strict";
    var GradientBrush_1, Brush_3, LinearGradient;
    var __moduleName = context_38 && context_38.id;
    return {
        setters: [
            function (GradientBrush_1_1) {
                GradientBrush_1 = GradientBrush_1_1;
            },
            function (Brush_3_1) {
                Brush_3 = Brush_3_1;
            }
        ],
        execute: function () {
            LinearGradient = class LinearGradient extends GradientBrush_1.GradientBrush {
                constructor(x1, y1, x2, y2) {
                    super(Brush_3.BrushTypes.LinearGradient);
                    this.X1 = x1;
                    this.Y1 = y1;
                    this.X2 = x2;
                    this.Y2 = y2;
                }
            };
            exports_38("LinearGradient", LinearGradient);
        }
    };
});
System.register("Renderer/Brushes/RadialGradient", ["Renderer/Brushes/GradientBrush", "Renderer/Brushes/Brush"], function (exports_39, context_39) {
    "use strict";
    var GradientBrush_2, Brush_4, RadialGradient;
    var __moduleName = context_39 && context_39.id;
    return {
        setters: [
            function (GradientBrush_2_1) {
                GradientBrush_2 = GradientBrush_2_1;
            },
            function (Brush_4_1) {
                Brush_4 = Brush_4_1;
            }
        ],
        execute: function () {
            RadialGradient = class RadialGradient extends GradientBrush_2.GradientBrush {
                constructor(x1, y1, r1, x2, y2, r2) {
                    super(Brush_4.BrushTypes.RadialGradient);
                    this.X1 = x1;
                    this.Y1 = y1;
                    this.R1 = r1;
                    this.X2 = x2;
                    this.Y2 = y2;
                    this.R2 = r2;
                }
            };
            exports_39("RadialGradient", RadialGradient);
        }
    };
});
System.register("Renderer/Canvas2dRenderer", ["Renderer/Brushes/Brush", "Renderer/Rect"], function (exports_40, context_40) {
    "use strict";
    var Brush_5, Rect_10, Canvas2dRenderer;
    var __moduleName = context_40 && context_40.id;
    return {
        setters: [
            function (Brush_5_1) {
                Brush_5 = Brush_5_1;
            },
            function (Rect_10_1) {
                Rect_10 = Rect_10_1;
            }
        ],
        execute: function () {
            Canvas2dRenderer = class Canvas2dRenderer {
                constructor(canvas) {
                    this.Context = null;
                    this.Context = canvas.getContext("2d");
                }
                LoadColourStops(brush, gradient) {
                    for (var i = 0; i < brush.ColourStops.length; i++) {
                        gradient.addColorStop(i, brush.ColourStops[i].ToHexString());
                    }
                }
                LoadFillStyle(brush) {
                    switch (brush.Type) {
                        case Brush_5.BrushTypes.SolidColour:
                            return brush.Colour.ToHexString();
                        case Brush_5.BrushTypes.LinearGradient:
                            let linearGradBrush = brush;
                            let linearGradient = this.Context.createLinearGradient(linearGradBrush.X1, linearGradBrush.Y1, linearGradBrush.X2, linearGradBrush.Y2);
                            this.LoadColourStops(linearGradBrush, linearGradient);
                            return linearGradient;
                        case Brush_5.BrushTypes.RadialGradient:
                            let radialGradBrush = brush;
                            let radialGradient = this.Context.createRadialGradient(radialGradBrush.X1, radialGradBrush.Y1, radialGradBrush.R1, radialGradBrush.X2, radialGradBrush.Y2, radialGradBrush.R2);
                            this.LoadColourStops(radialGradBrush, radialGradient);
                            return radialGradient;
                    }
                }
                LoadStyles(brush, pen) {
                    this.Context.strokeStyle = pen.StrokeColour.ToHexString();
                    this.Context.lineWidth = pen.StrokeWidth;
                    this.Context.fillStyle = this.LoadFillStyle(brush);
                }
                FinaliseShape() {
                    this.Context.fill();
                    this.Context.stroke();
                }
                DrawCircle(radius, position, brush, pen) {
                    this.LoadStyles(brush, pen);
                    this.Context.ellipse(position.X, position.Y, radius, radius, 0, 0, 0, false);
                    this.FinaliseShape();
                }
                DrawImage(path, sourceRect, destinationRect, rectMismatchOption) {
                    var bitmap = new HTMLImageElement();
                    bitmap.src = path;
                    this.Context.drawImage(bitmap, sourceRect.X, sourceRect.Y, sourceRect.Width, sourceRect.Height, destinationRect.X, destinationRect.Y, destinationRect.Width, destinationRect.Height);
                }
                DrawLine(start, end, pen) {
                    this.Context.strokeStyle = pen.StrokeColour.ToHexString();
                    this.Context.lineWidth = pen.StrokeWidth;
                    this.Context.moveTo(start.X, start.Y);
                    this.Context.lineTo(end.X, end.Y);
                }
                DrawRectangle(rect, brush, pen) {
                    this.LoadStyles(brush, pen);
                    this.Context.rect(rect.X, rect.Y, rect.Width, rect.Height);
                    this.FinaliseShape();
                }
                DrawRoundedRectangle(rect, brush, pen, radius) {
                    if (rect.Width < (2 * radius)) {
                        radius = rect.Width / 2;
                    }
                    if (rect.Height < (2 * radius)) {
                        radius = rect.Width / 2;
                    }
                    this.LoadStyles(brush, pen);
                    this.Context.beginPath();
                    this.Context.moveTo(rect.X + radius, rect.Y);
                    this.Context.arcTo(rect.X + rect.Width, rect.Y, rect.X + rect.Width, rect.Y + rect.Height, radius);
                    this.Context.arcTo(rect.X + rect.Width, rect.Y + rect.Height, rect.X, rect.Y + rect.Height, radius);
                    this.Context.arcTo(rect.X, rect.Y + rect.Height, rect.X, rect.Y, radius);
                    this.Context.arcTo(rect.X, rect.Y, rect.X + rect.Width, rect.Y, radius);
                    this.Context.closePath();
                    this.FinaliseShape();
                }
                DrawText(text, rect, font, brush, pen) {
                    this.LoadStyles(brush, pen);
                    this.Context.fillText(text, rect.X, rect.Y, rect.Width);
                    this.FinaliseShape();
                }
                GetTextSize(text, font) {
                    return new Rect_10.Rect();
                }
            };
            exports_40("Canvas2dRenderer", Canvas2dRenderer);
        }
    };
});
System.register("Renderer/Brushes/ImageBrush", ["Renderer/Brushes/Brush"], function (exports_41, context_41) {
    "use strict";
    var Brush_6, ImageBrush;
    var __moduleName = context_41 && context_41.id;
    return {
        setters: [
            function (Brush_6_1) {
                Brush_6 = Brush_6_1;
            }
        ],
        execute: function () {
            ImageBrush = class ImageBrush extends Brush_6.Brush {
                constructor() {
                    super(Brush_6.BrushTypes.Image);
                }
            };
            exports_41("ImageBrush", ImageBrush);
        }
    };
});
