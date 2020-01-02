import { Injectable, OnInit } from '@angular/core';
import { PfModel } from './pf-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnInit {
  
  usuario: PfModel;
  pfs: Array<PfModel> = [];
  
  constructor(private http: HttpClient) {
    this.buscarPfs();
  }
  
  ngOnInit(): void {
  }

  //busca as pfs da api e armazena na api, se você precisa de usuarios acesse a propriedade pfs dessa classe
  buscarPfs(){
    this.pfs = [];
    this.http.get<PfModel[]>("http://localhost:3000/pfs").subscribe(res => {
      res.forEach(pf => {
        this.pfs.push(pf);
      })
      console.log(this.pfs);
    });
  }
}
