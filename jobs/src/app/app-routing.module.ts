import { UserEditFormComponent } from './user-perfil/user-edit-form/user-edit-form.component';
import { UserContainerComponent } from './user-perfil/user-container/user-container.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasListComponent } from './vagas/vagas-list/vagas-list.component';
import { LoginComponent } from './inicio/login/login.component';
import { GuardasService } from './guardas/guardas.service';
import { GuardaDeslogadorService } from './guardas/guarda-deslogador.service';
import { VagaInfoComponent } from './vagas/vaga-info/vaga-info.component';
import { TelaCadastroComponent } from './cadastro/tela-cadastro/tela-cadastro.component';
import { CandidaturasComponent } from './user-perfil/candidaturas/candidaturas.component';
import { ProfissionaisListComponent } from './empresa/profissionais-list/profissionais-list.component';
import { PerfilEmpresaComponent } from './empresa/perfil-empresa/perfil-empresa.component';
import { GuardaEmpresaService } from './guardas/guarda-empresa.service';


const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [GuardaDeslogadorService]},
  {path: 'vagas', component: VagasListComponent, canActivate: [GuardasService]},
  {path: 'vaga-info', component: VagaInfoComponent},
  {path: 'cadastro', component: TelaCadastroComponent},
  {path: 'perfil', component: UserContainerComponent, canActivate: [GuardasService], children:[
    {path: '', component: UserEditFormComponent},
    {path: 'candidaturas', component: CandidaturasComponent}
  ]},
  {path: 'candidaturas', component: CandidaturasComponent, canActivate: [GuardasService]},
  {path: 'profissionais', component: ProfissionaisListComponent, canActivate: [GuardaEmpresaService]},
  {path: 'perfil-empresa', component: PerfilEmpresaComponent, canActivate: [GuardaEmpresaService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
