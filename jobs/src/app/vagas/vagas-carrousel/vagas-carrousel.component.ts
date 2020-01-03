import { VagaService } from '../../Services/vaga.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-vagas-carrousel',
  templateUrl: './vagas-carrousel.component.html',
  styleUrls: ['./vagas-carrousel.component.css']
})
export class VagasCarrouselComponent implements OnInit {

  constructor(private vagaService:VagaService) {
  }

  ngOnInit() {

  }

}
