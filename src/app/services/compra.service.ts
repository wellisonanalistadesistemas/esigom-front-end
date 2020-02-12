import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Compra } from '../model/compra';
import { CompraParcela } from '../model/compraParcela';

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


  alterarListaCompraParcela(lista: Array<CompraParcela>) {
    return this.http.put(`compras/alterarListaCompraParcelas`, lista);
  }


  salvar(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`compras`, compra);
  }

  excluir(id: number) {
    return this.http.delete(`compras/` + id);
  }

  incluirEmEstoque(id: number) {
    return this.http.post(`compras/incluirEmEstoque/` + id, "");
  }

  buscarPeloId(id: number) {
    return this.http.get<Compra>(`compras/` + id);
  }

  obterListaParcelasCompra(id: number) {
    return this.http.get<CompraParcela>(`compras/obterListaParcelasCompra/` + id);
  }

}
