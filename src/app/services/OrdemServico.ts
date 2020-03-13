import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OrdemServico } from '../model/ordemServico';

@Injectable({
  providedIn: 'root'
})

export class OrdemServicoService {
  constructor(private http: HttpClient) { }

  pesquisar(params?) {
    return this.http.get(`operador/os`, { params });
  }

  getAll() {
    return this.http.get(`operador/os/`);
  }

  alterar(id: number, ordemServico: OrdemServico) {
    return this.http.put(`operador/os/` + id, ordemServico);
  }

  salvar(ordemServico: OrdemServico): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(`operador/os`, ordemServico);
  }

  excluir(id: number) {
    return this.http.delete(`operador/os/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<OrdemServico>(`operador/os/` + id);
  }

}
