(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KuumbaForms"] = factory();
	else
		root["KuumbaForms"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/KuumbaForms.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Forms/AlignmentStyle.ts":
/*!*************************************!*\
  !*** ./src/Forms/AlignmentStyle.ts ***!
  \*************************************/
/*! exports provided: AlignmentStyle, GetAlignmentStyleBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentStyle", function() { return AlignmentStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAlignmentStyleBounds", function() { return GetAlignmentStyleBounds; });
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderer/Rect */ "./src/Renderer/Rect.ts");

var AlignmentStyle;
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
function GetAlignmentStyleBounds(alignment, currentBounds, currentBoundsMargin, parentBounds, parentBoundsPadding) {
    var newBounds = new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_0__["Rect"];
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


/***/ }),

/***/ "./src/Forms/AnchorStyle.ts":
/*!**********************************!*\
  !*** ./src/Forms/AnchorStyle.ts ***!
  \**********************************/
/*! exports provided: AnchorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorStyle", function() { return AnchorStyle; });
var AnchorStyle = /** @class */ (function () {
    function AnchorStyle() {
        this.AnchorLeft = false;
        this.AnchorRight = false;
        this.AnchorTop = false;
        this.AnchorBottom = false;
        this.AnchorLeftDistance = 0;
        this.AnchorRightDistance = 0;
        this.AnchorTopDistance = 0;
        this.AnchorBottomDistance = 0;
    }
    AnchorStyle.prototype.AnchorAll = function (all) {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;
        this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = all;
    };
    AnchorStyle.prototype.AnchorSeperately = function (left, right, top, bottom) {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = true;
        this.AnchorLeftDistance = left;
        this.AnchorRightDistance = right;
        this.AnchorBottomDistance = bottom;
        this.AnchorTopDistance = top;
    };
    AnchorStyle.prototype.HasAnchorStyle = function () {
        return this.AnchorBottom || this.AnchorLeft || this.AnchorRight || this.AnchorTop;
    };
    AnchorStyle.prototype.ClearAnchorStyle = function () {
        this.AnchorLeft = this.AnchorRight = this.AnchorBottom = this.AnchorTop = false;
        this.AnchorLeftDistance = this.AnchorRightDistance = this.AnchorBottomDistance = this.AnchorTopDistance = 0;
    };
    AnchorStyle.prototype.GetBounds = function (objectBounds, parentBounds) {
        var bounds = objectBounds;
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
    };
    return AnchorStyle;
}());



/***/ }),

/***/ "./src/Forms/Controls/Control.ts":
/*!***************************************!*\
  !*** ./src/Forms/Controls/Control.ts ***!
  \***************************************/
/*! exports provided: ControlClasses, Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlClasses", function() { return ControlClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var _Layouts_HorizontalLayoutEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/HorizontalLayoutEngine */ "./src/Forms/Layouts/HorizontalLayoutEngine.ts");
/* harmony import */ var _Layouts_StandardLayoutEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/StandardLayoutEngine */ "./src/Forms/Layouts/StandardLayoutEngine.ts");
/* harmony import */ var _Layouts_VerticalLayoutEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/VerticalLayoutEngine */ "./src/Forms/Layouts/VerticalLayoutEngine.ts");
/* harmony import */ var _Padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Padding */ "./src/Forms/Padding.ts");
/* harmony import */ var _AnchorStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AnchorStyle */ "./src/Forms/AnchorStyle.ts");
/* harmony import */ var _DockStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DockStyle */ "./src/Forms/DockStyle.ts");
/* harmony import */ var _AlignmentStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AlignmentStyle */ "./src/Forms/AlignmentStyle.ts");
/* harmony import */ var _Renderer_Size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Renderer/Size */ "./src/Renderer/Size.ts");
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Renderer/Rect */ "./src/Renderer/Rect.ts");
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Renderer/Position */ "./src/Renderer/Position.ts");
/* harmony import */ var _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Events/ControlEvents */ "./src/Forms/Events/ControlEvents.ts");
/* harmony import */ var _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Events/PointerEvents */ "./src/Forms/Events/PointerEvents.ts");
/* harmony import */ var _Events_Events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Events/Events */ "./src/Forms/Events/Events.ts");
/* harmony import */ var _Events_KeyboardEvents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Events/KeyboardEvents */ "./src/Forms/Events/KeyboardEvents.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














