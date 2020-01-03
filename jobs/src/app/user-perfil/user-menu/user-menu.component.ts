import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 menuList = [{"nome":"Editar Perfil","link":"#"},{"nome":"Candidatura","link":"#"},{"nome":"Dicas","link":"#"},]
  
 constructor(private store: StoreService) {
   }

  ngOnInit() {
  }

}
