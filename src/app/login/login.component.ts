import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiciosOutPutService } from '../servicios-out-put.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  nameGroup!: FormGroup;
  // Constructor builder
  constructor(private readonly builder: FormBuilder, private EnviarConService: ServiciosOutPutService) { }
  // Asignar el valor del builder con la funcion Builder
  ngOnInit(): void {
    this.nameGroup = this.Builder();
  }

  mensaje = false;

  enviar() {
    // Enviar al servicio
    this.EnviarConService.enviar.emit(this.nameGroup.value);
    this.nameGroup.reset();
    this.mensaje = true;

  }
  // Constructor del form
  Builder() {
    return this.builder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      ciudad: ['', [Validators.required]]
    });
  }

  // Variables de ciudades
  ciudades = ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma", "Comayagua", "Puerto Cortés", "El Progreso", "La Lima", "Danlí", "Olanchito", "Juticalpa", "Santa Rosa de Copán", "Tocoa", "La Paz", "Yoro", "San Francisco de Yojoa", "Choluteca", "La Entrada", "Cofradía", "Tela", "Santa Bárbara", "Roatán", "Utila", "Gualaco", "Santa Rosa de Aguan", "Trujillo", "La Esperanza", "Nacaome", "La Masica", "El Paraíso", "Siguatepeque", "Santa Lucía", "Nueva Ocotepeque", "Río Lindo", "La Masacre", "El Triunfo", "San Juan Pueblo", "El Negrito", "San Francisco de la Paz", "Bonito Oriental", "Marcala", "Santa Ana", "Intibucá", "Lepaterique", "Guaimaca", "San Juan del Sur", "Potrerillos", "Santa Cruz de Yojoa", "Santa María del Real"];


}
