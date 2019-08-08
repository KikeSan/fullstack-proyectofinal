import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { IAula } from './i-aula';

@Injectable({
	providedIn: "root"
})
export class AulasService {
  private aula: IAula[] = [
		{nombre:"Aula 01",pabellon:"H"},
		{nombre:"Aula 03",pabellon:"A"},
		{nombre:"Aula 02",pabellon:"C"},
		{nombre:"Aula 02",pabellon:"C"},
		{nombre:"Laboratorio Quimica",pabellon:"A"},
		{nombre:"Aula 10",pabellon:"D"},
		{nombre:"Auditorio 2",pabellon:"E"},
		{nombre:"Aula 01",pabellon:"A"},
		{nombre:"Aula 02",pabellon:"H"},
		{nombre:"Laboratorio Informática",pabellon:"A"},
		{nombre:"Laboratorio de Química",pabellon:"C"}
  ]
	
	constructor(private logService: LogService){

	}

	listar():Array<IAula>{
		this.logService.registrar("Acción: Listar")
		return Object.assign([], this.aula)
	}
	/* insertar(alumno:IAula):void{
		this.logService.registrar("Acción: Registrar")
		this.aula.unshift(alumno)
	} */
}