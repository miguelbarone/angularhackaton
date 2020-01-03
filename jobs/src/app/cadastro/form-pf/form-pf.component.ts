import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfModel } from 'src/app/store/pf-model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-form-pf',
  templateUrl: './form-pf.component.html',
  styleUrls: ['./form-pf.component.css']
})
export class FormPfComponent implements OnInit {

  formPf: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: StoreService) { }

  ngOnInit() {
    this.formPf = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      foto: ['', Validators.required],
      sobre: ['', Validators.required]
  })
  }

  cadastrar(){
    let novoUsuario = new PfModel();
    novoUsuario.nome = this.formPf.get("nome").value;
    novoUsuario.email = this.formPf.get("email").value;
    novoUsuario.senha = this.formPf.get("senha").value;
    novoUsuario.foto = this.formPf.get("foto").value;
    novoUsuario.sobre = this.formPf.get("sobre").value;
    novoUsuario.candidaturas = [];

    this.store.addPf(novoUsuario).subscribe(res =>{
      alert("Cadastro concluído!");
      this.router.navigate(['']);
    })
      
  }
  


}
