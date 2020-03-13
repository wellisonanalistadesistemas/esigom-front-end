import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Conta } from '../model/conta';
import { ContaParcela } from '../model/contaParcela';

@Injectable({
  providedIn: 'root'
})

export class ContaService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`operador/contas`, { params });
  }

  alterar(id: number, dto: Conta) {
    return this.http.put(`operador/contas/` + id, dto);
  }

  alterarContaParcela(id: number, dto: ContaParcela) {
    return this.http.put(`operador/contas/alterarContaParcela/` + id, dto);
  }


  salvar(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(`operador/contas`, conta);
  }

  excluir(id: number) {
    return this.http.delete(`operador/contas/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Conta>(`operador/contas/` + id);
  }






}
