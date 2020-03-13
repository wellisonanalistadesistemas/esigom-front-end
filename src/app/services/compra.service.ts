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
    return this.http.get<Compra>(`operador/compras`);
  }

  getAllNaoPaginado(): Observable<Compra> {
    return this.http.get<Compra>(`operador/compras/`);
  }

  pesquisar(params) {
    return this.http.get(`operador/compras`, { params });
  }

  alterar(id: number, compra: Compra) {
    return this.http.put(`operador/compras/` + id, compra);
  }

  alterarListaCompraParcela(lista: Array<CompraParcela>) {
    return this.http.put(`operador/compras/alterarListaCompraParcelas`, lista);
  }

  salvar(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`operador/compras`, compra);
  }

  adicionarAlterarCompraParcela(compraParcela: CompraParcela): Observable<CompraParcela> {
    return this.http.post<CompraParcela>(`operador/compras/adicionarAlterarCompraParcela`, compraParcela);
  }

  excluir(id: number) {
    return this.http.delete(`operador/compras/` + id);
  }

  excluirCompraParcela(id: number) {
    return this.http.delete(`operador/compras/excluirCompraParcela/` + id);
  }


  incluirEmEstoque(id: number) {
    return this.http.post(`operador/compras/incluirEmEstoque/` + id, "");
  }

  buscarPeloId(id: number) {
    return this.http.get<Compra>(`operador/compras/` + id);
  }

  obterListaParcelasCompra(id: number) {
    return this.http.get<CompraParcela>(`operador/compras/obterListaParcelasCompra/` + id);
  }

}
