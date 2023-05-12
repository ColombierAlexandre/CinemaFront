import { Film } from "./film";
import { Place } from "./place";
import { Salle } from "./salle";

export class Programmation{

    private _idProgrammation : number;
	private _dateHeureProg : Date;
	private _film : Film;
	private _salle : Salle;
	private _listePlaces :Place[];

    get idProgrammation() : number {
        return this._idProgrammation;
    }

    set idProgrammation(value : number) {
        this._idProgrammation = value;
    }

    get dateHeureProg() : Date {
        return this._dateHeureProg;
    }

    set dateHeureProg(value : Date) {
        this._dateHeureProg = value;
    }

    get film() : Film {
        return this._film;
    }

    set film(value : Film) {
        this._film = value;
    }

    get salle() : Salle {
        return this._salle;
    }

    set salle(value : Salle) {
        this._salle = value;
    }

    get listePlaces() : Place[] {
        return this._listePlaces;
    }

    set listePlaces(value : Place[]) {
        this._listePlaces = value;
    }

    constructor(idProgrammation : number, dateHeureProg : Date, film : Film, salle : Salle, listePlaces :Place[]){
        this._idProgrammation = idProgrammation;
        this._dateHeureProg = dateHeureProg;
        this._film = film;
        this._salle = salle;
        this._listePlaces = listePlaces;
    }
}