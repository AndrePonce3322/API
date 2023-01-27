import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameGroup!: FormGroup;
  resolverData = [];

  constructor(private readonly builder: FormBuilder, private readonly navegador: Router, private readonly leerResolver: ActivatedRoute) {}

  ngOnInit(): void {
    this.nameGroup = this.Builder();
    this.resolverData = this.leerResolver.snapshot.data['DataResolver'];
  }

  // Constructor del form
  Builder() {
    return this.builder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      ciudad: ['', [Validators.required]]
    });
  }

  mensaje = false;  // Mostrar mensaje de "Data enviada!"
  enviar() {
    this.navegador.navigate(['contacts'], { queryParams: { name: this.nameGroup.value.name}});

    this.mensaje = true;
    this.nameGroup.reset();
  }
}