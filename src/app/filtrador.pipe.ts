import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from './services/data.service';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(contacts: Contacts[], args: string): Contacts[]{

    if(!args){
      return contacts
    }

    let resultado:Contacts[] = [];

    for(const valores of contacts){
      if(valores.name.toLowerCase().indexOf(args.toLowerCase())!=-1){
        resultado = [...resultado, valores];
      }
    }

    return resultado    

  }

}
