import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { VagaService } from "../../Services/vaga.service";

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent implements OnInit {

  constructor(private store: StoreService, private vs: VagaService) { }

  ngOnInit() {
  }

}
