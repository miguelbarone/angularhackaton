import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscaComponent } from './busca/busca.component';
import { VagasCarrouselComponent } from './vagas-carrousel/vagas-carrousel.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscaComponent, VagasCarrouselComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent, BuscaComponent, VagasCarrouselComponent]
})
export class UtilModule { }
