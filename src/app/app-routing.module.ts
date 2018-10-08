import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
/* import { AuthGuard } from 'app/authGuard.guard'; */


const routes: Routes = [
  {
  path: 'formulario',
  component: FormularioComponent,
/*   canActivate: [AuthGuard],
 */  data: { state: 'formulario'}
  },
  {
    path: 'formulario2',
    component: Formulario2Component,
  /*   canActivate: [AuthGuard],
   */  data: { state: 'formulario2'}
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
