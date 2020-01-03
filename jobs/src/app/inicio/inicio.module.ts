import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UtilModule } from '../util/util.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilModule
  ]
})
export class InicioModule { }
