import { Component, OnInit } from '@angular/core';
import { VagaModel } from 'src/app/store/vagas-model';
import { StoreService } from 'src/app/store/store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  
  vagas: VagaModel[];
  vaga: VagaModel;

  constructor(service: StoreService) { 

   this.vagas =  service.vagas;
  }

  ngOnInit() {

    
   
  }
  

}
