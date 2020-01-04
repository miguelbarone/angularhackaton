import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-profissionais-list',
  templateUrl: './profissionais-list.component.html',
  styleUrls: ['./profissionais-list.component.css']
})
export class ProfissionaisListComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

}
