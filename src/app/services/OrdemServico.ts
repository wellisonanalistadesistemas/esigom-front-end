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
    return this.http.get(`os`, { params });
  }

  getAll() {
    return this.http.get(`os/`);
  }

  alterar(id: number, ordemServico: OrdemServico) {
    return this.http.put(`os/` + id, ordemServico);
  }

  salvar(ordemServico: OrdemServico): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(`os`, ordemServico);
  }

  excluir(id: number) {
    return this.http.delete(`os/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<OrdemServico>(`os/` + id);
  }

}
