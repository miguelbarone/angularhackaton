import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: StoreService, private fb: FormBuilder) { }

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

    let autenticado = false;

    this.store.pfs.forEach(pf => {
      if(email == pf.email && senha == pf.senha){
        autenticado = true;
        this.store.usuario = pf;
        alert("logado " + this.store.usuario.nome);
      }
    })

    if(!autenticado){
      autenticado = false;
      alert("dados incorretos")
    }
  }
}
