import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissionaisListComponent } from './profissionais-list/profissionais-list.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfissionaisListComponent, PerfilEmpresaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
