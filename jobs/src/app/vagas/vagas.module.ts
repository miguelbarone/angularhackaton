import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasListComponent } from './vagas-list/vagas-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VagasListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class VagasModule { }
