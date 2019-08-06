import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  constructor() { }
  @Input() aulasArreglo: Array<string>

  ngOnInit() {
  }

}