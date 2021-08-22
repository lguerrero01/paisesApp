import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public termino: string ='hola mundo';
  constructor() { }

  public buscar(){
    console.log(this.termino)
  }
  ngOnInit(): void {
  }

}
