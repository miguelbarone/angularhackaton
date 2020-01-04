import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PjModel } from 'src/app/store/pj-model';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {

  formEdicao: FormGroup;

  constructor(private store: StoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formEdicao = this.fb.group({
      nome: [this.store.empresa.nome, Validators.required],
      email: [this.store.empresa.email, Validators.required],
      senha: [this.store.empresa.senha, Validators.required],
      foto: [this.store.empresa.foto, Validators.required],
      slogan: [this.store.empresa.slogan, Validators.required]
    })
  }

  atualizar(){
    alert("atualizando")
    let atualizacao = new PjModel();
    let id = this.store.empresa.id;
    atualizacao.id = id;
    atualizacao.nome = this.formEdicao.get("nome").value;
    atualizacao.email = this.formEdicao.get("email").value;
    atualizacao.senha = this.formEdicao.get("senha").value;
    atualizacao.foto = this.formEdicao.get("foto").value;
    atualizacao.slogan = this.formEdicao.get("slogan").value;

    this.store.empresa = atualizacao;
    
    this.store.atualizarPj(atualizacao, atualizacao.id).subscribe(res => {
      alert("Empresa atualizada!");
      this.store.empresa = atualizacao;
      this.store.buscarPjs();
    });
  }

}
