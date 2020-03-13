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
    return this.http.get(`adm/usuarios`, { params });
  }

  alterar(id: number, dto: Usuario) {
    return this.http.put(`adm/usuarios/` + id, dto);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`adm/usuarios`, usuario);
  }

  excluir(id: number) {
    return this.http.delete(`adm/usuarios/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Usuario>(`adm/usuarios/` + id);
  }

  alterarSenha(id: number, novaSenha: String) {
    return this.http.put(`adm/usuarios/alterarSenha/` + id, novaSenha);
  }



}