var ControlClasses = {
    Default: "default",
    Pressed: "pressed",
    Hover: "hover",
    Disabled: "disabled",
    Focused: "focused",
    Toggled: "toggled"
};
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control(name) {
        var _this = _super.call(this) || this;
        _this._Name = "";
        _this._LayoutSuspended = false;
        _this._UndergoingLayout = false;
        _this._Focusable = true;
        _this._Focused = false;
        _this._Visible = true;
        _this._Enabled = true;
        _this._ClipsChildren = true;
        _this._Parent = null;
        _this._Children = new Array();
        _this._FocusedChild = null;
        _this._PointerEventChild = null;
        _this._Margins = new _Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"]();
        _this._Padding = new _Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"]();
        _this._Anchor = new _AnchorStyle__WEBPACK_IMPORTED_MODULE_4__["AnchorStyle"]();
        _this._Dock = _DockStyle__WEBPACK_IMPORTED_MODULE_5__["DockStyle"].None;
        _this._Alignment = _AlignmentStyle__WEBPACK_IMPORTED_MODULE_6__["AlignmentStyle"].None;
        _this._Size = new _Renderer_Size__WEBPACK_IMPORTED_MODULE_7__["Size"]();
        _this._Position = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_9__["Position"]();
        _this._LayoutEngine = null;
        _this._ActiveControlClasses = new Array();
        _this._Name = name;
        return _this;
    }
    Object.defineProperty(Control.prototype, "Name", {
        /**
         * Gets the name of the control
         */
        get: function () {
            return this._Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "LayoutSuspended", {
        /**
         * Gets whether or not layout operations for this control have been suspended
         */
        get: function () {
            return this._LayoutSuspended;
        },
        /**
         * Sets whether control layout operations are suspended or not
         */
        set: function (suspended) {
            this._LayoutSuspended = suspended;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Draws the control with the given renderer. Rendering will only take place if the control
     * is visible and a valid style has been associated with the control
     * @param renderer
     */
    Control.prototype.Paint = function (renderer) {
        if (this._Visible == true) {
            if (this._Style != null) {
                this._Style.RenderStyle(renderer, this._ActiveControlClasses, this.AbsoluteBounds);
            }
            for (var i = 0; i < this._Children.length; i++) {
                this._Children[i].Paint(renderer);
            }
        }
    };
    /**
     * Forces the control to request a repaint
     */
    Control.prototype.RequestPaint = function () {
        if (this._PaintRequestCallback != null) {
            this._PaintRequestCallback();
        }
    };
    /**
     * Adds a style class to the control. Any applied style will be provided with the collection of control classes
     * for it to use when rendering the control
     * @param controlClass A string containing the control class to add
     */
    Control.prototype.AddControlClass = function (controlClass) {
        var classAlreadyApplied = this.IsControlClassSet(controlClass);
        if (classAlreadyApplied == false) {
            this._ActiveControlClasses.push(controlClass);
            this.RequestPaint();
        }
    };
    /**
     * Removes a control class from the active control classes collection
     * @param controlClass A string containing the control class to remove
     */
    Control.prototype.RemoveControlClass = function (controlClass) {
        for (var i = 0; i < this._ActiveControlClasses.length; i++) {
            if (this._ActiveControlClasses[i] == controlClass) {
                this._ActiveControlClasses.splice(i, 1);
                this.RequestPaint();
                break;
            }
        }
    };
    /**
     * Returns whether or not the given control style class has been set on the control
     * @param controlClass A string containing the control class to test for
     */
    Control.prototype.IsControlClassSet = function (controlClass) {
        for (var i = 0; i < this._ActiveControlClasses.length; i++) {
            if (this._ActiveControlClasses[i] == controlClass) {
                return true;
            }
        }
        return false;
    };
    /**
     * Forces the layout engine applied to the control to layout the control and its children.
     * This will cause the control to request a repaint.
     */
    Control.prototype.PerformLayout = function () {
        if ((this._UndergoingLayout == false) && (this._LayoutSuspended == false)) {
            if (this._LayoutEngine != null) {
                this._UndergoingLayout = true;
                this._LayoutEngine.PerformLayout(this);
                this.RequestPaint();
                this._UndergoingLayout = false;
            }
        }
    };
    Object.defineProperty(Control.prototype, "ChildCount", {
        /**
         * Gets the number of children belonging to this control
         */
        get: function () {
            return this._Children.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a child control at the given index. This method does not apply bounds checking before
     * returning the child.
     * @param index The index of the control to retrieve
     */
    Control.prototype.GetChildAtIndex = function (index) {
        return this._Children[index];
    };
    Object.defineProperty(Control.prototype, "Parent", {
        /**
         * Gets the control's parent control
         */
        get: function () {
            return this._Parent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a control as a child
     * @param child The child control to add
     */
    Control.prototype.AddChildControl = function (child) {
        if (child.Parent == null) {
            child._Parent = this;
            this._Children.push(child);
            this.PerformLayout();
        }
    };
    /**
     * Removes a child control
     * @param child The child control to remove
     */
    Control.prototype.RemoveChildControl = function (child) {
        if (child.Parent == this) {
            for (var i = 0; i < this._Children.length; i++) {
                if (this._Children[i] == child) {
                    this.RemoveChildControlAtIndex(i);
                    break;
                }
            }
        }
    };
    /**
     * Removes a child control at the given index
     * @param index The index of the child control to remove
     */
    Control.prototype.RemoveChildControlAtIndex = function (index) {
        if ((index >= 0) && (index < this._Children.length)) {
            this._Children[index]._Parent = null;
            if (this._Children[index] == this._FocusedChild) {
                this._FocusedChild = null;
            }
            this._Children.splice(index, 1);
            this.PerformLayout();
        }
    };
    /**
     * Sets the position of the control within its parent
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    Control.prototype.SetPosition = function (x, y) {
        if ((this._Position.X != x) || (this._Position.Y != y)) {
            var moveData = new _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["ControlMoveEvent"](this, this._Position, new _Renderer_Position__WEBPACK_IMPORTED_MODULE_9__["Position"](x, y));
            this._Position.X = x;
            this._Position.Y = y;
            this.NotifyEventSubscribers(moveData);
        }
    };
    Object.defineProperty(Control.prototype, "Position", {
        /**
         * Gets the position of the control within its parent
         */
        get: function () {
            return this._Position;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the width and height of the control
     * @param width The new width of the control
     * @param height The new height of the control
     */
    Control.prototype.SetSize = function (width, height) {
        if ((this._Size.Width != width) || (this._Size.Height != height)) {
            var resizeData = new _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["ControlResizeEvent"](this, this._Size, new _Renderer_Size__WEBPACK_IMPORTED_MODULE_7__["Size"](width, height));
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
    };
    Object.defineProperty(Control.prototype, "Size", {
        /**
         * Gets the size of the control
         */
        get: function () {
            return this._Size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Anchor", {
        /**
         * Gets the aplied anchor style for the control
         */
        get: function () {
            return this._Anchor;
        },
        /**
         * Sets the anchor style for the control
         */
        set: function (anchor) {
            this._Dock = _DockStyle__WEBPACK_IMPORTED_MODULE_5__["DockStyle"].None;
            this._Alignment = _AlignmentStyle__WEBPACK_IMPORTED_MODULE_6__["AlignmentStyle"].None;
            this._Anchor = anchor;
            if (this._Parent != null) {
                this._Parent.PerformLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Dock", {
        /**
         * Gets the dock style for the control
         */
        get: function () {
            return this._Dock;
        },
        /**
         * Sets the dock style for the control
         */
        set: function (dock) {
            this._Anchor.ClearAnchorStyle();
            this._Alignment = _AlignmentStyle__WEBPACK_IMPORTED_MODULE_6__["AlignmentStyle"].None;
            this._Dock = dock;
            if (this._Parent != null) {
                this._Parent.PerformLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Alignment", {
        /**
         * Gets the alignment style for the control
         */
        get: function () {
            return this._Alignment;
        },
        /**
         * Sets the alignment style for the control
         */
        set: function (alignment) {
            this._Dock = _DockStyle__WEBPACK_IMPORTED_MODULE_5__["DockStyle"].None;
            this._Anchor.ClearAnchorStyle();
            this._Alignment = alignment;
            if (this._Parent != null) {
                this._Parent.PerformLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Padding", {
        /**
         * Gets the internal padding for the control
         */
        get: function () {
            return this._Padding;
        },
        /**
         * Sets the internal padding for the control
         */
        set: function (padding) {
            this._Padding = padding;
            this.PerformLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Margins", {
        /**
         * Gets the external margins for the control
         */
        get: function () {
            return this._Margins;
        },
        /**
         * Sets the external margins for the control
         */
        set: function (margins) {
            this._Margins = margins;
            if (this._Parent != null) {
                this._Parent.PerformLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Bounds", {
        /**
         * Gets a rectangle containing the control's calculated bounds relative to its parent
         */
        get: function () {
            var bounds = new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_8__["Rect"](this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);
            return bounds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "AbsoluteBounds", {
        /**
         * Gets a rectangle containing the control's calculated bounds relative to its display
         */
        get: function () {
            if (this._Parent != null) {
                var bounds = this._Parent.AbsoluteBounds;
                return new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_8__["Rect"](bounds.X + this._Position.X, bounds.Y + this._Position.Y, this._Size.Width, this._Size.Height);
            }
            else {
                return new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_8__["Rect"](this._Position.X, this._Position.Y, this._Size.Width, this._Size.Height);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handler method for handling a child control retrieving input focus
     * @param control The child control that recieved focus
     */
    Control.prototype.ChildGotFocus = function (control) {
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
    };
    Object.defineProperty(Control.prototype, "Focused", {
        /**
         * Gets whether or not the control has focus
         */
        get: function () {
            return this._Focused;
        },
        /**
         * Sets whether or not the control has focus
         */
        set: function (focus) {
            var oldFocus = this._Focused;
            this._Focused = focus;
            if (this._Focused == true) {
                if (this._Focusable == true) {
                    this.AddControlClass(ControlClasses.Focused);
                    if (this._Parent != null) {
                        this._Parent.ChildGotFocus(this);
                    }
                    //defocus our children
                    for (var i = 0; i < this._Children.length; i++) {
                        this._Children[i].Focused = false;
                    }
                    if (oldFocus == false) {
                        var focusEvent = new _Events_Events__WEBPACK_IMPORTED_MODULE_12__["Event"](_Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["ControlEventTypes"].Focused);
                        this.NotifyEventSubscribers(focusEvent);
                    }
                }
            }
            else {
                this.RemoveControlClass(ControlClasses.Focused);
                //since we're no longer focused, our children cant be focused either 
                for (var i = 0; i < this._Children.length; i++) {
                    this._Children[i].Focused = false;
                }
                if (oldFocus == true) {
                    var focusLostEvent = new _Events_Events__WEBPACK_IMPORTED_MODULE_12__["Event"](_Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["ControlEventTypes"].FocusLost);
                    this.NotifyEventSubscribers(focusLostEvent);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Focusable", {
        /**
         * Gets whether or not this control is able to recieve focus
         */
        get: function () {
            return this._Focusable;
        },
        /**
         * Sets whether or not this control is able to recieve focus
         */
        set: function (focusable) {
            this._Focusable = focusable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Visible", {
        /**
         * Gets whether or not this control is visible
         */
        get: function () {
            return this._Visible;
        },
        /**
         * Sets the visibility of the control
         */
        set: function (visible) {
            this._Visible = visible;
            this.RequestPaint();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Enabled", {
        /**
         * Gets whether or not this control is enabled
         */
        get: function () {
            return this._Enabled;
        },
        /**
         * Sets whether or not this control is enabled
         */
        set: function (enabled) {
            this._Enabled = enabled;
            if (this._Enabled == false) {
                this.AddControlClass(ControlClasses.Disabled);
            }
            else {
                this.RemoveControlClass(ControlClasses.Disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the child control that intersects the given coordinates. If no child control intersects
     * the given coordinates, the control will test itself.
     * @param position The 2D coordinates to test against
     */
    Control.prototype.GetIntersectingChild = function (position) {
        var intersectingChild = null;
        for (var i = this._Children.length - 1; i >= 0; i--) {
            intersectingChild = this._Children[i].GetIntersectingChild(position);
            if (intersectingChild != null) {
                return intersectingChild;
            }
        }
        if (this.AbsoluteBounds.InsideRect(position.X, position.Y)) {
            intersectingChild = this;
        }
        return intersectingChild;
    };
    /**
     * Provides the control the ability to handle the given event
     * @param event The event to handle
     */
    Control.prototype.HandleEvent = function (event) {
        if (this._Enabled == true) {
            var events = new Array();
            if ((event.Code >= _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["KEYBOARD_EVENTS_BEGIN"]) && (event.Code <= _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["KEYBOARD_EVENTS_END"])) {
                //keyboard events are directed to child controls that are focused, there must be a focus chain built whenever
                //a control gets focus, if none exists, this control consumes the event							
                if (this._FocusedChild != null) {
                    this._FocusedChild.HandleEvent(event);
                }
                else {
                    this.HandleKeyboardEvent(event);
                }
            }
            else if ((event.Code >= _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["POINTER_EVENTS_BEGIN"]) && (event.Code <= _Events_ControlEvents__WEBPACK_IMPORTED_MODULE_10__["POINTER_EVENTS_END"])) {
                //mouse events go to the control directly under the mouse at the time the event was fired, 
                //if the mouse isnt above any child control, this control will consume it
                var data = event;
                var intersect = this.GetIntersectingChild(new _Renderer_Position__WEBPACK_IMPORTED_MODULE_9__["Position"](data.PointerEvent.X, data.PointerEvent.Y));
                //handle the mouse leave and enter events
                if (data.PointerEvent.Code == _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerMove) {
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
                    for (var i = 0; i < events.length; i++) {
                        this.HandleEvent(events[i]);
                    }
                }
                this._PointerEventChild = intersect;
            }
        }
    };
    /**
     * Attempts to determine whether or not the pointer device has left the bounds of a child control, or merely passing over it.
     * If the pointer has left the child control, passes the pointer leave event to the child
     * @param intersect The child control the pointer is currently over
     * @param event The pointer event
     */
    Control.prototype.HandleChildPointerLeaveEvent = function (intersect, event) {
        event.PointerEvent.Code = _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerLeave;
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
        event.PointerEvent.Code = _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerMove;
    };
    /**
     * Attempts to determine whether the pointer has entered the bounds of a child control. If the pointer
     * has entered the child, passes the pointer enter event to the child control to handle
     * @param intersect The control the pointer is currently over
     * @param event The pointer event
     */
    Control.prototype.HandleChildPointerEnterEvent = function (intersect, event) {
        event.PointerEvent.Code = _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerEnter;
        if ((intersect != null) && (intersect != this)) {
            if ((this._PointerEventChild != intersect) || (this._PointerEventChild == null)) {
                //we've moved onto a new control
                intersect.HandlePointerEvent(event);
            }
        }
        event.PointerEvent.Code = _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerMove;
    };
    /**
     * Pointer event exchange method for handling the various pointer events
     * @param event The pointer event to handle
     */
    Control.prototype.HandlePointerEvent = function (event) {
        if (this._Enabled == true) {
            switch (event.PointerEvent.Code) {
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerClicked:
                    this.HandleOnPointerClicked(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerDoubleClicked:
                    this.HandleOnPointerDoubleClicked(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerDown:
                    this.HandleOnPointerDown(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerEnter:
                    this.HandleOnPointerEnter(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerLeave:
                    this.HandleOnPointerLeave(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerMove:
                    this.HandleOnPointerMove(event);
                    break;
                case _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerEventTypes"].PointerUp:
                    this.HandleOnPointerUp(event);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Keyboard event exchange method for handling the various pointer events
     * @param event The pointer event to handle
     */
    Control.prototype.HandleKeyboardEvent = function (event) {
        if (this._Enabled == true) {
            switch (event.KeyboardEvent.Code) {
                case _Events_KeyboardEvents__WEBPACK_IMPORTED_MODULE_13__["KeyboardEventTypes"].KeyDown:
                    this.HandleOnKeyDown(event);
                    break;
                case _Events_KeyboardEvents__WEBPACK_IMPORTED_MODULE_13__["KeyboardEventTypes"].KeyPressed:
                    this.HandleOnKeyPressed(event);
                    break;
                case _Events_KeyboardEvents__WEBPACK_IMPORTED_MODULE_13__["KeyboardEventTypes"].KeyUp:
                    this.HandleOnKeyUp(event);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Handles the pointer clicked event
     * @param event The pointer clicked event object
     */
    Control.prototype.HandleOnPointerClicked = function (event) {
        this.NotifyEventSubscribers(event);
    };
    /**
     * Handles the pointer double clicked event
     * @param event The pointer double clicked event object
     */
    Control.prototype.HandleOnPointerDoubleClicked = function (event) {
        this.NotifyEventSubscribers(event);
    };
    /**
     * Handles the pointer down event. Sets the control pressed class on the control
     * @param event The pointer down event object
     */
    Control.prototype.HandleOnPointerDown = function (event) {
        this.NotifyEventSubscribers(event);
        if (event.PointerEvent.Button == _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerButtons"].Left) {
            this.AddControlClass(ControlClasses.Pressed);
        }
    };
    /**
     * Handles the pointer enter event
     * @param event The pointer enter event object
     */
    Control.prototype.HandleOnPointerEnter = function (event) {
        this.NotifyEventSubscribers(event);
    };
    /**
     * Handles the pointer leave event. Removes the hover and pressed style classes from the control
     * @param event The pointer leave event object
     */
    Control.prototype.HandleOnPointerLeave = function (event) {
        this.NotifyEventSubscribers(event);
        if ((this._PointerEventChild != null) && (this._PointerEventChild != this)) {
            this._PointerEventChild.HandleOnPointerLeave(event);
        }
        this.RemoveControlClass(ControlClasses.Hover);
        this.RemoveControlClass(ControlClasses.Pressed);
    };
    /**
     * Handles the pointer move event. Adds the hover style class and removes the default style class
     * @param event The pointer move event object
     */
    Control.prototype.HandleOnPointerMove = function (event) {
        this.NotifyEventSubscribers(event);
        if (event.PointerEvent.Button == _Events_PointerEvents__WEBPACK_IMPORTED_MODULE_11__["PointerButtons"].None) {
            this.AddControlClass(ControlClasses.Hover);
            this.RemoveControlClass(ControlClasses.Default);
        }
    };
    /**
     * Handles the pointer up event. Removes the pressed style class
     * @param event The pointer up event
     */
    Control.prototype.HandleOnPointerUp = function (event) {
        this.NotifyEventSubscribers(event);
        this.RemoveControlClass(ControlClasses.Pressed);
    };
    /**
     * Handles the key down event
     * @param event The key down event object
     */
    Control.prototype.HandleOnKeyDown = function (event) {
        this.NotifyEventSubscribers(event);
    };
    /**
     * Handles the key pressed event
     * @param event The key pressed event object
     */
    Control.prototype.HandleOnKeyPressed = function (event) {
        this.NotifyEventSubscribers(event);
    };
    /**
     * Handles the key up event
     * @param event The key up event object
     */
    Control.prototype.HandleOnKeyUp = function (event) {
        this.NotifyEventSubscribers(event);
    };
    Object.defineProperty(Control.prototype, "LayoutEngine", {
        /**
         * Sets the layout engine used to layout the control and its children
         */
        set: function (engine) {
            this._LayoutEngine = engine;
            this.PerformLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "Style", {
        /**
         * Sets the style to apply to the control when rendering
         */
        set: function (style) {
            this._Style = style;
            this.UpdateControlFromStyle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Applies the given property collection to the control's properties
     * @param properties The collection of control properties to apply
     */
    Control.prototype.ApplyControlProperties = function (properties) {
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].Name == "Size") {
                var size = JSON.parse(properties[i].Value);
                this.SetSize(size.Width, size.Height);
            }
            else if (properties[i].Name == "Position") {
                var position = JSON.parse(properties[i].Value);
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
    };
    /**
    * Updates the properties of the control (size, dock, anchor etc...) from its applied style
    */
    Control.prototype.UpdateControlFromStyle = function () {
        if (this._Style != null) {
            //the properties for the current state
            for (var i = 0; i < this._ActiveControlClasses.length; i++) {
                var styleClass = this._Style.FindStyleClass(this._ActiveControlClasses[i]);
                if (styleClass) {
                    this.ApplyControlProperties(styleClass.Properties);
                }
            }
        }
    };
    /**
     * Sets the callback the control will use when it requires a repaint
     * @param callback The callback method the control will call
     * @param recursive Whether this callback should be handed to the control's children
     */
    Control.prototype.SetPaintRequestCallback = function (callback, recursive) {
        this._PaintRequestCallback = callback;
        if (recursive == true) {
            for (var i = 0; i < this._Children.length; i++) {
                this._Children[i].SetPaintRequestCallback(callback, recursive);
            }
        }
    };
    /**
     * Provides heartbeat functionality for controls that require repeating logic
     * @param time The time the control can use for time sensitive operations
     */
    Control.prototype.Tick = function (time) {
        for (var i = 0; i < this._Children.length; i++) {
            this._Children[i].Tick(time);
        }
    };
    return Control;
}(_Events_Events__WEBPACK_IMPORTED_MODULE_12__["EventNotifier"]));



/***/ }),

/***/ "./src/Forms/Controls/Property.ts":
/*!****************************************!*\
  !*** ./src/Forms/Controls/Property.ts ***!
  \****************************************/
/*! exports provided: PropertyTypes, Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypes", function() { return PropertyTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
var PropertyTypes;
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
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());



/***/ }),

/***/ "./src/Forms/DockStyle.ts":
/*!********************************!*\
  !*** ./src/Forms/DockStyle.ts ***!
  \********************************/
/*! exports provided: DockStyle, GetDockStyleBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DockStyle", function() { return DockStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDockStyleBounds", function() { return GetDockStyleBounds; });
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderer/Rect */ "./src/Renderer/Rect.ts");

var DockStyle;
(function (DockStyle) {
    DockStyle[DockStyle["Top"] = 0] = "Top";
    DockStyle[DockStyle["Left"] = 1] = "Left";
    DockStyle[DockStyle["Bottom"] = 2] = "Bottom";
    DockStyle[DockStyle["Right"] = 3] = "Right";
    DockStyle[DockStyle["Fill"] = 4] = "Fill";
    DockStyle[DockStyle["None"] = 5] = "None";
})(DockStyle || (DockStyle = {}));
function GetDockStyleBounds(dock, availableBounds, currentBounds, boundMargins) {
    var newBounds = new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_0__["Rect"]();
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


/***/ }),

/***/ "./src/Forms/Events/ControlEvents.ts":
/*!*******************************************!*\
  !*** ./src/Forms/Events/ControlEvents.ts ***!
  \*******************************************/
/*! exports provided: ControlEventTypes, KEYBOARD_EVENTS_BEGIN, KEYBOARD_EVENTS_END, POINTER_EVENTS_BEGIN, POINTER_EVENTS_END, ControlEvent, ControlPointerEvent, ControlKeyboardEvent, ControlResizeEvent, ControlMoveEvent, TextChangedEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlEventTypes", function() { return ControlEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYBOARD_EVENTS_BEGIN", function() { return KEYBOARD_EVENTS_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYBOARD_EVENTS_END", function() { return KEYBOARD_EVENTS_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_EVENTS_BEGIN", function() { return POINTER_EVENTS_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_EVENTS_END", function() { return POINTER_EVENTS_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlEvent", function() { return ControlEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPointerEvent", function() { return ControlPointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlKeyboardEvent", function() { return ControlKeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlResizeEvent", function() { return ControlResizeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMoveEvent", function() { return ControlMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextChangedEvent", function() { return TextChangedEvent; });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/Forms/Events/Events.ts");
/* harmony import */ var _PointerEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointerEvents */ "./src/Forms/Events/PointerEvents.ts");
/* harmony import */ var _KeyboardEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardEvents */ "./src/Forms/Events/KeyboardEvents.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ControlEventTypes;
(function (ControlEventTypes) {
    ControlEventTypes[ControlEventTypes["Resize"] = 0] = "Resize";
    ControlEventTypes[ControlEventTypes["Moved"] = 1] = "Moved";
    ControlEventTypes[ControlEventTypes["FocusLost"] = 2] = "FocusLost";
    ControlEventTypes[ControlEventTypes["Focused"] = 3] = "Focused";
    ControlEventTypes[ControlEventTypes["TextChanged"] = 4] = "TextChanged";
    ControlEventTypes[ControlEventTypes["Pointer"] = 5] = "Pointer";
    ControlEventTypes[ControlEventTypes["Keyboard"] = 6] = "Keyboard";
})(ControlEventTypes || (ControlEventTypes = {}));
var KEYBOARD_EVENTS_BEGIN = _KeyboardEvents__WEBPACK_IMPORTED_MODULE_2__["KeyboardEventTypes"].KeyDown;
var KEYBOARD_EVENTS_END = _KeyboardEvents__WEBPACK_IMPORTED_MODULE_2__["KeyboardEventTypes"].KeyPressed;
var POINTER_EVENTS_BEGIN = _PointerEvents__WEBPACK_IMPORTED_MODULE_1__["PointerEventTypes"].PointerMove;
var POINTER_EVENTS_END = _PointerEvents__WEBPACK_IMPORTED_MODULE_1__["PointerEventTypes"].PointerLeave;
var ControlEvent = /** @class */ (function (_super) {
    __extends(ControlEvent, _super);
    function ControlEvent(control, type) {
        var _this = _super.call(this, type) || this;
        _this.Control = control;
        return _this;
    }
    return ControlEvent;
}(_Events__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var ControlPointerEvent = /** @class */ (function (_super) {
    __extends(ControlPointerEvent, _super);
    function ControlPointerEvent(control, x, y, button, type) {
        var _this = _super.call(this, control, ControlEventTypes.Pointer) || this;
        _this.PointerEvent = new _PointerEvents__WEBPACK_IMPORTED_MODULE_1__["PointerEvent"](x, y, button, type);
        return _this;
    }
    return ControlPointerEvent;
}(ControlEvent));

var ControlKeyboardEvent = /** @class */ (function (_super) {
    __extends(ControlKeyboardEvent, _super);
    function ControlKeyboardEvent(control, type, keyCode, state) {
        var _this = _super.call(this, control, ControlEventTypes.Keyboard) || this;
        _this.KeyboardEvent = new _KeyboardEvents__WEBPACK_IMPORTED_MODULE_2__["KeyboardEvent"](keyCode, type, state);
        return _this;
    }
    return ControlKeyboardEvent;
}(ControlEvent));

;
var ControlResizeEvent = /** @class */ (function (_super) {
    __extends(ControlResizeEvent, _super);
    function ControlResizeEvent(control, oldSize, newSize) {
        var _this = _super.call(this, control, ControlEventTypes.Resize) || this;
        _this.OldSize = oldSize;
        _this.NewSize = newSize;
        return _this;
    }
    return ControlResizeEvent;
}(ControlEvent));

;
var ControlMoveEvent = /** @class */ (function (_super) {
    __extends(ControlMoveEvent, _super);
    function ControlMoveEvent(control, oldPosition, newPosition) {
        var _this = _super.call(this, control, ControlEventTypes.Moved) || this;
        _this.OldPosition = oldPosition;
        _this.NewPosition = newPosition;
        return _this;
    }
    return ControlMoveEvent;
}(ControlEvent));

;
var TextChangedEvent = /** @class */ (function (_super) {
    __extends(TextChangedEvent, _super);
    function TextChangedEvent(control, oldText, newText) {
        var _this = _super.call(this, control, ControlEventTypes.TextChanged) || this;
        _this.OldText = oldText;
        _this.NewText = newText;
        return _this;
    }
    return TextChangedEvent;
}(ControlEvent));

;


/***/ }),

/***/ "./src/Forms/Events/Events.ts":
/*!************************************!*\
  !*** ./src/Forms/Events/Events.ts ***!
  \************************************/
/*! exports provided: Event, EventSubscription, EventNotifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSubscription", function() { return EventSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventNotifier", function() { return EventNotifier; });
var Event = /** @class */ (function () {
    function Event(code) {
        this.Code = code;
    }
    return Event;
}());

var EventSubscription = /** @class */ (function () {
    function EventSubscription() {
    }
    return EventSubscription;
}());

var EventNotifier = /** @class */ (function () {
    function EventNotifier() {
        this.EventHandlers = new Array();
    }
    EventNotifier.prototype.SubscribeToEvent = function (code, handler) {
        this.EventHandlers.push({ Code: code, Handler: handler });
    };
    EventNotifier.prototype.UnsubscribeFromEvent = function (code, handler) {
        for (var i = 0; i < this.EventHandlers.length; i++) {
            if ((this.EventHandlers[i].Code == code) && (this.EventHandlers[i].Handler == handler)) {
                this.EventHandlers.splice(i, 1);
                break;
            }
        }
    };
    EventNotifier.prototype.NotifyEventSubscribers = function (event) {
        for (var i = 0; i < this.EventHandlers.length; i++) {
            if ((this.EventHandlers[i].Code == event.Code) && (this.EventHandlers[i].Handler != null)) {
                this.EventHandlers[i].Handler(event);
            }
        }
    };
    return EventNotifier;
}());



/***/ }),

/***/ "./src/Forms/Events/KeyboardEvents.ts":
/*!********************************************!*\
  !*** ./src/Forms/Events/KeyboardEvents.ts ***!
  \********************************************/
/*! exports provided: KeyboardEventTypes, KeyboardState, KeyboardEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEventTypes", function() { return KeyboardEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardState", function() { return KeyboardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent; });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/Forms/Events/Events.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var KeyboardEventTypes;
(function (KeyboardEventTypes) {
    KeyboardEventTypes[KeyboardEventTypes["KeyDown"] = 8] = "KeyDown";
    KeyboardEventTypes[KeyboardEventTypes["KeyUp"] = 9] = "KeyUp";
    KeyboardEventTypes[KeyboardEventTypes["KeyPressed"] = 10] = "KeyPressed";
})(KeyboardEventTypes || (KeyboardEventTypes = {}));
;
var KeyboardState = /** @class */ (function () {
    function KeyboardState() {
    }
    return KeyboardState;
}());

var KeyboardEvent = /** @class */ (function (_super) {
    __extends(KeyboardEvent, _super);
    function KeyboardEvent(keyCode, type, state) {
        var _this = _super.call(this, type) || this;
        _this.State = state;
        _this.KeyCode = keyCode;
        return _this;
    }
    return KeyboardEvent;
}(_Events__WEBPACK_IMPORTED_MODULE_0__["Event"]));



/***/ }),

/***/ "./src/Forms/Events/PointerEvents.ts":
/*!*******************************************!*\
  !*** ./src/Forms/Events/PointerEvents.ts ***!
  \*******************************************/
/*! exports provided: PointerButtons, PointerEventTypes, PointerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerButtons", function() { return PointerButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventTypes", function() { return PointerEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEvent", function() { return PointerEvent; });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/Forms/Events/Events.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PointerButtons;
(function (PointerButtons) {
    PointerButtons[PointerButtons["None"] = 0] = "None";
    PointerButtons[PointerButtons["Left"] = 1] = "Left";
    PointerButtons[PointerButtons["Right"] = 2] = "Right";
    PointerButtons[PointerButtons["Middle"] = 3] = "Middle";
})(PointerButtons || (PointerButtons = {}));
var PointerEventTypes;
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
var PointerEvent = /** @class */ (function (_super) {
    __extends(PointerEvent, _super);
    function PointerEvent(x, y, button, type) {
        var _this = _super.call(this, type) || this;
        _this.X = x;
        _this.Y = y;
        _this.Button = button;
        return _this;
    }
    return PointerEvent;
}(_Events__WEBPACK_IMPORTED_MODULE_0__["Event"]));



/***/ }),

/***/ "./src/Forms/Layouts/HorizontalLayoutEngine.ts":
/*!*****************************************************!*\
  !*** ./src/Forms/Layouts/HorizontalLayoutEngine.ts ***!
  \*****************************************************/
/*! exports provided: HorizontalLayoutControlAlignment, HorizontalLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalLayoutControlAlignment", function() { return HorizontalLayoutControlAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalLayoutEngine", function() { return HorizontalLayoutEngine; });
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Renderer/Position */ "./src/Renderer/Position.ts");

var HorizontalLayoutControlAlignment;
(function (HorizontalLayoutControlAlignment) {
    HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Top"] = 0] = "Top";
    HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Middle"] = 1] = "Middle";
    HorizontalLayoutControlAlignment[HorizontalLayoutControlAlignment["Bottom"] = 2] = "Bottom";
})(HorizontalLayoutControlAlignment || (HorizontalLayoutControlAlignment = {}));
;
var HorizontalLayoutEngine = /** @class */ (function () {
    function HorizontalLayoutEngine() {
        this.HeightToContents = true;
        this.HeightToParent = false;
        this.WidthToContents = false;
        this.RightToLeft = false;
        this.SpacerSize = 0.0;
        this.ControlAlignment = HorizontalLayoutControlAlignment.Top;
    }
    HorizontalLayoutEngine.prototype.GetLargestChildHeight = function (control) {
        var maxHeight = 0.0;
        for (var i = 0; i < control.ChildCount; i++) {
            var size = control.GetChildAtIndex(i).Size;
            var margins = control.Margins;
            if ((size.Height + margins.VerticalPadding) > maxHeight) {
                maxHeight = size.Height + margins.VerticalPadding;
            }
        }
        return maxHeight;
    };
    HorizontalLayoutEngine.prototype.PerformLayout = function (control) {
        var parentBounds = control.Bounds;
        var padding = control.Padding;
        parentBounds.X += padding.Left;
        parentBounds.Y += padding.Top;
        parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);
        parentBounds.Height = parentBounds.Height - (padding.VerticalPadding);
        var currentWidthOffset = (this.RightToLeft == false) ? 0.0 : parentBounds.Width;
        var height = parentBounds.Height;
        for (var i = 0; i < control.ChildCount; i++) {
            var previousChild = null;
            var child = control.GetChildAtIndex(i);
            var margins = child.Margins;
            var size = child.Size;
            var newPosition = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_0__["Position"]();
            var newSize = size;
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
                for (var j = 0; j < control.ChildCount; j++) {
                    if (j != i) {
                        var childSize = control.GetChildAtIndex(j).Size;
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
    };
    return HorizontalLayoutEngine;
}());



/***/ }),

/***/ "./src/Forms/Layouts/StandardLayoutEngine.ts":
/*!***************************************************!*\
  !*** ./src/Forms/Layouts/StandardLayoutEngine.ts ***!
  \***************************************************/
/*! exports provided: StandardLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLayoutEngine", function() { return StandardLayoutEngine; });
/* harmony import */ var _AlignmentStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AlignmentStyle */ "./src/Forms/AlignmentStyle.ts");
/* harmony import */ var _DockStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DockStyle */ "./src/Forms/DockStyle.ts");


var StandardLayoutEngine = /** @class */ (function () {
    function StandardLayoutEngine() {
    }
    StandardLayoutEngine.prototype.CalculateAnchorStyleBounds = function (control, parentBounds) {
        var anchor = control.Anchor;
        var bounds = control.Bounds;
        var newBounds = anchor.GetBounds(bounds, parentBounds);
        control.SetSize(newBounds.Width, newBounds.Height);
        control.SetPosition(newBounds.X, newBounds.Y);
    };
    StandardLayoutEngine.prototype.CalculateAlignmentStyleBounds = function (control, parentBounds, padding) {
        var alignment = control.Alignment;
        var margins = control.Margins;
        var bounds = control.Bounds;
        var newBounds = Object(_AlignmentStyle__WEBPACK_IMPORTED_MODULE_0__["GetAlignmentStyleBounds"])(alignment, bounds, margins, parentBounds, padding);
        control.SetPosition(newBounds.X, newBounds.Y);
    };
    StandardLayoutEngine.prototype.CalculateDockStyleBounds = function (control, availableBounds) {
        var currentBounds = control.Bounds;
        var margins = control.Margins;
        var dock = control.Dock;
        var newBounds = Object(_DockStyle__WEBPACK_IMPORTED_MODULE_1__["GetDockStyleBounds"])(dock, availableBounds, currentBounds, margins);
        control.SetSize(newBounds.Width, newBounds.Height);
        control.SetPosition(newBounds.X, newBounds.Y);
    };
    StandardLayoutEngine.prototype.PerformLayout = function (control) {
        var parentBounds = control.Bounds;
        var availableBounds = parentBounds;
        var padding = control.Padding;
        availableBounds.X += padding.Left;
        availableBounds.Y += padding.Top;
        availableBounds.Height = parentBounds.Height - padding.Bottom - padding.Top;
        availableBounds.Width = parentBounds.Width - padding.Right - padding.Left;
        for (var i = 0; i < control.ChildCount; i++) {
            var child = control.GetChildAtIndex(i);
            var currentBounds = child.Bounds;
            var newBounds = currentBounds;
            if (child.Anchor.HasAnchorStyle() == true) {
                this.CalculateAnchorStyleBounds(child, parentBounds);
            }
            else if (child.Alignment != _AlignmentStyle__WEBPACK_IMPORTED_MODULE_0__["AlignmentStyle"].None) {
                this.CalculateAlignmentStyleBounds(child, parentBounds, padding);
            }
            else if (child.Dock != _DockStyle__WEBPACK_IMPORTED_MODULE_1__["DockStyle"].None) {
                this.CalculateDockStyleBounds(child, availableBounds);
            }
            child.PerformLayout();
        }
    };
    return StandardLayoutEngine;
}());



/***/ }),

/***/ "./src/Forms/Layouts/VerticalLayoutEngine.ts":
/*!***************************************************!*\
  !*** ./src/Forms/Layouts/VerticalLayoutEngine.ts ***!
  \***************************************************/
/*! exports provided: VerticalLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalLayoutEngine", function() { return VerticalLayoutEngine; });
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Renderer/Position */ "./src/Renderer/Position.ts");

var VerticalLayoutEngine = /** @class */ (function () {
    function VerticalLayoutEngine() {
        this.ChildWidthToParent = true;
        this.WidthToContents = false;
        this.HeightToContents = false;
        this.SpacerSize = 0.0;
    }
    VerticalLayoutEngine.prototype.GetLargestChildWidth = function (control) {
        var maxWidth = 0.0;
        for (var i = 0; i < control.ChildCount; i++) {
            var size = control.GetChildAtIndex(i).Size;
            var margins = control.Margins;
            if ((size.Width + margins.HorizontalPadding) > maxWidth) {
                maxWidth = size.Width + margins.HorizontalPadding;
            }
        }
        return maxWidth;
    };
    VerticalLayoutEngine.prototype.PerformLayout = function (control) {
        var totalHeight = 0.0;
        var padding = control.Padding;
        var parentBounds = control.Bounds;
        parentBounds.X += padding.Left;
        parentBounds.Y += padding.Top;
        parentBounds.Width = parentBounds.Width - (padding.HorizontalPadding);
        var currentHeightOffset = padding.Top;
        var width = parentBounds.Width;
        for (var i = 0; i < control.ChildCount; i++) {
            var child = control.GetChildAtIndex(i);
            var margins = child.Margins;
            var size = child.Size;
            var newPosition = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_0__["Position"]();
            var newSize = size;
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
                for (var j = 0; j < control.ChildCount; j++) {
                    if (j != i) {
                        var childSize = control.GetChildAtIndex(j).Size;
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
    };
    return VerticalLayoutEngine;
}());



/***/ }),

/***/ "./src/Forms/Padding.ts":
/*!******************************!*\
  !*** ./src/Forms/Padding.ts ***!
  \******************************/
/*! exports provided: Padding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Padding", function() { return Padding; });
var Padding = /** @class */ (function () {
    function Padding() {
    }
    Object.defineProperty(Padding.prototype, "VerticalPadding", {
        get: function () {
            return this.Bottom + this.Top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Padding.prototype, "HorizontalPadding", {
        get: function () {
            return this.Left + this.Right;
        },
        enumerable: true,
        configurable: true
    });
    Padding.prototype.SetVerticalPadding = function (padding) {
        this.Bottom = this.Top = padding;
    };
    Padding.prototype.SetHorizontalPadding = function (padding) {
        this.Right = this.Left = padding;
    };
    Padding.prototype.SetAll = function (padding) {
        this.Right = this.Left = this.Bottom = this.Top = padding;
    };
    return Padding;
}());



/***/ }),

/***/ "./src/Forms/Theming/Style.ts":
/*!************************************!*\
  !*** ./src/Forms/Theming/Style.ts ***!
  \************************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony import */ var _StyleClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleClass */ "./src/Forms/Theming/StyleClass.ts");
/* harmony import */ var _StyleComponents_StyleComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleComponents/StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
/* harmony import */ var _StyleComponents_CircleGraphic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleComponents/CircleGraphic */ "./src/Forms/Theming/StyleComponents/CircleGraphic.ts");
/* harmony import */ var _StyleComponents_ImageGraphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyleComponents/ImageGraphic */ "./src/Forms/Theming/StyleComponents/ImageGraphic.ts");
/* harmony import */ var _StyleComponents_LineGraphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleComponents/LineGraphic */ "./src/Forms/Theming/StyleComponents/LineGraphic.ts");
/* harmony import */ var _StyleComponents_RectangleGraphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StyleComponents/RectangleGraphic */ "./src/Forms/Theming/StyleComponents/RectangleGraphic.ts");
/* harmony import */ var _StyleComponents_RoundedRectangleGraphic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyleComponents/RoundedRectangleGraphic */ "./src/Forms/Theming/StyleComponents/RoundedRectangleGraphic.ts");
/* harmony import */ var _StyleComponents_TextGraphic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleComponents/TextGraphic */ "./src/Forms/Theming/StyleComponents/TextGraphic.ts");
/* harmony import */ var _Controls_Property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/Property */ "./src/Forms/Controls/Property.ts");









var Style = /** @class */ (function () {
    function Style(name) {
        this.StyleProperties = new Array();
        this.StyleComponents = new Array();
        this.StyleClasses = new Array();
        this.Name = name;
    }
    Style.prototype.FindStyleComponent = function (name) {
        var component = null;
        //first search the global components, then search the style class components
        for (var i = 0; i < this.StyleComponents.length; i++) {
            if (this.StyleComponents[i].Name == name) {
                component = this.StyleComponents[i];
                break;
            }
        }
        if (component == null) {
            for (var i = 0; i < this.StyleClasses.length; i++) {
                for (var j = 0; j < this.StyleClasses[i].ComponentCount; j++) {
                    if (this.StyleClasses[i].Components[j].Name == name) {
                        component = this.StyleClasses[i].Components[j];
                        break;
                    }
                }
            }
        }
        return component;
    };
    Style.prototype.FindProperty = function (name) {
        for (var i = 0; i < this.StyleProperties.length; i++) {
            if (this.StyleProperties[i].Name == name) {
                return this.StyleProperties[i];
            }
        }
        return new _Controls_Property__WEBPACK_IMPORTED_MODULE_8__["Property"]();
    };
    Style.prototype.ContainsClass = function (styleClass) {
        for (var i = 0; i < this.StyleClasses.length; i++) {
            if (styleClass == this.StyleClasses[i].Name) {
                return true;
            }
        }
        return false;
    };
    Style.prototype.FindStyleClass = function (name) {
        for (var i = 0; i < this.StyleClasses.length; i++) {
            if (this.StyleClasses[i].Name == name) {
                return this.StyleClasses[i];
            }
        }
        return null;
    };
    Style.prototype.RenderStyle = function (renderer, classes, bounds) {
        var classesRendered = 0;
        if (this.StyleClasses.length > 0) {
            //try to find the state we're trying to render
            for (var i = 0; i < classes.length; i++) {
                for (var j = 0; j < this.StyleClasses.length; j++) {
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
            for (var i = 0; i < this.StyleClasses.length; i++) {
                if (this.StyleClasses[i].Name == "default") {
                    this.StyleClasses[i].RenderComponents(renderer, bounds);
                    classesRendered += 1;
                    break;
                }
            }
        }
    };
    Style.prototype.RenderStyleClass = function (renderer, styleClass, bounds) {
        if (styleClass) {
            //Graphics->ClipRegion(ControlBounds);
            styleClass.RenderComponents(renderer, bounds);
        }
    };
    Style.prototype.RenderStyleClassAtIndex = function (renderer, index, bounds) {
        if ((index >= 0) && (index < this.StyleClasses.length)) {
            this.StyleClasses[index].RenderComponents(renderer, bounds);
        }
    };
    return Style;
}());



/***/ }),

/***/ "./src/Forms/Theming/StyleClass.ts":
/*!*****************************************!*\
  !*** ./src/Forms/Theming/StyleClass.ts ***!
  \*****************************************/
/*! exports provided: StyleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleClass", function() { return StyleClass; });
var StyleClass = /** @class */ (function () {
    function StyleClass(name) {
        this.Components = new Array();
        this.Properties = new Array();
        this.Name = name;
    }
    Object.defineProperty(StyleClass.prototype, "ComponentCount", {
        get: function () {
            return this.Components.length;
        },
        enumerable: true,
        configurable: true
    });
    StyleClass.prototype.RenderComponents = function (renderer, bounds) {
        for (var i = 0; i < this.Components.length; i++) {
            this.Components[i].RenderComponent(renderer, bounds);
        }
    };
    return StyleClass;
}());



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/CircleGraphic.ts":
/*!************************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/CircleGraphic.ts ***!
  \************************************************************/
/*! exports provided: CircleGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleGraphic", function() { return CircleGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
/* harmony import */ var _Renderer_Size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Renderer/Size */ "./src/Renderer/Size.ts");
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Renderer/Position */ "./src/Renderer/Position.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CircleGraphic = /** @class */ (function (_super) {
    __extends(CircleGraphic, _super);
    function CircleGraphic(name) {
        var _this = _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].CircleGraphic) || this;
        _this.Radius = 0;
        _this.RadiusToBounds = false;
        return _this;
    }
    CircleGraphic.prototype.RenderComponent = function (renderer, bounds) {
        var radius = this.Radius;
        var position = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__["Position"]();
        var size = new _Renderer_Size__WEBPACK_IMPORTED_MODULE_1__["Size"]();
        this.GetRenderBounds(bounds, position, size);
        if (this.RadiusToBounds == true) {
            //the circle is perfectly round so we set the radius to the smallest dimension
            radius = (size.Width > size.Height ? size.Height : size.Width) / 2;
        }
        renderer.DrawCircle(radius, position, this.Brush, this.Pen);
    };
    return CircleGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/ImageGraphic.ts":
/*!***********************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/ImageGraphic.ts ***!
  \***********************************************************/
/*! exports provided: ImageGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGraphic", function() { return ImageGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Renderer/Rect */ "./src/Renderer/Rect.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ImageGraphic = /** @class */ (function (_super) {
    __extends(ImageGraphic, _super);
    function ImageGraphic(name) {
        return _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].ImageGraphic) || this;
    }
    ImageGraphic.prototype.RenderComponent = function (renderer, bounds) {
        renderer.DrawImage(this.Path, new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height), bounds, this.ImageDrawOptions);
    };
    return ImageGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/LineGraphic.ts":
/*!**********************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/LineGraphic.ts ***!
  \**********************************************************/
/*! exports provided: LineGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineGraphic", function() { return LineGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LineGraphic = /** @class */ (function (_super) {
    __extends(LineGraphic, _super);
    function LineGraphic(name) {
        return _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].LineGraphic) || this;
    }
    LineGraphic.prototype.RenderComponent = function (renderer, bounds) {
        renderer.DrawLine(this.Position, this.LineTo, this.Pen);
    };
    return LineGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/RectangleGraphic.ts":
/*!***************************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/RectangleGraphic.ts ***!
  \***************************************************************/
/*! exports provided: RectangleGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGraphic", function() { return RectangleGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Renderer/Rect */ "./src/Renderer/Rect.ts");
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Renderer/Position */ "./src/Renderer/Position.ts");
/* harmony import */ var _Renderer_Size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Renderer/Size */ "./src/Renderer/Size.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RectangleGraphic = /** @class */ (function (_super) {
    __extends(RectangleGraphic, _super);
    function RectangleGraphic(name) {
        return _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].RectangleGraphic) || this;
    }
    RectangleGraphic.prototype.RenderComponent = function (renderer, bounds) {
        var position = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__["Position"]();
        var size = new _Renderer_Size__WEBPACK_IMPORTED_MODULE_3__["Size"]();
        this.GetRenderBounds(bounds, position, size);
        renderer.DrawRectangle(new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](position.X, position.Y, size.Width, size.Height), this.Brush, this.Pen);
    };
    return RectangleGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/RoundedRectangleGraphic.ts":
/*!**********************************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/RoundedRectangleGraphic.ts ***!
  \**********************************************************************/
/*! exports provided: RoundedRectangleGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundedRectangleGraphic", function() { return RoundedRectangleGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Renderer/Rect */ "./src/Renderer/Rect.ts");
/* harmony import */ var _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Renderer/Position */ "./src/Renderer/Position.ts");
/* harmony import */ var _Renderer_Size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Renderer/Size */ "./src/Renderer/Size.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RoundedRectangleGraphic = /** @class */ (function (_super) {
    __extends(RoundedRectangleGraphic, _super);
    function RoundedRectangleGraphic(name) {
        var _this = _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].RoundedRectangleGraphic) || this;
        _this.BorderRadius = 0;
        return _this;
    }
    RoundedRectangleGraphic.prototype.RenderComponent = function (renderer, bounds) {
        var position = new _Renderer_Position__WEBPACK_IMPORTED_MODULE_2__["Position"]();
        var size = new _Renderer_Size__WEBPACK_IMPORTED_MODULE_3__["Size"]();
        this.GetRenderBounds(bounds, position, size);
        renderer.DrawRoundedRectangle(new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](position.X, position.Y, size.Width, size.Height), this.Brush, this.Pen, this.BorderRadius);
    };
    return RoundedRectangleGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/StyleComponent.ts":
/*!*************************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/StyleComponent.ts ***!
  \*************************************************************/
/*! exports provided: StyleComponentTypes, StyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleComponentTypes", function() { return StyleComponentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleComponent", function() { return StyleComponent; });
/* harmony import */ var _AnchorStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AnchorStyle */ "./src/Forms/AnchorStyle.ts");
/* harmony import */ var _AlignmentStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AlignmentStyle */ "./src/Forms/AlignmentStyle.ts");
/* harmony import */ var _Renderer_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Renderer/Rect */ "./src/Renderer/Rect.ts");
/* harmony import */ var _Padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Padding */ "./src/Forms/Padding.ts");




var StyleComponentTypes;
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
var StyleComponent = /** @class */ (function () {
    function StyleComponent(name, type) {
        this.Name = "";
        this.Anchor = new _AnchorStyle__WEBPACK_IMPORTED_MODULE_0__["AnchorStyle"]();
        this.Alignment = _AlignmentStyle__WEBPACK_IMPORTED_MODULE_1__["AlignmentStyle"].None;
        this.Name = name;
        this.Type = type;
    }
    StyleComponent.prototype.GetRenderBounds = function (controlBounds, position, size) {
        if (this.Anchor.HasAnchorStyle() == true) {
            var graphicBounds = new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_2__["Rect"](this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
            var renderBounds = this.Anchor.GetBounds(graphicBounds, controlBounds);
            position.X = renderBounds.X;
            position.Y = renderBounds.Y;
            size.Width = renderBounds.Width;
            size.Height = renderBounds.Height;
        }
        else if (this.Alignment != _AlignmentStyle__WEBPACK_IMPORTED_MODULE_1__["AlignmentStyle"].None) {
            var graphicBounds = new _Renderer_Rect__WEBPACK_IMPORTED_MODULE_2__["Rect"](this.Position.X, this.Position.Y, this.Size.Width, this.Size.Height);
            var renderBounds = Object(_AlignmentStyle__WEBPACK_IMPORTED_MODULE_1__["GetAlignmentStyleBounds"])(this.Alignment, graphicBounds, new _Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"](), controlBounds, new _Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"]());
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
    };
    return StyleComponent;
}());



/***/ }),

/***/ "./src/Forms/Theming/StyleComponents/TextGraphic.ts":
/*!**********************************************************!*\
  !*** ./src/Forms/Theming/StyleComponents/TextGraphic.ts ***!
  \**********************************************************/
/*! exports provided: TextGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextGraphic", function() { return TextGraphic; });
/* harmony import */ var _StyleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleComponent */ "./src/Forms/Theming/StyleComponents/StyleComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextGraphic = /** @class */ (function (_super) {
    __extends(TextGraphic, _super);
    function TextGraphic(name) {
        return _super.call(this, name, _StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponentTypes"].TextGraphic) || this;
    }
    TextGraphic.prototype.RenderComponent = function (renderer, bounds) {
        renderer.DrawText(this.Text, bounds, this.Font, this.Brush, this.Pen);
    };
    return TextGraphic;
}(_StyleComponent__WEBPACK_IMPORTED_MODULE_0__["StyleComponent"]));



/***/ }),

/***/ "./src/Forms/Theming/Theme.ts":
/*!************************************!*\
  !*** ./src/Forms/Theming/Theme.ts ***!
  \************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style */ "./src/Forms/Theming/Style.ts");

var Theme = /** @class */ (function () {
    function Theme() {
        this.Styles = new Array();
    }
    /**
     * Loads a JSON theme file from the given path, on success this method calls LoadThemeFromSource using the response
     * @param path The path to the JSON theme file
     */
    Theme.prototype.LoadThemeFromPath = function (path) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        if (_this.LoadThemeFromSource(request.responseText) == true) {
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
    };
    /**
     * Loads the theme from a raw JSON string
     * @param source
     */
    Theme.prototype.LoadThemeFromSource = function (source) {
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
    };
    return Theme;
}());



/***/ }),

