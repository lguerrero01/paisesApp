import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public termino: string ='hola mundo';
  public error: boolean = false;
  constructor( private paisService: PaisService) { }

  public buscar(){
    this.error = false;

    this.paisService.buscarPais(this.termino)
    .subscribe((res:any)  => {
      console.log(res) 
    }), (err) => {
      this.error = true;
    }

  }

  ngOnInit(): void {
  }

}
