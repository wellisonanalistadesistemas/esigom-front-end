import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Perfil } from '../model/perfil';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`produtos`, { params });
  }

  alterar(id: number, dto: Produto) {
    return this.http.put(`produtos/` + id, dto);
  }

  salvar(produto: Produto): Observable<Perfil> {
    return this.http.post<Perfil>(`produtos`, produto);
  }

  excluir(id: number) {
    return this.http.delete(`produtos/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Perfil>(`produtos/` + id);
  }

}
