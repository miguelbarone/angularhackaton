import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  opcao:string;
  
  constructor() { }

  ngOnInit() {
  }
  
  
  mostra(){
    console.log(this.opcao);
  }

}
