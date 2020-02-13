import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Entrada } from '../model/entrada';
import { EntradaProduto } from '../model/entradaProduto';

@Injectable({
  providedIn: 'root'
})

export class EntradaService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`entradas`, { params });
  }

  obterListaProdutosEntrada(id: number) {
    return this.http.get<EntradaProduto>(`entradas/obterListaProdutosEntrada/` + id);
  }

  alterar(id: number, dto: Entrada) {
    return this.http.put(`entradas/` + id, dto);
  }

  salvar(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(`entradas`, entrada);
  }

  adicionarProdutoEntrada(entradaProduto: EntradaProduto): Observable<EntradaProduto> {
    return this.http.post<EntradaProduto>(`entradas/adicionarProdutoEntrada`, entradaProduto);
  }

  excluir(id: number) {
    return this.http.delete(`entradas/` + id);
  }

  excluirProdutoEntrada(id: number) {
    return this.http.delete(`entradas/excluirProdutoEntrada/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Entrada>(`entradas/` + id);
  }

}
