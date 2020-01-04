import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      sobre: [this.store.empresa.slogan, Validators.required]
    })
  }

}
