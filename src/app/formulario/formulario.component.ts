import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombrePersona: new FormControl(this.nombre, [Validators.required, Validators.pattern('[a-zA-Zñ ]*')]),
      apellidoPersona: new FormControl(this.apellido, Validators.required)
    });
  }

}
