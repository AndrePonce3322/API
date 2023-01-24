import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

// Valores del resolver array
const ciudades = ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma", "Comayagua", "Puerto Cortés", "El Progreso", "La Lima", "Danlí", "Olanchito", "Juticalpa", "Santa Rosa de Copán", "Tocoa", "La Paz", "Yoro", "San Francisco de Yojoa", "Choluteca", "La Entrada", "Cofradía", "Tela", "Santa Bárbara", "Roatán", "Utila", "Gualaco", "Santa Rosa de Aguan", "Trujillo", "La Esperanza", "Nacaome", "La Masica", "El Paraíso", "Siguatepeque", "Santa Lucía", "Nueva Ocotepeque", "Río Lindo", "La Masacre", "El Triunfo", "San Juan Pueblo", "El Negrito", "San Francisco de la Paz", "Bonito Oriental", "Marcala", "Santa Ana", "Intibucá", "Lepaterique", "Guaimaca", "San Juan del Sur", "Potrerillos", "Santa Cruz de Yojoa", "Santa María del Real"];

@Injectable({ providedIn: 'root' })

export class dataResolver implements Resolve<any>{
    resolve(): Observable<any> {
        return of(ciudades);
    }
}