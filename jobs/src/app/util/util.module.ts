import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BuscaComponent } from './Components/busca/busca.component';
import { CardsComponent } from './Components/cards/cards.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscaComponent, CardsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[HeaderComponent, FooterComponent, BuscaComponent,CardsComponent]
})
export class UtilModule { }
