import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { FormPfComponent } from './form-pf/form-pf.component';
import { FormPjComponent } from './form-pj/form-pj.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaCadastroComponent, FormPfComponent, FormPjComponent],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
