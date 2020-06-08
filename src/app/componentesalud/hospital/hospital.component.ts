import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validator,Validators,FormArray} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})

export class HospitalComponent implements OnInit {


  nombreP :string;
  localidadP: string;
  domicilioP: string;
  telefonoP: string;

  constructor(private fb: FormBuilder,private route: ActivatedRoute) {}

  numeroParam: Number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      let tituloParam= params;
    });
  }

}
