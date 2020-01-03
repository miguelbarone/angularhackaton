import { VagaModel } from "../../../store/vagas-model";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() vagaModel:VagaModel;
  constructor() { }

  ngOnInit() {
   console.log(this.vagaModel)
  }

}