/***/ "./src/KuumbaForms.ts":
/*!****************************!*\
  !*** ./src/KuumbaForms.ts ***!
  \****************************/
/*! exports provided: InitialisationOptions, KuumbaForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialisationOptions", function() { return InitialisationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KuumbaForms", function() { return KuumbaForms; });
/* harmony import */ var _Forms_Controls_Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/Controls/Control */ "./src/Forms/Controls/Control.ts");
/* harmony import */ var _Forms_Theming_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms/Theming/Theme */ "./src/Forms/Theming/Theme.ts");
/* harmony import */ var _Renderer_IRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer/IRenderer */ "./src/Renderer/IRenderer.ts");
/* harmony import */ var _Renderer_Canvas2dRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer/Canvas2dRenderer */ "./src/Renderer/Canvas2dRenderer.ts");
//to prevent typescript elide




var InitialisationOptions = /** @class */ (function () {
    function InitialisationOptions() {
        this.Maximized = true;
        this.Renderer = null;
        this.RootControl = null;
    }
    return InitialisationOptions;
}());

var KuumbaForms = /** @class */ (function () {
    function KuumbaForms(options) {
        this._Options = options;
        this.Initialise();
    }
    KuumbaForms.prototype.Initialise = function () {
        var opts = this._Options;
        if (opts.Maximized == true) {
            opts.Element.width = window.innerWidth;
            opts.Element.height = window.innerHeight;
        }
    };
    KuumbaForms.prototype.Paint = function () {
        var requestId = requestAnimationFrame(this.Paint);
        try {
            this._Options.RootControl.Paint(this._Options.Renderer);
        }
        catch (ex) {
            cancelAnimationFrame(requestId);
            console.error("Kuumba: " + ex);
        }
    };
    KuumbaForms.prototype.BeginAnimationLoop = function () {
        this.Paint();
    };
    return KuumbaForms;
}());



