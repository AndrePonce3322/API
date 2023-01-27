import { Component, OnInit } from "@angular/core";
import { Contacts, DataService } from "../services/data.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class contactComponent implements OnInit {

    // Cosas del input 
    agregar!: string;
    buscador!: string;

    // Valores del contact, en el Crud
    contacts: Contacts[] = [];
    contactSelectedID!: string;
    nameContacts!: Contacts;


    constructor(private readonly dataSVC: DataService) { }

    ngOnInit(): void {
        this.dataSVC.getContacts().subscribe(
            res => { this.contacts = [...res] }
        )
    }

    Agregar(valorInput: string) {
        this.dataSVC.addNewContact(valorInput).subscribe(
            res => {
                this.contacts.push(res);
            }
        );
        this.RetirarSeleccion();
    }

    Delete(id: string) {
        this.RetirarSeleccion();
        if (confirm('¿Seguro que quieres eliminar?')) {
            this.dataSVC.deleteContact(id).subscribe(res => {
                const filter = this.contacts.filter(contactsId => contactsId._id != id);
                this.contacts = [...filter];
            })
        }
    }
    Update(nameSeleccionado: Contacts, changes: string): void {
        const contactos = {
            name: changes,
            _id: nameSeleccionado._id
        }

        this.dataSVC.updateContacts(contactos).subscribe(res => {
            const filter = this.contacts.filter(valores => valores._id != nameSeleccionado._id);
            this.contacts = [...filter,contactos];
            }
        )
    }

    Seleccionado(cadaContact: Contacts) {
        // Asignar contact selected al <li> que hagan click de los valores que estan en Contacts?.id
        this.contactSelectedID = cadaContact?._id;

        this.agregar = cadaContact?.name;
    }

    RetirarSeleccion(){
        this.agregar = '';
        this.contactSelectedID = '';
    }

}