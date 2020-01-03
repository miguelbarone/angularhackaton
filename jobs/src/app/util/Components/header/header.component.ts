import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfModel } from 'src/app/store/pf-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;
  usuario: PfModel;

  constructor(private store: StoreService, private fb: FormBuilder, private router: Router) { 
    this.usuario = store.usuario;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  //loga o usuario e armazena sua informação em 'usuario', da classe store
  login(){

    let email = this.loginForm.get("email").value;
    let senha = this.loginForm.get("senha").value;

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
  }

encerrarSessao(){
  this.store.usuarioLogado = false;
  this.store.usuario = new PfModel();
  this.router.navigate(['']);
}

clickCadastrar(){
  this.router.navigate(['cadastro']);
}

abrirPerfil(){
  
  this.router.navigate(['perfil']);
  
}

abrirVagas(){
  this.router.navigate(['vagas']);
}

}
