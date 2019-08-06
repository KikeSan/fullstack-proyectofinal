import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() closeSession = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  cerrar(){
    this.closeSession.emit(false)
  }
}