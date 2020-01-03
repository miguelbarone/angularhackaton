import { Injectable } from '@angular/core';
import { VagaModel } from '../store/vagas-model';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  vagas: Array<VagaModel> = []
  vagasFiltradas: Array<VagaModel> = [];

  constructor(service: StoreService) {
    this.vagas = service.vagas;
   }

   filtrarPorContrato(TipoContrato: string): Array<VagaModel> {

    this.vagasFiltradas = [];

    for (let index = 0; index < this.vagas.length; index++) {
        
        if (TipoContrato == this.vagas[index].contrato) {
            
            this.vagasFiltradas.push(this.vagas[index]);
        }
        
    }

    console.log(this.vagasFiltradas);
    return this.vagasFiltradas;
}

filtrarPorTecnologia(TipoTecnologia: string){
    this.vagasFiltradas = [];

    for (let index = 0; index < this.vagas.length; index++) {
        if (TipoTecnologia == this.vagas[index].linguagem) {
            this.vagasFiltradas.push(this.vagas[index]);
        }  
    }
    console.log(this.vagasFiltradas);
    return this.vagasFiltradas;
}

filtrarPorContratoETecnologia(TipoTecnologia: string, TipoContrato: string){
    this.vagasFiltradas = [];

    for (let index = 0; index < this.vagas.length; index++) {
        if (TipoTecnologia === this.vagas[index].linguagem && TipoContrato === this.vagas[index].contrato ) {
            this.vagasFiltradas.push(this.vagas[index]);
        }  
    }
    console.log(this.vagasFiltradas);
    return this.vagasFiltradas;
}

filtrarPorSalrário(){


}
}
