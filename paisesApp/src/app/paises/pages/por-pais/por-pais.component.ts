import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from './../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public paises: Country[] = [];
  public termino: string ='hola mundo';
  public error: boolean = false;
  constructor( private paisService: PaisService) { }

  public buscar( termino: string){
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe( (res)  => {
      this.paises = res 
    }), (err) => {
      this.error = true;
      this.paises = []; 
    }

  }

  ngOnInit(): void {
  }

}
