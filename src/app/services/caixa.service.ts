import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CaixaService {
  constructor(private http: HttpClient) { }

  pesquisar(params) {
    return this.http.get(`operador/caixas`, { params });
  }

}
