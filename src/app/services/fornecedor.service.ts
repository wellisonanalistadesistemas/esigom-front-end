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
    return this.http.get<Fornecedor>(`fornecedores`);
  }

  getAllNaoPaginado(): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`fornecedores/`);
  }

  pesquisar(params) {
    return this.http.get(`fornecedores`, { params });
  }

  alterar(id: number, dto: Fornecedor) {
    return this.http.put(`fornecedores/` + id, dto);
  }

  salvar(perfil: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`fornecedores`, perfil);
  }

  excluir(id: number) {
    return this.http.delete(`fornecedores/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Fornecedor>(`fornecedores/` + id);
  }

}
