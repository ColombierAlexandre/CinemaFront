export class Utilisateur{ 

    private _id : number;
	private _email : string;
	private _motDePasse : string;
	private _nom : string;
	private _prenom : string;
	private _ville : string;
	private _numeroEtRue : string;
	private _codePostal : number;
	private _numeroCB : number;
	private _criptogramme : number;
	private _dateExpiration : Date;

    get id() : number {
        return this._id;
    }

    set id(value : number) {
        this._id = value;
    }

    get email() : string {
        return this._email;
    }

    set email(value : string) {
        this._email = value;
    }
    
    get motDePasse() : string {
        return this._motDePasse;
    }

    set motDePasse(value : string) {
        this._motDePasse = value;
    }

    get nom() : string {
        return this._nom;
    }

    set nom(value : string) {
        this._nom = value;
    }

    get prenom() : string {
        return this._prenom;
    }

    set prenom(value : string) {
        this._prenom = value;
    }

    get ville() : string {
        return this._ville;
    }

    set ville(value : string) {
        this._ville = value;
    }
    get numeroEtRue() : string {
        return this._numeroEtRue;
    }

    set numeroEtRue(value : string) {
        this._numeroEtRue = value;
    }

    get codePostal() : number {
        return this._codePostal;
    }

    set codePostal(value : number) {
        this._codePostal = value;
    }

    get numeroCB() : number {
        return this._numeroCB;
    }

    set numeroCB(value : number) {
        this._numeroCB = value;
    }

    get criptogramme() : number {
        return this._criptogramme;
    }

    set criptogramme(value : number) {
        this._criptogramme = value;
    }

    get dateExpiration() : Date {
        return this._dateExpiration;
    }

    set dateExpiration(value : Date) {
        this._dateExpiration = value;
    }

    constructor( id : number, email : string, motDePasse : string, nom : string, prenom : string, 
        ville : string, numeroEtRue : string, codePostal : number, numeroCB : number, 
        criptogramme : number, dateExpiration : Date){
        this._id = id;
        this._email = email;
        this._motDePasse = motDePasse;
        this._nom = nom;
        this._prenom = prenom;
        this._ville = ville;
        this._numeroEtRue = numeroEtRue;
        this._codePostal = codePostal;
        this._numeroCB = numeroCB;
        this._criptogramme = criptogramme;
        this._dateExpiration = dateExpiration;
    }
}