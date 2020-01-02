import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscaComponent } from './busca/busca.component';
import { VagasCarrouselComponent } from './vagas-carrousel/vagas-carrousel.component';
import { CardsComponent } from './cards/cards.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscaComponent, VagasCarrouselComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent, BuscaComponent, VagasCarrouselComponent,CardsComponent]
})
export class UtilModule { }
