import { StoreService } from './../store/store.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { VagaModel } from '../store/vagas-model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  vagas: VagaModel[];
  constructor(private router: Router, private store: StoreService) {
    this.vagas = this.store.vagas;
  }
  vagaClicada: VagaModel;

  abrirVaga(vaga) {

    this.vagaClicada = vaga;
    this.router.navigate(['vaga-info']);
  }
}
