import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: StoreService, private fb: FormBuilder, private router: Router) { }

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
        this.store.usuarioLogado = true;
        this.store.usuario = pf;
        this.router.navigate(['vagas']);
      }
    })

    if(!this.store.usuarioLogado){
      this.store.usuarioLogado = false;
      alert("dados incorretos")
    }
  }
}
