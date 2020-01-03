import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { VagaService } from "../../Services/vaga.service";
import { VagaModel } from 'src/app/store/vagas-model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent implements OnInit {

  vagas: VagaModel[];
  vaga: VagaModel;

  tipoContrato:string = "";
  tecnologia:string = "";

  constructor(private store: StoreService, private vs: VagaService, private ss: SearchService) { 
    this.vagas = store.vagas;
  }

  ngOnInit() {
  }

  filtrar(){

    if(this.tipoContrato != "" && this.tecnologia != ""){
      this.vagas = this.ss.filtrarPorContratoETecnologia(this.tecnologia, this.tipoContrato);
      console.log(this.ss.filtrarPorContratoETecnologia(this.tecnologia, this.tipoContrato));
    }else{
      alert("porra nenhuma")
    }
  
  }

}
