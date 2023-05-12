export class Cinema{

    private _idCinema : number;
	private _nom : string;
	private _telephone : number;
	private _mail : string;
	private _rue : string;
	private _ville : string;
	private _codePostal : number;
    
    get idCinema() : number {
        return this._idCinema;
    }

    set idCinema(value : number) {
        this._idCinema = value;
    }

    get nom() : string {
        return this._nom;
    }

    set nom(value : string) {
        this._nom = value;
    }

    get telephone() : number {
        return this._telephone;
    }

    set telephone(value : number) {
        this._telephone = value;
    }

    get mail() : string {
        return this._mail;
    }

    set mail(value : string) {
        this._mail = value;
    }

    get rue() : string {
        return this._rue;
    }

    set rue(value : string) {
        this._rue = value;
    }

    get ville() : string {
        return this._ville;
    }

    set ville(value : string) {
        this._ville = value;
    }

    get codePostal() : number {
        return this._codePostal;
    }

    set codePostal(value : number) {
        this._codePostal = value;
    }

    constructor(idCinema : number, nom : string, telephone : number, mail : string, rue : string, ville : string, codePostal : number){
        this._idCinema = idCinema;
        this._nom = nom;
        this._telephone = telephone;
        this._mail = mail;
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }
}
