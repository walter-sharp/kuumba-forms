import { Control } from "../Controls/Control"

export interface ILayoutEngine
{
    PerformLayout(control: Control);
}