import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//componentes 
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';

@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent, InputComponent,
    PaisTablaComponent],
  exports: [
    PorCapitalComponent,
     PorPaisComponent,
      PorRegionComponent, 
      VerPaisComponent,
    ],
  imports: [
CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
