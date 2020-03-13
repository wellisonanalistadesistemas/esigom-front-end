import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Perfil } from '../model/perfil';
import { Orcamento } from '../model/orcamento';

@Injectable({
  providedIn: 'root'
})

export class OrcamentoService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`operador/orcamentos`, { params });
  }

  alterar(id: number, dto: Orcamento) {
    return this.http.put(`operador/orcamentos/` + id, dto);
  }

  salvar(orcamento: Orcamento): Observable<Orcamento> {
    return this.http.post<Orcamento>(`operador/orcamentos`, orcamento);
  }

  excluir(id: number) {
    return this.http.delete(`operador/orcamentos/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Orcamento>(`operador/orcamentos/` + id);
  }

}
