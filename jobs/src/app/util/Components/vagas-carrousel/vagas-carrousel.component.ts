import { VagaService } from '../../Services/vaga.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas-carrousel',
  templateUrl: './vagas-carrousel.component.html',
  styleUrls: ['./vagas-carrousel.component.css']
})
export class VagasCarrouselComponent implements OnInit {
  vagaService:VagaService = new VagaService();
  constructor() { }

  ngOnInit() {

  }

}
