import { Injectable, OnInit } from '@angular/core';
import { PfModel } from './pf-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VagaModel } from './vagas-model';
import { PjModel } from './pj-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnInit {

  //essa propriedade indica pra toda aplicação se existe ou não um usuario autenticado ativo
  usuarioLogado: boolean = false;
  empresaLogada: boolean = false;

  usuario: PfModel;
  vaga: VagaModel;
  pfs: Array<PfModel> = [];
  vagas: Array<VagaModel> = [];
  candidaturas: Array<VagaModel> = [];
  pjs: Array<PjModel> = [];
  empresa: PjModel;

  constructor(private http: HttpClient) {
    this.buscarPfs();
    this.buscarVagas();
    this.buscarPjs();
  }


  ngOnInit(): void {
  }

  //busca as pfs da api e armazena na store, se você precisa de usuarios acesse a propriedade pfs dessa classe
  buscarPfs(){
    this.pfs = [];
    this.http.get<PfModel[]>("http://localhost:3000/pfs").subscribe(res => {
      res.forEach(pf => {
        this.pfs.push(pf);
      })
    });
  }

  buscarPjs(){
    this.pjs = [];
    this.http.get<PjModel[]>("http://localhost:3000/pjs").subscribe(res => {
      res.forEach(pj => {
        this.pjs.push(pj);
      })
    });
    console.log(this.pjs)
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
    return this.http.post("http://localhost:3000/pfs",user);
  }

  //atualiza dados da pf
  atualizarPf(atualizacao: PfModel, id): Observable<PfModel>{
    return this.http.put<PfModel>("http://localhost:3000/pfs/" + id, atualizacao);
  }

  //metodo não faz requisição, apenas com dados existentes na store ele mina as candidaturas do user logado
  preencherCandidaturas(){
    this.candidaturas = [];
    this.usuario.candidaturas.forEach(candidatura => {
      this.vagas.forEach(vaga => {
        if(vaga.id == candidatura){
          this.candidaturas.push(vaga);
        }
      })
    })
  }

  atualizarPj(atualizacao, id){
    return this.http.put<PjModel>("http://localhost:3000/pjs/" + id, atualizacao);
  }


}
