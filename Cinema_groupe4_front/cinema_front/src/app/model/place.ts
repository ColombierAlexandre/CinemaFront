export class Place{
    private _idPlace : number;
    private _numPlace : number;
    private _isUsed : boolean;
    private _programmationId : number;

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

    get idPlace() : number {
        return this._idPlace;
    }

    set idPlace(value : number) {
        this._idPlace = value;
    }

    get programmationId() : number {
        return this._programmationId;
    }

    set programmationId(value : number) {
        this._programmationId = value;
    }


    constructor(numPlace : number, isUsed : boolean, idPlace : number, programmationId : number){
        this._numPlace = numPlace;
        this._isUsed = isUsed;
        this._idPlace = idPlace;
        this._programmationId = programmationId;
    }
}