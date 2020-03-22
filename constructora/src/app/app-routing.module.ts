import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartamentosComponent} from './departamentos/departamentos.component';
import {CasasComponent} from './casas/casas.component';
import {AsesoresComponent} from './asesores/asesores.component';

const routes: Routes = [
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'casas', component: CasasComponent},
  {path: 'asesores', component: AsesoresComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
