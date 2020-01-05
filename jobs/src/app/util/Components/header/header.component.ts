import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfModel } from 'src/app/store/pf-model';
import { PjModel } from 'src/app/store/pj-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;
  usuario: PfModel;
  tipo: string = "pf";

  constructor(private store: StoreService, private fb: FormBuilder, private router: Router) { 
    this.usuario = store.usuario;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  //loga o usuario ou empresa e armazena sua informação em store
  login(){

    let email = this.loginForm.get("email").value;
    let senha = this.loginForm.get("senha").value;

    if(this.tipo == "pf"){

      this.store.pfs.forEach(pf => {
        if(email == pf.email && senha == pf.senha){
          this.store.usuario = pf;
          this.store.usuarioLogado = true;
          this.router.navigate(['vagas']);
        }
      })
  
      if(!this.store.usuarioLogado){
        this.store.usuarioLogado = false;
        alert("dados incorretos")
      }

    }else if(this.tipo == "pj"){
      
      this.store.pjs.forEach(pj => {
        if(email == pj.email && senha == pj.senha){
          this.store.empresa = pj;
          this.store.empresaLogada = true;
          this.router.navigate(['vagas']);
        }
      })
  
      if(!this.store.empresaLogada){
        this.store.empresaLogada = false;
        alert("dados incorretos")
      }
    }

  }

encerrarSessao(){
  this.store.usuarioLogado = false;
  this.store.usuario = new PfModel();
  
  this.store.empresaLogada = false;
  this.store.empresa = new PjModel();
  
  this.router.navigate(['']);
}
voltarTela(){
  this.router.navigate(['']);
}

clickCadastrar(){
  this.router.navigate(['cadastro']);
}

abrirPerfil(){
  this.router.navigate(['perfil']);
}
abrirPerfilEmpresa(){
  this.router.navigate(['perfil-empresa']);
}

abrirVagas(){
  this.router.navigate(['vagas']);
}
abrirProfissionais(){
  this.router.navigate(['profissionais']);
}

//muda o tipo de login que será feito, pf ou pj
tipoLogin(s){
  this.tipo = s;
}

}
