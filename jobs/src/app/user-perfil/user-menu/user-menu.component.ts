import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 menuList = [{"nome":"Editar Perfil","link":"#"},{"nome":"Candidatura","link":"#"},{"nome":"Dicas","link":"#"},]
  constructor() {
   }

  ngOnInit() {
  }

}
