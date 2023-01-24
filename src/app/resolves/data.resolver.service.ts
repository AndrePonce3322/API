import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

// Valores del resolver array
const tiposDeSaludosResolver = ['¡Hola!', '¡Buenos días!', '¿Que tal?'];

@Injectable({ providedIn: 'root' })

export class dataResolver implements Resolve<any>{
    resolve(): Observable<any> {
        return of(tiposDeSaludosResolver);
    }
}