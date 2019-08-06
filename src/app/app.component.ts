import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logueado: boolean = false
  aulas: Array<string> = ["Aula A", 'Aula C', "Aula F", "Aula G", "Aula H", "Aula J", "Laboratorio 3", "Aula L", "Laboratorio 5", "Sala Principal"]

  validar(valor) {
    this.logueado = valor
  }
}