/***/ }),

/***/ "./src/Renderer/Brushes/Brush.ts":
/*!***************************************!*\
  !*** ./src/Renderer/Brushes/Brush.ts ***!
  \***************************************/
/*! exports provided: BrushTypes, Brush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushTypes", function() { return BrushTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brush", function() { return Brush; });
/* harmony import */ var _GradientBrush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientBrush */ "./src/Renderer/Brushes/GradientBrush.ts");
/* harmony import */ var _ImageBrush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageBrush */ "./src/Renderer/Brushes/ImageBrush.ts");
/* harmony import */ var _LinearGradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearGradient */ "./src/Renderer/Brushes/LinearGradient.ts");
/* harmony import */ var _RadialGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadialGradient */ "./src/Renderer/Brushes/RadialGradient.ts");
/* harmony import */ var _SolidColourBrush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SolidColourBrush */ "./src/Renderer/Brushes/SolidColourBrush.ts");





var BrushTypes;
(function (BrushTypes) {
    BrushTypes[BrushTypes["SolidColour"] = 0] = "SolidColour";
    BrushTypes[BrushTypes["Image"] = 1] = "Image";
    BrushTypes[BrushTypes["LinearGradient"] = 2] = "LinearGradient";
    BrushTypes[BrushTypes["RadialGradient"] = 3] = "RadialGradient";
})(BrushTypes || (BrushTypes = {}));
var Brush = /** @class */ (function () {
    function Brush(type) {
        this._Type = type;
    }
    Object.defineProperty(Brush.prototype, "Type", {
        get: function () {
            return this._Type;
        },
        enumerable: true,
        configurable: true
    });
    return Brush;
}());



