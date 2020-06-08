import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  @Input() nombreH: string;
  @Input() localidadH: string;
  @Input() domicilioH: string;
  @Input() telefonoH: string;

  constructor() { }

  ngOnInit(): void {
  }

}
