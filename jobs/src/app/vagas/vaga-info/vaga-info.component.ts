import { Component, OnInit } from '@angular/core';
import { VagasListService } from '../vagas-list.service';

@Component({
  selector: 'app-vaga-info',
  templateUrl: './vaga-info.component.html',
  styleUrls: ['./vaga-info.component.css']
})
export class VagaInfoComponent implements OnInit {

  constructor(private vs: VagasListService) { }

  ngOnInit() {
  }

}