/***/ }),

/***/ "./src/Renderer/Brushes/GradientBrush.ts":
/*!***********************************************!*\
  !*** ./src/Renderer/Brushes/GradientBrush.ts ***!
  \***********************************************/
/*! exports provided: GradientBrush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientBrush", function() { return GradientBrush; });
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brush */ "./src/Renderer/Brushes/Brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GradientBrush = /** @class */ (function (_super) {
    __extends(GradientBrush, _super);
    function GradientBrush(type) {
        var _this = _super.call(this, type) || this;
        _this._ColourStops = new Array();
        return _this;
    }
    GradientBrush.prototype.AddColourStop = function (colourStop) {
        this._ColourStops.push(colourStop);
    };
    Object.defineProperty(GradientBrush.prototype, "ColourStops", {
        get: function () {
            return this._ColourStops;
        },
        enumerable: true,
        configurable: true
    });
    return GradientBrush;
}(_Brush__WEBPACK_IMPORTED_MODULE_0__["Brush"]));



/***/ }),

/***/ "./src/Renderer/Brushes/ImageBrush.ts":
/*!********************************************!*\
  !*** ./src/Renderer/Brushes/ImageBrush.ts ***!
  \********************************************/
/*! exports provided: ImageBrush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBrush", function() { return ImageBrush; });
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brush */ "./src/Renderer/Brushes/Brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageBrush = /** @class */ (function (_super) {
    __extends(ImageBrush, _super);
    function ImageBrush() {
        return _super.call(this, _Brush__WEBPACK_IMPORTED_MODULE_0__["BrushTypes"].Image) || this;
    }
    return ImageBrush;
}(_Brush__WEBPACK_IMPORTED_MODULE_0__["Brush"]));



