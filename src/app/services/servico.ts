import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Servico } from '../model/servico';


@Injectable({
  providedIn: 'root'
})

export class ServicoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Servico> {
    return this.http.get<Servico>(`operador/servicos/`);
  }
  pesquisar(params) {
    return this.http.get(`operador/servicos`, { params });
  }

  alterar(id: number, dto: Servico) {
    return this.http.put(`operador/servicos/` + id, dto);
  }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`operador/servicos`, servico);
  }

  excluir(id: number) {
    return this.http.delete(`operador/servicos/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Servico>(`operador/servicos/` + id);
  }


}
