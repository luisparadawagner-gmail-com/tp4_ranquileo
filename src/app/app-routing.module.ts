import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HospitalComponent} from './componentesalud/hospital/hospital.component';
import { MedicoComponent } from './componentesalud/medico/medico.component';
import { PacienteComponent } from './componentesalud/paciente/paciente.component';

const routes: Routes = [
{ path: 'hospital', component: HospitalComponent, 
  // children : [
  //    {
  //     path: 'paciente',
  //    component: PacienteComponent
  //  }
  //]


},
  {
  path: 'medico', component: MedicoComponent,
    


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
