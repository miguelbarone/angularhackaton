import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VagaModel } from '../store/vagas-model';

@Injectable({
  providedIn: 'root'
})
export class VagasListService {

  //propriedade guarda a vaga clicada pelo usuario para que o componente vaga-info possa renderizar suas infos
  vagaClicada: VagaModel;

  constructor(private router: Router) { }

  abrirVaga(vaga){
    this.vagaClicada = vaga;
    this.router.navigate(['vaga-info']);
  }

}
