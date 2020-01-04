import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

}
