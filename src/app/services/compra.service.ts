import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Compra } from '../model/compra';

@Injectable({
  providedIn: 'root'
})

export class CompraService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Compra> {
    return this.http.get<Compra>(`compras`);
  }

  getAllNaoPaginado(): Observable<Compra> {
    return this.http.get<Compra>(`compras/`);
  }

  pesquisar(params) {
    return this.http.get(`compras`, { params });
  }

  alterar(id: number, compra: Compra) {
    return this.http.put(`compras/` + id, compra);
  }

  salvar(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`compras`, compra);
  }

  excluir(id: number) {
    return this.http.delete(`compras/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Compra>(`compras/` + id);
  }

}
