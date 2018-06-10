export enum PropertyTypes
{
    Integer, 
    Float, 
    String, 
    Boolean, 
    Colour, 
    Rect, 
    Point, 
    Dimension, 
    Brush
}

export class Property
{
    Name: string;
    Value: string;
    Type: PropertyTypes;
}