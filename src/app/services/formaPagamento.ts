import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormaPagamentoService {
  constructor(private http: HttpClient) { }


  pesquisar(params?) {
    return this.http.get(`formasPagamento`, { params });
  }



}