/***/ }),

/***/ "./src/Renderer/Brushes/LinearGradient.ts":
/*!************************************************!*\
  !*** ./src/Renderer/Brushes/LinearGradient.ts ***!
  \************************************************/
/*! exports provided: LinearGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return LinearGradient; });
/* harmony import */ var _GradientBrush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientBrush */ "./src/Renderer/Brushes/GradientBrush.ts");
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brush */ "./src/Renderer/Brushes/Brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LinearGradient = /** @class */ (function (_super) {
    __extends(LinearGradient, _super);
    function LinearGradient(x1, y1, x2, y2) {
        var _this = _super.call(this, _Brush__WEBPACK_IMPORTED_MODULE_1__["BrushTypes"].LinearGradient) || this;
        _this.X1 = x1;
        _this.Y1 = y1;
        _this.X2 = x2;
        _this.Y2 = y2;
        return _this;
    }
    return LinearGradient;
}(_GradientBrush__WEBPACK_IMPORTED_MODULE_0__["GradientBrush"]));



/***/ }),

/***/ "./src/Renderer/Brushes/RadialGradient.ts":
/*!************************************************!*\
  !*** ./src/Renderer/Brushes/RadialGradient.ts ***!
  \************************************************/
/*! exports provided: RadialGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialGradient", function() { return RadialGradient; });
/* harmony import */ var _GradientBrush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientBrush */ "./src/Renderer/Brushes/GradientBrush.ts");
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brush */ "./src/Renderer/Brushes/Brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RadialGradient = /** @class */ (function (_super) {
    __extends(RadialGradient, _super);
    function RadialGradient(x1, y1, r1, x2, y2, r2) {
        var _this = _super.call(this, _Brush__WEBPACK_IMPORTED_MODULE_1__["BrushTypes"].RadialGradient) || this;
        _this.X1 = x1;
        _this.Y1 = y1;
        _this.R1 = r1;
        _this.X2 = x2;
        _this.Y2 = y2;
        _this.R2 = r2;
        return _this;
    }
    return RadialGradient;
}(_GradientBrush__WEBPACK_IMPORTED_MODULE_0__["GradientBrush"]));



