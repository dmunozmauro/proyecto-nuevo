import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  public compo: string;
  public formulario2: FormGroup;
  constructor() { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario2 = new FormGroup({
      componente: new FormControl(this.compo, Validators.required)
    });
  }

}
