import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-candidaturas',
  templateUrl: './candidaturas.component.html',
  styleUrls: ['./candidaturas.component.css']
})
export class CandidaturasComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  desistirVaga(vaga){


    if(confirm("Deseja mesmo desistir da vaga na " + vaga.empresa + "?")) {
      let atualizacao = this.store.usuario; 
      let candidaturasAtualizada = [];
  
      atualizacao.candidaturas.forEach(id => {
        if(id != vaga.id){
          candidaturasAtualizada.push(id);
        }
      });
  
      atualizacao.candidaturas = candidaturasAtualizada;
  
      this.store.atualizarPf(atualizacao, this.store.usuario.id).subscribe(res => {
        this.store.preencherCandidaturas();
        alert("Você desistiu da vaga na " + vaga.empresa);
      });
    }
  }  
}
