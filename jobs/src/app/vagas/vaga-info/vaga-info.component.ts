import { Component, OnInit } from '@angular/core';
import { VagaService } from "../../Services/vaga.service";
import { StoreService } from 'src/app/store/store.service';
import { PfModel } from 'src/app/store/pf-model';

@Component({
  selector: 'app-vaga-info',
  templateUrl: './vaga-info.component.html',
  styleUrls: ['./vaga-info.component.css']
})
export class VagaInfoComponent implements OnInit {

  constructor(private vs: VagaService, private store: StoreService) { }

  ngOnInit() {
  }

  candidatar(vagaId){

    let novoUser = true;
    let atualizacao = this.store.usuario;
    
    if(atualizacao.candidaturas.length == 0){

      atualizacao.candidaturas.push(vagaId);
      
      this.store.atualizarPf(atualizacao, atualizacao.id).subscribe(res => {
        alert("Você acaba de se candidatar pra vaga!");
      })

      return;

    }else{
      atualizacao.candidaturas.forEach(id => {
        if(id == vagaId){
          novoUser = false;
          alert("Você já se candidatou pra essa vaga!");
        }
      })
    }

    
    if(novoUser){
      atualizacao.candidaturas.push(vagaId);
      
      this.store.atualizarPf(atualizacao, atualizacao.id).subscribe(res => {
        alert("Você acaba de se candidatar pra vaga!");
      })
    }

  }

}
