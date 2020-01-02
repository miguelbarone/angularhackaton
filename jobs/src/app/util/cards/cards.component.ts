import { vagasModel } from './../vagasModel';
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-cards",
  template: `
    <div *ngIF="vaga" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{vaga.nome}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{vaga.empresa}}</h6>
        <p class="card-text">
          {{vaga.descricao}}
        </p>
        <p></p>
      </div>
    </div>
  `,
  styles: []
})
export class CardsComponent implements OnInit {
  vaga:vagasModel;

  ngOnInit() {

  }

}