/***/ }),

/***/ "./src/Renderer/Brushes/SolidColourBrush.ts":
/*!**************************************************!*\
  !*** ./src/Renderer/Brushes/SolidColourBrush.ts ***!
  \**************************************************/
/*! exports provided: SolidColourBrush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolidColourBrush", function() { return SolidColourBrush; });
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brush */ "./src/Renderer/Brushes/Brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SolidColourBrush = /** @class */ (function (_super) {
    __extends(SolidColourBrush, _super);
    function SolidColourBrush(colour) {
        return _super.call(this, _Brush__WEBPACK_IMPORTED_MODULE_0__["BrushTypes"].SolidColour) || this;
    }
    Object.defineProperty(SolidColourBrush.prototype, "Colour", {
        get: function () {
            return this._Colour;
        },
        set: function (v) {
            this._Colour = v;
        },
        enumerable: true,
        configurable: true
    });
    return SolidColourBrush;
}(_Brush__WEBPACK_IMPORTED_MODULE_0__["Brush"]));



/***/ }),

/***/ "./src/Renderer/Canvas2dRenderer.ts":
/*!******************************************!*\
  !*** ./src/Renderer/Canvas2dRenderer.ts ***!
  \******************************************/
/*! exports provided: Canvas2dRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas2dRenderer", function() { return Canvas2dRenderer; });
/* harmony import */ var _Brushes_Brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brushes/Brush */ "./src/Renderer/Brushes/Brush.ts");
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ "./src/Renderer/Rect.ts");


