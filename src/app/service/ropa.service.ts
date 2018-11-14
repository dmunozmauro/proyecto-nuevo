import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()

export class RopaService {

    public url: string;

    constructor (
        private _peticion: Http
    ) {
        this.url = 'http://localhost:3000/familia';
    }

    getUsuario() {
        return this._peticion.get(this.url)
        .pipe(map(res => res.json()));
    }
}
