import { VagasCarrouselComponent } from './vagas-carrousel/vagas-carrousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasListComponent } from './vagas-list/vagas-list.component';
import { RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { VagaInfoComponent } from './vaga-info/vaga-info.component';




@NgModule({
  declarations: [VagasListComponent, VagaInfoComponent,VagasCarrouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilModule
  ],
  exports: [VagasListComponent, VagaInfoComponent,VagasCarrouselComponent]
})
export class VagasModule { }
