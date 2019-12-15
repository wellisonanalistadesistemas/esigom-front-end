import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`usuarios`, { params });
  }

  alterar(id: number, dto: Usuario) {
    return this.http.put(`usuarios/` + id, dto);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`usuarios`, usuario);
  }

  excluir(id: number) {
    return this.http.delete(`usuarios/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Usuario>(`usuarios/` + id);
  }

  alterarSenha(id: number, novaSenha: String) {
    return this.http.put(`usuarios/alterarSenha/` + id, novaSenha);
  }



}
