import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  columnas : string[]= ['nombre','localidad','direccion','telefono','modificar'];

  datos: Articulo[] = [new Articulo('Hospital Heller','Neuquen','Godoy 1549','2994490700'),
  new Articulo('Hosp. Castro Rendon','Neuquen','Buenos Aires 450','2994490800'),
  new Articulo('Hosp. Bouquet Roldan','Neuquen','Dr Planas 1915','2994438183'),
  new Articulo('Hosp. Cipoletti','Cipoletti','Venezuela 1550','2994470030'),

];

  articuloselect: Articulo = new Articulo (" "," "," ","");

 @ViewChild(MatTable) tabla1: MatTable<Articulo>;

 modificarFila(cod: number) {
  if (confirm("Seguro quiere modificar esta fila?")) {
    this.datos.splice(cod, 1);
    this.tabla1.renderRows();

  }
}


constructor(){}

  ngOnInit(): void {
  }

}
export class Articulo{
  constructor (public nombre: string, public localidad: string, public direccion: string, public telefono: string){}
}
