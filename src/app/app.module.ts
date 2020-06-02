import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalComponent } from './componentesalud/hospital/hospital.component';
import { PacienteComponent } from './componentesalud/paciente/paciente.component';
import { MedicoComponent } from './componentesalud/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    PacienteComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
