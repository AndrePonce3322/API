import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment'

export interface Contacts {
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly API = enviroment.api;

  constructor(private readonly http: HttpClient) { }

  addNewContact(contact: string): Observable<Contacts> {
    const body = { name: contact };
    return this.http.post<Contacts>(this.API, body)
  }
  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.API)
  }
  updateContacts(contact: Contacts): Observable<void> { 
    const body = {name: contact.name};
    return this.http.put<void>(`${this.API}/${contact._id}`,body)
  }
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`)
  }

}