var Canvas2dRenderer = /** @class */ (function () {
    function Canvas2dRenderer(canvas) {
        this.Context = null;
        this.Context = canvas.getContext("2d");
    }
    Canvas2dRenderer.prototype.LoadColourStops = function (brush, gradient) {
        for (var i = 0; i < brush.ColourStops.length; i++) {
            gradient.addColorStop(i, brush.ColourStops[i].ToHexString());
        }
    };
    Canvas2dRenderer.prototype.LoadFillStyle = function (brush) {
        switch (brush.Type) {
            case _Brushes_Brush__WEBPACK_IMPORTED_MODULE_0__["BrushTypes"].SolidColour:
                return brush.Colour.ToHexString();
            case _Brushes_Brush__WEBPACK_IMPORTED_MODULE_0__["BrushTypes"].LinearGradient:
                var linearGradBrush = brush;
                var linearGradient = this.Context.createLinearGradient(linearGradBrush.X1, linearGradBrush.Y1, linearGradBrush.X2, linearGradBrush.Y2);
                this.LoadColourStops(linearGradBrush, linearGradient);
                return linearGradient;
            case _Brushes_Brush__WEBPACK_IMPORTED_MODULE_0__["BrushTypes"].RadialGradient:
                var radialGradBrush = brush;
                var radialGradient = this.Context.createRadialGradient(radialGradBrush.X1, radialGradBrush.Y1, radialGradBrush.R1, radialGradBrush.X2, radialGradBrush.Y2, radialGradBrush.R2);
                this.LoadColourStops(radialGradBrush, radialGradient);
                return radialGradient;
        }
    };
    Canvas2dRenderer.prototype.LoadStyles = function (brush, pen) {
        this.Context.strokeStyle = pen.StrokeColour.ToHexString();
        this.Context.lineWidth = pen.StrokeWidth;
        this.Context.fillStyle = this.LoadFillStyle(brush);
    };
    Canvas2dRenderer.prototype.FinaliseShape = function () {
        this.Context.fill();
        this.Context.stroke();
    };
    Canvas2dRenderer.prototype.DrawCircle = function (radius, position, brush, pen) {
        this.LoadStyles(brush, pen);
        this.Context.ellipse(position.X, position.Y, radius, radius, 0, 0, 0, false);
        this.FinaliseShape();
    };
    Canvas2dRenderer.prototype.DrawImage = function (path, sourceRect, destinationRect, rectMismatchOption) {
        var bitmap = new HTMLImageElement();
        bitmap.src = path;
        this.Context.drawImage(bitmap, sourceRect.X, sourceRect.Y, sourceRect.Width, sourceRect.Height, destinationRect.X, destinationRect.Y, destinationRect.Width, destinationRect.Height);
    };
    Canvas2dRenderer.prototype.DrawLine = function (start, end, pen) {
        this.Context.strokeStyle = pen.StrokeColour.ToHexString();
        this.Context.lineWidth = pen.StrokeWidth;
        this.Context.moveTo(start.X, start.Y);
        this.Context.lineTo(end.X, end.Y);
    };
    Canvas2dRenderer.prototype.DrawRectangle = function (rect, brush, pen) {
        this.LoadStyles(brush, pen);
        this.Context.rect(rect.X, rect.Y, rect.Width, rect.Height);
        this.FinaliseShape();
    };
    Canvas2dRenderer.prototype.DrawRoundedRectangle = function (rect, brush, pen, radius) {
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
    };
    Canvas2dRenderer.prototype.DrawText = function (text, rect, font, brush, pen) {
        this.LoadStyles(brush, pen);
        this.Context.fillText(text, rect.X, rect.Y, rect.Width);
        this.FinaliseShape();
    };
    Canvas2dRenderer.prototype.GetTextSize = function (text, font) {
        return new _Rect__WEBPACK_IMPORTED_MODULE_1__["Rect"]();
    };
    return Canvas2dRenderer;
}());



/***/ }),

/***/ "./src/Renderer/Colour.ts":
/*!********************************!*\
  !*** ./src/Renderer/Colour.ts ***!
  \********************************/
/*! exports provided: Colour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
var Colour = /** @class */ (function () {
    function Colour() {
        this.Red = 0;
        this.Green = 0;
        this.Blue = 0;
        this.Alpha = 255;
    }
    ;
    Colour.prototype.ToHexString = function () {
        return "#" + this.Red.toString(15).toUpperCase() +
            this.Green.toString(15).toUpperCase() +
            this.Blue.toString(15).toUpperCase() +
            this.Alpha.toString(15).toUpperCase();
    };
    Colour.prototype.ToRGBAString = function () {
        return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + ", " + this.Alpha + ")";
    };
    return Colour;
}());



/***/ }),

/***/ "./src/Renderer/Font.ts":
/*!******************************!*\
  !*** ./src/Renderer/Font.ts ***!
  \******************************/
/*! exports provided: Font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
var Font = /** @class */ (function () {
    function Font() {
    }
    return Font;
}());



/***/ }),

/***/ "./src/Renderer/IRenderer.ts":
/*!***********************************!*\
  !*** ./src/Renderer/IRenderer.ts ***!
  \***********************************/
/*! exports provided: ImageDrawRectMismatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDrawRectMismatch", function() { return ImageDrawRectMismatch; });
/* harmony import */ var _Brushes_Brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brushes/Brush */ "./src/Renderer/Brushes/Brush.ts");
/* harmony import */ var _Pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pen */ "./src/Renderer/Pen.ts");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Font */ "./src/Renderer/Font.ts");
/* harmony import */ var _Colour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Colour */ "./src/Renderer/Colour.ts");




var ImageDrawRectMismatch;
(function (ImageDrawRectMismatch) {
    ImageDrawRectMismatch[ImageDrawRectMismatch["ClampToSource"] = 0] = "ClampToSource";
    ImageDrawRectMismatch[ImageDrawRectMismatch["StretchToDestination"] = 1] = "StretchToDestination";
    ImageDrawRectMismatch[ImageDrawRectMismatch["StretchToDestinationMaintainAspect"] = 2] = "StretchToDestinationMaintainAspect";
    ImageDrawRectMismatch[ImageDrawRectMismatch["Tile"] = 3] = "Tile";
})(ImageDrawRectMismatch || (ImageDrawRectMismatch = {}));


/***/ }),

/***/ "./src/Renderer/Pen.ts":
/*!*****************************!*\
  !*** ./src/Renderer/Pen.ts ***!
  \*****************************/
/*! exports provided: Pen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pen", function() { return Pen; });
/* harmony import */ var _Colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colour */ "./src/Renderer/Colour.ts");

var Pen = /** @class */ (function () {
    function Pen() {
        this.StrokeWidth = 0;
        this.StrokeColour = new _Colour__WEBPACK_IMPORTED_MODULE_0__["Colour"]();
    }
    return Pen;
}());



/***/ }),

/***/ "./src/Renderer/Position.ts":
/*!**********************************!*\
  !*** ./src/Renderer/Position.ts ***!
  \**********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }
    return Position;
}());



/***/ }),

/***/ "./src/Renderer/Rect.ts":
/*!******************************!*\
  !*** ./src/Renderer/Rect.ts ***!
  \******************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }
    Rect.prototype.InsideRect = function (x, y) {
        return ((x > this.X) && (x < this.X + this.Width) && (y > this.Y) && (y < this.Y + this.Height));
    };
    Rect.InsideRect = function (x, y, rect) {
        return ((x > rect.X) && (x < rect.X + rect.Width) && (y > rect.Y) && (y < rect.Y + rect.Height));
    };
    return Rect;
}());



/***/ }),

/***/ "./src/Renderer/Size.ts":
/*!******************************!*\
  !*** ./src/Renderer/Size.ts ***!
  \******************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size = /** @class */ (function () {
    function Size(width, height, length) {
        this.Width = width;
        this.Height = height;
        this.Length = length;
    }
    return Size;
}());



/***/ })

/******/ });
});