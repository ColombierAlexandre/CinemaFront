export class Place{

    private _idPlace : number;
    private _numPlace : number;
    private _isUsed : boolean;

    get idPlace() : number {
        return this._idPlace;
    }

    set idPlace(value : number) {
        this._idPlace = value;
    }

    get numPlace() : number {
        return this._numPlace;
    }

    set numPlace(value : number) {
        this._numPlace = value;
    }
    get isUsed() : boolean {
        return this._isUsed;
    }

    set isUsed(value : boolean) {
        this._isUsed = value;
    }

    constructor(idPlace : number, numPlace : number, isUsed : boolean){
        this._idPlace = idPlace;
        this._numPlace = numPlace;
        this._isUsed = isUsed;
    }
}