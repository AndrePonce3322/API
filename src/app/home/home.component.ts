import { Component, OnInit } from '@angular/core';
import { ServiciosOutPutService } from '../servicios-out-put.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrar:string[] = [];

  constructor(private recibir: ServiciosOutPutService){}

  ngOnInit(): void {
    this.recibir.enviar.subscribe(data=>{
      console.log('data recibida', data);
      this.mostrar.push(data);
    })
  }

}
