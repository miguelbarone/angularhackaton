import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UtilModule } from '../util/util.module';
import { VagasModule } from "../vagas/vagas.module";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilModule,
    VagasModule
  ],
  exports:[LoginComponent]
})
export class InicioModule { }
