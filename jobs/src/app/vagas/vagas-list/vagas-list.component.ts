import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { VagaService } from "../../Services/vaga.service";
import { VagaModel } from 'src/app/store/vagas-model';
import { SearchService } from '../search.service';
import Swal from 'sweetalert2';

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

  }

  ngOnInit() {

  }

  filtrar(){

    if(this.tipoContrato != "" && this.tecnologia != ""){
      this.vagas = this.ss.filtrarPorContratoETecnologia(this.tecnologia, this.tipoContrato);

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha os dois filtros'
        //footer: '<a href>Why do I have this issue?</a>'
      });
    }

    if (this.vagas[0] == null) Swal.fire({
      title: 'Desculpe',
      text: 'Olá amigo(a), ainda não temos essa vaga',
      imageUrl: 'https://media0.giphy.com/media/l4Epe8gPvTodwd8CQ/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });


  }

}
