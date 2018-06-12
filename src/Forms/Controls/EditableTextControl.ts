import { TextControl } from "./TextControl";
import { Rect } from "../../Renderer/Rect";
import { Style } from "../Theming/Style";
import { ControlKeyboardEvent } from "../Events/ControlEvents";
import { IRenderer } from "../../Renderer/IRenderer";

enum TextMode
{ 
    Character, Space 
}

export class TextState
{
    Text: string;
    CaretLine: number;
    CaretColumn: number;

    constructor(text: string, caretLine: number, caretColumn: number)
    {
        this.Text = text;
        this.CaretColumn = caretLine;
        this.CaretLine = caretColumn;
    }
}

export class EditableTextControl extends TextControl
{
    private _CaptureHistory = true;

    private _TextSelectionBegin: number = -1;
    private _TextSelectionEnd: number = -1;

    private _TextSelectionBounds: Array<Rect> = new Array<Rect>();

    protected _TextSelectionStyle: Style = null;
    protected _CaretStyle: Style = null;

    protected _CaretPosition: number = 0;
    protected _CaretLine: number = 0;
    protected _CaretColumn: number = 0;

    protected _MaxLength: number = 0;
    protected _MaxUndoStates: number = 50;

    protected _UndoStack: Array<TextState> = new Array<TextState>();
    protected _RedoStack: Array<TextState> = new Array<TextState>();

    protected _CaretVisible: boolean = false;
    protected _CaretBounds: Rect = new Rect();

    protected _PreviousTime: number = 0;
    
    constructor(name?: string)
    {
        super(name);
    }

    private UpdateCaretCoordinates()
    {
        if (this._WrapText == false)
        {
            this._CaretLine = 0;
            this._CaretColumn = this._CaretPosition;
        }
        else
        {
            //first get the line the caret is in						
            let textArray = this._Text;

            let line = 0;
            let column = 0;

            let lastLineBegin = 0;

            for (let i = 0; i < this._CaretPosition; i++)
            {
                if (textArray[i] == '\n')
                {
                    line += 1;
                    lastLineBegin = i + 1;
                }
            }

            column = this._CaretPosition - lastLineBegin;

            this._CaretLine = line;
            this._CaretColumn = column;
        }
    }

    private UpdateCaretLineAndColumn()
    {
        if (this._WrapText == false)
        {
            this._CaretLine = 0;
            this._CaretColumn = this._CaretPosition;
        }
        else
        {
            //first get the line the caret is in						
            let textArray = this._Text;

            let line = 0;
            let column = 0;

            let lastLineBegin = 0;

            for (let i = 0; i < this._CaretPosition; i++)
            {
                if (textArray[i] == '\n')
                {
                    line += 1;
                    lastLineBegin = i + 1;
                }
            }

            column = this._CaretPosition - lastLineBegin;

            this._CaretLine = line;
            this._CaretColumn = column;
        }
    }

