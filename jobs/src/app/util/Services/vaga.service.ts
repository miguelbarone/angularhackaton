import { vagasModel } from "./../vagasModel";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class VagaService {
  vagas: vagasModel[] = [];
  constructor() {
    this.vagas[0] = {
      id: 1,
      nome: "string",
      empresa: "string",
      descricao: "string",
      salario: 1200,
      beneficios: "string",
      requisitos: "string"
    };
    this.vagas[1] = {
      id: 2,
      nome: "string",
      empresa: "string",
      descricao: "string",
      salario: 1200,
      beneficios: "string",
      requisitos: "string"
    };
  }
}
