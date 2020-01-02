import { vagasModel } from '../../vagasModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() vagaModel:vagasModel
  constructor() { }

  ngOnInit() {
   console.log(this.vagaModel)
  }

}
