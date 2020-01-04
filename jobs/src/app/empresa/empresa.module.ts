import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissionaisListComponent } from './profissionais-list/profissionais-list.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';



@NgModule({
  declarations: [ProfissionaisListComponent, PerfilEmpresaComponent],
  imports: [
    CommonModule
  ]
})
export class EmpresaModule { }
