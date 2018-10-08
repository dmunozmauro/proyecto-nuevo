import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public formulario: FormGroup;
  public valorQR: string;
  isDropup = true;
  constructor(
    private _ruta: Router
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombrePersona: new FormControl(this.valorQR, [Validators.required, Validators.pattern('[a-zA-Zñ ]*')]),
/*       apellidoPersona: new FormControl(this.apellido, [Validators.required, Validators.pattern('[a-zA-Zñ ]*')])
 */    });
  }

  irFormulario2() {
    this._ruta.navigate(['formulario2']);
  }
}
