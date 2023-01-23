import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosOutPutService {

  @Output() enviar = new EventEmitter<any>();

  constructor() {}
}
