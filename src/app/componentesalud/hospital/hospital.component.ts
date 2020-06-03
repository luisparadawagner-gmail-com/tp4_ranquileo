import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validator,Validators,FormArray} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})

export class HospitalComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute) {}

  hospitalForm = this.fb.group({

    nombre: [" ", Validators.required],
    localidad:[''],
    direccion: [''],
    telefono:['']


  })

  submit() {
    this.hospitalForm.value;

		this.hospitalForm.setValue({
			nombre: 'Hospital Heller',
			localidad: 'Neuquen',
      direccion: 'Barrio Maronesse',
      telefono: '299',
		
		});

		this.hospitalForm.patchValue({ localidad: 'Neuquen' });
	}



 numeroParam: Number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      let tituloParam= params;
    });
  }

}
