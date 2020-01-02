import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  tiposContrato: string[];
  trampos: string[];
  contratoSelecionado: string;
  trampoSelecionado: string;

  constructor() { }

  ngOnInit() {
    this.tiposContrato = ['CLT', 'PJ'];
    this.trampos = ['JAVA','Typescript'];
    this.contratoSelecionado = null;
    this.trampoSelecionado = null;


   
  }
  
  
  mostra(){
    console.log(this.contratoSelecionado,this.trampoSelecionado);
 }

}
