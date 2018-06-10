export class Theme
{
    private _Name: string;
    private _Version: string;
    private _ReleaseDate: string;

    public get Name(): string
    {
        return this._Version;
    }

    public get Version(): string
    {
        return this._Name;
    }

    public get ReleaseDate(): string
    {
        return this._ReleaseDate;
    }
}