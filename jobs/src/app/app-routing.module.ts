import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasListComponent } from './vagas/vagas-list/vagas-list.component';
import { LoginComponent } from './inicio/login/login.component';
import { GuardasService } from './guardas/guardas.service';
import { GuardaDeslogadorService } from './guardas/guarda-deslogador.service';
import { VagaInfoComponent } from './vagas/vaga-info/vaga-info.component';


const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [GuardaDeslogadorService]},
  {path: 'vagas', component: VagasListComponent, canActivate: [GuardasService]},
  {path: 'vaga-info', component: VagaInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
