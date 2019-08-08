import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AulasService } from '../aulas.service';
import { IAula } from '../i-aula';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AulasComponent implements OnInit {
  aulas: Array<IAula>

  constructor(private aulasService:AulasService) { }
  /* @Input() aulasArreglo: Array<string> */


  ngOnInit() {
  }
  listar(){
    this.aulas = this.aulasService.listar()
  }

}