import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(value: string[], args: string): string[]{

    if(!args){
      return value
    }

    let resultado:string[] = [];

    for(const valores of value){
      if(valores.toLowerCase().indexOf(args.toLowerCase())!=-1){
        resultado = [...resultado, valores];
      }
    }

    return resultado    

  }

}
