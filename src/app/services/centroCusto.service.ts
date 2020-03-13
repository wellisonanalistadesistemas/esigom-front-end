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
    return this.http.get<CentroCusto>(`operador/centrosCusto/`);
  }
  pesquisar(params) {
    return this.http.get(`operador/centrosCusto`, { params });
  }

  alterar(id: number, dto: CentroCusto) {
    return this.http.put(`operador/centrosCusto/` + id, dto);
  }

  salvar(centroCusto: CentroCusto): Observable<CentroCusto> {
    return this.http.post<CentroCusto>(`operador/centrosCusto`, centroCusto);
  }

  excluir(id: number) {
    return this.http.delete(`operador/centrosCusto/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<CentroCusto>(`operador/centrosCusto/` + id);
  }

}
