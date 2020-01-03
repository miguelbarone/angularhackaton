import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { VagaModel } from '../store/vagas-model';

@Injectable({
  providedIn: "root"
})
export class VagaService {
  vagas: VagaModel[] = [];
  vagaClicada: VagaModel;
  constructor(private router: Router) { }

  abrirVaga(vaga){
    this.vagaClicada = vaga;
    this.router.navigate(['vaga-info']);
  }
}
