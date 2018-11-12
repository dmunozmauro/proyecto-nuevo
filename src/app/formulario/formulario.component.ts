import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RopaService } from '../service/ropa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [RopaService]
})
export class FormularioComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public direccion: string;
  public telefono: number;
  public formulario: FormGroup;
  public variable: string;
  constructor(
    private _ruta: Router,
    private _servicio: RopaService
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombrePersona: new FormControl(this.nombre, [Validators.required/* , Validators.pattern('[a-zA-Zñ ]*') */]),
      apellidoPersona: new FormControl(this.apellido, [Validators.required/* , Validators.pattern('[a-zA-Zñ ]*') */]),
      /* direccionPersona: new FormControl(this.direccion, [Validators.required]),
      telefonoPersona: new FormControl(this.telefono, [Validators.required, Validators.pattern('[1-0]')]) */
    });

    this._servicio.getUsuario().subscribe(result => {
      this.variable = result;
      console.log(this.variable);
    });
  }
}
