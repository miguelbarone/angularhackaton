import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pj',
  templateUrl: './form-pj.component.html',
  styleUrls: ['./form-pj.component.css']
})
export class FormPjComponent implements OnInit {

  formPj: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPj = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
  })
  }

  cadastrar(){
    let empresa = this.formPj.get("nome").value;
    alert(empresa);
  }

}
