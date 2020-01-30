import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { CentroCusto } from '../model/centroCusto';

@Injectable({
  providedIn: 'root'
})

export class CentroCustoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<CentroCusto> {
    return this.http.get<CentroCusto>(`centrosCusto/todos`);
  }
  pesquisar(params) {
    return this.http.get(`centrosCusto`, { params });
  }

  alterar(id: number, dto: CentroCusto) {
    return this.http.put(`centrosCusto/` + id, dto);
  }

  salvar(centroCusto: CentroCusto): Observable<CentroCusto> {
    return this.http.post<CentroCusto>(`centrosCusto`, centroCusto);
  }

  excluir(id: number) {
    return this.http.delete(`centrosCusto/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<CentroCusto>(`centrosCusto/` + id);
  }

}
