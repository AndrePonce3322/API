import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Funciones
  Move(body: HTMLBodyElement, puntero: HTMLDivElement) {
    body.addEventListener('mousemove', (e) => {
      let posicionX = e.pageX - 4;
      let posicionY = e.pageY - 4;
      puntero.style.top = `${posicionY}px`;
      puntero.style.left = `${posicionX}px`;

    });
  }

  ngOnInit(): void {}

}
