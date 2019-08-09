import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("formulario",{static:true}) f:NgForm
  
  @Output() onLogged = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  loguearse(){
    this.onLogged.emit(true)
  }

  registrar(){
    if(this.f.valid){
      console.log(this.f.value);
      console.log(this.f.form.getRawValue());
      console.log('Valido');
      this.f.form.reset()
    }else{
      console.log('InValido');
    }
  }

}