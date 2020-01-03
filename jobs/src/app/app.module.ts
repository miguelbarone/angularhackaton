import { UtilModule } from './util/util.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VagasModule } from './vagas/vagas.module';
import { InicioModule } from './inicio/inicio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilModule,
    HttpClientModule,
    VagasModule,
    InicioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
