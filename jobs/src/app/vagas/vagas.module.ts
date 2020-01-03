import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasListComponent } from './vagas-list/vagas-list.component';
import { RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { VagaInfoComponent } from './vaga-info/vaga-info.component';



@NgModule({
  declarations: [VagasListComponent, VagaInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilModule
  ]
})
export class VagasModule { }
