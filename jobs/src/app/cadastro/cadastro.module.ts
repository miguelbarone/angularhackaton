import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { FormPfComponent } from './form-pf/form-pf.component';
import { FormPjComponent } from './form-pj/form-pj.component';



@NgModule({
  declarations: [TelaCadastroComponent, FormPfComponent, FormPjComponent],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
