import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Fornecedor } from '../model/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`operador/fornecedores`);
  }

  getAllNaoPaginado(): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`operador/fornecedores/`);
  }

  pesquisar(params) {
    return this.http.get(`operador/fornecedores`, { params });
  }

  alterar(id: number, dto: Fornecedor) {
    return this.http.put(`operador/fornecedores/` + id, dto);
  }

  salvar(perfil: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`operador/fornecedores`, perfil);
  }

  excluir(id: number) {
    return this.http.delete(`operador/fornecedores/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Fornecedor>(`operador/fornecedores/` + id);
  }

}
