import { Component, OnInit } from '@angular/core';
import { VagaService } from "../../Services/vaga.service";

@Component({
  selector: 'app-vaga-info',
  templateUrl: './vaga-info.component.html',
  styleUrls: ['./vaga-info.component.css']
})
export class VagaInfoComponent implements OnInit {

  constructor(private vs: VagaService) { }

  ngOnInit() {
  }

}
