import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
 constructor(private store: StoreService, private router: Router) {
   }

  ngOnInit() {
  }

  abrirCandidaturas(){
    this.router.navigate(['candidaturas']);
  }

}
