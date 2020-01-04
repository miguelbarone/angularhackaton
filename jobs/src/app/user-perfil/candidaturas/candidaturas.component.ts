import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-candidaturas',
  templateUrl: './candidaturas.component.html',
  styleUrls: ['./candidaturas.component.css']
})
export class CandidaturasComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

}
