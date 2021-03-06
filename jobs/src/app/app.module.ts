import { UserPerfilModule } from './user-perfil/user-perfil.module';
import { UtilModule } from './util/util.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VagasModule } from './vagas/vagas.module';
import { InicioModule } from './inicio/inicio.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { EmpresaModule } from './empresa/empresa.module';

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
    InicioModule,
    UserPerfilModule,
    CadastroModule,
    EmpresaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
