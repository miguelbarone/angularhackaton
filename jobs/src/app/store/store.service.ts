import { Injectable, OnInit } from '@angular/core';
import { PfModel } from './pf-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VagaModel } from './vagas-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnInit {

  //essa propriedade indica pra toda aplicação se existe ou não um usuario autenticado ativo
  usuarioLogado: boolean = false;

  usuario: PfModel;
  vaga: VagaModel;
  pfs: Array<PfModel> = [];
  vagas: Array<VagaModel> = [];

  constructor(private http: HttpClient) {
    this.buscarPfs();
    this.buscarVagas();
  }


  ngOnInit(): void {
  }

  //busca as pfs da api e armazena na api, se você precisa de usuarios acesse a propriedade pfs dessa classe
  buscarPfs(){
    this.pfs = [];
    this.http.get<PfModel[]>("http://localhost:3000/pfs").subscribe(res => {
      res.forEach(pf => {
        this.pfs.push(pf);
      })
    });
  }

  //busca as vagas da api e armazena na store.
  buscarVagas(){
    this.vagas = [];
    this.http.get<VagaModel[]>("http://localhost:3000/vagas").subscribe(res => {
      res.forEach(vaga => {
        this.vagas.push(vaga);
      })
    });
  }
  //adicionar usuario Pf
      addPf(user: PfModel): Observable<any> {
     return this.http.post("http://localhost:3000/pfs",user)
  }
}
