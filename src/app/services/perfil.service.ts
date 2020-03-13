import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Perfil> {
    return this.http.get<Perfil>(`adm/perfis/todos`);
  }
  pesquisar(params) {
    return this.http.get(`adm/perfis`, { params });
  }

  alterar(id: number, dto: Perfil) {
    return this.http.put(`adm/perfis/` + id, dto);
  }

  salvar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(`adm/perfis`, perfil);
  }

  excluir(id: number) {
    return this.http.delete(`adm/perfis/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Perfil>(`adm/perfis/` + id);
  }

}
