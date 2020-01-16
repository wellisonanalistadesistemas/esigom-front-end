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
    return this.http.get<Perfil>(`perfis/todos`);
  }
  pesquisar(params) {
    return this.http.get(`perfis`, { params });
  }

  alterar(id: number, dto: Perfil) {
    return this.http.put(`perfis/` + id, dto);
  }

  salvar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(`perfis`, perfil);
  }

  excluir(id: number) {
    return this.http.delete(`perfis/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Perfil>(`perfis/` + id);
  }

}
