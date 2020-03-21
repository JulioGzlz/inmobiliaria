import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CasasComponent } from './casas/casas.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { AsesoresComponent } from './asesores/asesores.component';



@NgModule({
  declarations: [
    AppComponent,
    CasasComponent,
    DepartamentosComponent,
    AsesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
