import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { VagasListService } from '../vagas-list.service';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent implements OnInit {

  constructor(private store: StoreService, private vs: VagasListService) { }

  ngOnInit() {
  }

}
