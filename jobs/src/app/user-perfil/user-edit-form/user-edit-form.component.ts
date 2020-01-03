import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StoreService } from 'src/app/store/store.service';
import { PfModel } from 'src/app/store/pf-model';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  formEdicao: FormGroup;

  constructor(private store: StoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formEdicao = this.fb.group({
      nome: [this.store.usuario.nome, Validators.required],
      email: [this.store.usuario.email, Validators.required],
      senha: [this.store.usuario.senha, Validators.required],
      foto: [this.store.usuario.foto, Validators.required],
      sobre: [this.store.usuario.sobre, Validators.required]
    })
  }

  atualizar(){
    let atualizacao = new PfModel();
    let id = this.store.usuario.id;
    atualizacao.nome = this.formEdicao.get("nome").value;
    atualizacao.email = this.formEdicao.get("email").value;
    atualizacao.senha = this.formEdicao.get("senha").value;
    atualizacao.foto = this.formEdicao.get("foto").value;
    atualizacao.sobre = this.formEdicao.get("sobre").value;
    atualizacao.candidaturas = this.store.usuario.candidaturas;

    this.store.usuario = atualizacao;
  }

}
