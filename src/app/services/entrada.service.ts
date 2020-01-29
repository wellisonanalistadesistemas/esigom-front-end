import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Entrada } from '../model/entrada';

@Injectable({
  providedIn: 'root'
})

export class EntradaService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`entradas`, { params });
  }

  alterar(id: number, dto: Entrada) {
    return this.http.put(`entradas/` + id, dto);
  }

  salvar(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(`entradas`, entrada);
  }

  excluir(id: number) {
    return this.http.delete(`entradas/` + id);
  }

  buscarPeloId(id: number) {
    return this.http.get<Entrada>(`entradas/` + id);
  }

}
