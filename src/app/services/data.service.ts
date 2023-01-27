import { Injectable } from '@angular/core';

export interface Contacts{
  _id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }
}
