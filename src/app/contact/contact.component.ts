import { Component} from "@angular/core";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class contactComponent {
    constructor(){}

    agregar!:string;
    buscador!:string;

    contacts:string[] = [
        'Juan','Carlos','Pedro','Carla','Abigayl','Lisa','Sol angie'
    ];

    Agregar(valor: string){
        this.contacts.push(valor.toLowerCase());
        this.agregar = ''
    }

    contactSeleccion!:string;

    EliminarSeleccion(){
        this.contactSeleccion = '';
    }

    ContactSelect(seleccion:string){
        this.contactSeleccion=seleccion;
    }
    Update(valor: string){
        alert(`Updating ${valor}...`);
    }
    Delete(valor: string){
        alert(`Deleting ${valor}...`);
    }



}