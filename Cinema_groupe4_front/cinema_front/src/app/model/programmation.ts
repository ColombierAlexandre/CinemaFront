import {Film} from "./film"
import {Salle} from "./salle"
import { Place } from "./place";



export class Programmation{
    private _idProgrammation : number;
    private _dateHeureProgrammation : Date;
    private _film : Film;
    private _salle : Salle;
    private _places : Place[];

    get places() : Place[] {
        return this._places;
    }

    set places(value : Place[]) {
    }

    get idProg() : number {
        return this._idProgrammation;
    }

    set idProg(value : number) {
        this._idProgrammation = value;
    }
    get dateHeureProg() : Date {
        return this._dateHeureProgrammation;
    }

    set dateHeureProg(value : Date) {
        this._dateHeureProgrammation = value;
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

    constructor(idProgrammation : number, dateHeureProgrammation : Date, film : Film, salle : Salle, places : Place[]){
        this._idProgrammation = idProgrammation;
        this._dateHeureProgrammation = dateHeureProgrammation;
        this._film = film;
        this._salle = salle;
        this._places = places;
    }
}