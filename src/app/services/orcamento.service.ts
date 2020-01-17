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
    return this.http.get(`orcamentos`, { params });
  }

  alterar(id: number, dto: Orcamento) {
    return this.http.put(`orcamentos/` + id, dto);
  }

  salvar(orcamento: Orcamento): Observable<Orcamento> {
    return this.http.post<Orcamento>(`orcamentos`, orcamento);
  }

  excluir(id: number) {
    return this.http.delete(`orcamentos/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Perfil>(`orcamentos/` + id);
  }

}
