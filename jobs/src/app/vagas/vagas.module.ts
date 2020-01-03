import { VagasCarrouselComponent } from './vagas-carrousel/vagas-carrousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasListComponent } from './vagas-list/vagas-list.component';
import { RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { VagaInfoComponent } from './vaga-info/vaga-info.component';
import { FormsModule } from '@angular/forms';
import { UserPerfilModule } from '../user-perfil/user-perfil.module';

@NgModule({
  declarations: [VagasListComponent, VagaInfoComponent,VagasCarrouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilModule,
    FormsModule,
    UserPerfilModule
  ],
  exports: [VagasListComponent, VagaInfoComponent,VagasCarrouselComponent]
})
export class VagasModule { }