    protected HandleOnKeyDown(event: ControlKeyboardEvent)
    {
        switch (event.KeyboardEvent.KeyCode)					
        {
        case "KeyLeft":
            if (this._CaretPosition > 0)
            {
                if (event.KeyboardEvent.State.LeftCtrl == true)
                {
                    this._CaretPosition = this.GetPreviousWordIndex(this._CaretPosition - 1);
                }
                else
                {
                    this._CaretPosition -= 1;
                }

                if (event.KeyboardEvent.State.LeftShift == true)
                {
                    let selectStart = (this._TextSelectionBegin == -1) ? this._CaretPosition + 1: this._TextSelectionBegin;
                    let selectEnd = (this._TextSelectionEnd == -1) ? this._CaretPosition : this._TextSelectionEnd;

                    this.SetTextSelectionRange(selectStart, selectEnd);
                }

                this.SetCaretPosition(this._CaretPosition);
            }
            break;
        case "KeyRight":
            if (event.KeyboardEvent.State.LeftCtrl == true)
            {
                this._CaretPosition = this.GetNextWordIndex(this._CaretPosition);
            }
            else
            {
                this._CaretPosition += 1;
            }

            if (event.KeyboardEvent.State.LeftShift == true)
            {
                let selectStart = (this._TextSelectionBegin == -1) ? this._CaretPosition : this._TextSelectionBegin;
                let selectEnd = (this._TextSelectionEnd == -1) ? this._CaretPosition : this._TextSelectionEnd;

                this.SetTextSelectionRange(selectStart, selectEnd);
            }

            this.SetCaretPosition(this._CaretPosition);
            break;
        case "KeyBackspace":
            if ((this._Text.length > 0) && (this._CaretPosition > 0))
            {
                let currentText = this._Text;

                if (event.KeyboardEvent.State.LeftCtrl == true)
                {
                    let stoppingPoint = this.GetPreviousWordIndex(this._CaretPosition - 1);

                    //now go from the caret position to the stopping point and delete the text
                    let startString = stoppingPoint > 0 ? currentText.substr(0, stoppingPoint) : "";
                    let endString = currentText.substr(this._CaretPosition);

                    this.SetCaretPosition(stoppingPoint);
                    this.Text = (startString + endString);
                }		
                else
                {		
                    //currentText.
                    //System::String::RemoveAt(currentText, this._CaretPosition - 1);

                    this.SetCaretPosition(this._CaretPosition - 1);
                    this._Text = currentText;
                }
            }
            break;
        case "KeyDelete":
            if ((this._Text.length >= 0) && (this._CaretPosition < this._Text.length))
            {
                let currentText = this._Text;
                
                if (event.KeyboardEvent.State.LeftCtrl == true)
                {
                    let stoppingPoint = this.GetNextWordIndex(this._CaretPosition);

                    //now go from the caret position to the stopping point and delete the text
                    let startString = this._CaretPosition > 0 ? currentText.substr(0, this._CaretPosition) : "";
                    let endString = ((stoppingPoint + 1) > currentText.length - 1) ? "" : currentText.substr(stoppingPoint + 1);
                                                    
                    currentText = startString + endString;
                }
                else
                {
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

    protected HandleOnKeyPressed(event: ControlKeyboardEvent)
    {
        if ((event.KeyboardEvent.KeyCode != "KeyBackspace") && (event.KeyboardEvent.KeyCode != "KeyDelete"))
        {
            if ((event.KeyboardEvent.KeyCode == "KeyZ") && (event.KeyboardEvent.State.LeftCtrl == true))
            {
                this.Undo();
            }
            else if ((event.KeyboardEvent.KeyCode == "KeyY") && (event.KeyboardEvent.State.LeftCtrl == true))
            {
                this.Redo();
            }						
            else
            {
                if ((event.KeyboardEvent.KeyCode == "KeyEnter") && (this._WrapText == false))
                {
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
    
    protected SetCaretPosition(position: number)
    {
        this._CaretPosition = position;

        this.UpdateCaretLineAndColumn();
        this.UpdateCaretCoordinates();
    }

    protected SetCaretLineAndColumn(line: number, column: number)
    {
        let textArray = this._Text;

        let textLength = textArray.length;

        let lineCount = 0;
        let lastLineBegin = 0;
        let currentPosition = 0;

        for (let i = 0; i < textLength; i++)
        {
            if (textArray[i] == '\n')
            {
                lineCount += 1;
                lastLineBegin = i + 1;
            }

            currentPosition += 1;

            if (lineCount >= line)
            {
                break;
            }
        }

        this._CaretLine = lineCount;
        let position = lastLineBegin + column;

        if (position > textLength)
        {
            this._CaretPosition = textLength;
        }
        else
        {
            this._CaretPosition = position;
        }

        this._CaretColumn = this._CaretPosition - currentPosition;

        this.UpdateCaretCoordinates();
    }

    protected GetPreviousWordIndex(position: number): number
    {
        let text = this._Text;
        let stoppingPoint = position;

        if ((text.length <= 0) || (position <= 0))
        {
            return 0;
        }

        if (position > text.length - 1)
        {
            return text.length - 1;
        }
        
        let currentMode = text[position] == ' ' ? TextMode.Space : TextMode.Character; //are we in character or space mode
        let previousMode = currentMode;

        for (let i = position - 1; i >= 0; i--)
        {
            if (i == 0)
            {
                stoppingPoint = 0;
                break;
            }

            currentMode = text[i] == ' ' ? TextMode.Space : TextMode.Character;

            if (currentMode != previousMode)
            {
                break;
            }

            stoppingPoint--;
            previousMode = currentMode;
        }

        return stoppingPoint;
    }

    protected GetNextWordIndex(position: number): number
    {
        let text = this._Text;
        let stoppingPoint = position + 1;

        if (text.length <= 0)
        {
            return 0;
        }

        if (position > text.length - 1)
        {
            return text.length - 1;
        }

        let currentMode = text[position] == ' ' ? TextMode.Space : TextMode.Character; //are we in character or space mode
        let previousMode = currentMode;

        for (let i = position + 1; i < text.length; i++)
        {
            if (i == text.length - 1)
            {
                stoppingPoint = text.length;
                break;
            }

            currentMode = text[i] == ' ' ? TextMode.Space : TextMode.Character;

            if (currentMode != previousMode)
            {
                break;
            }

            stoppingPoint++;
            previousMode = currentMode;
        }

        return stoppingPoint;
    }

    public set Text(text: string)
    {        
        let currentText = this._Text;

        if (currentText != text)
        {
            if (this._CaptureHistory == true)
            {
                this._UndoStack.push(new TextState(currentText, this._CaretLine, this._CaretColumn));
                this._RedoStack.splice(0);

                if (this._UndoStack.length > this._MaxUndoStates)
                {
                    this._UndoStack.splice(0, 1);
                }
            }

            this._Text = text;
        }
    }

    Undo()
    {
        if (this._UndoStack.length > 0)
        {            
            //save the current state to the redo stack
            this._RedoStack.push(new TextState(this._Text, this._CaretLine, this._CaretColumn));

            let state = this._UndoStack.pop();

            this.SetCaretLineAndColumn(state.CaretLine, state.CaretColumn);
            this._Text = state.Text;
        }
    }

    Redo()
    {
        if (this._RedoStack.length > 0)
        {            
            //save the current state to the undo stack
            this._UndoStack.push(new TextState(this._Text, this._CaretLine, this._CaretColumn + 1));
            
            let state = this._RedoStack.pop();            
            
            this.SetCaretLineAndColumn(state.CaretLine, state.CaretColumn + 1);
            this._Text = state.Text;
        }
    }

    public set CaretStyle(style: Style)
    {
        this._CaretStyle = style;
    }

    public set TextSelectionStyle(style: Style)
    {
        this._TextSelectionStyle = style;
    }

    Paint(renderer: IRenderer)
    {
        super.Paint(renderer);

        if (this._CaretVisible == true)
        {
            if (this._CaretStyle != null)
            {
                this._CaretStyle.RenderStyleClassAtIndex(renderer, 0, this._CaretBounds);
            }
        }

        if ((this._TextSelectionBegin != -1) && (this._TextSelectionEnd != -1))
        {
            if (this._TextSelectionStyle != null)
            {
                for (let i = 0; i < this._TextSelectionBounds.length; i++)
                {
                    this._TextSelectionStyle.RenderStyleClassAtIndex(renderer, 0, this._TextSelectionBounds[0]);
                }
            }
        }		
    }

    Tick(time: number)
    {
        if (this.Focused == true)
        {
            let difference = time - this._PreviousTime;

            if ((difference / 1000) > 6000)
            {
                this._PreviousTime = time;
                this._CaretVisible = !this._CaretVisible;
                this.RequestPaint();
            }
        }
        else
        {
            this._CaretVisible = false;
        }

        super.Tick(time);
    }

    SetSize(width: number, height: number)
    {
        super.SetSize(width, height);

        this._CaretBounds.Width = width;
        this._CaretBounds.Height = height;
    }	

    SetPosition(x: number, y: number)
    {
        super.SetPosition(x, y);

        this._CaretBounds.X = x;
        this._CaretBounds.Y = y;
    }

    SetTextSelectionRange(begin: number, end: number)
    {
        if ((begin >= 0) && (begin < end) && (begin < this._Text.length) && (end > 0) && (end < this._Text.length))
        {
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

    ClearTextSelection()
    {
        this._TextSelectionBegin = -1;
        this._TextSelectionEnd = -1;

        this._TextSelectionBounds.splice(0);
    }
}