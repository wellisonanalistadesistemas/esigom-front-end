import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servico } from '../model/servico';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  autenticar(usuario) {
    return this.http.post<Servico>(`login`, JSON.stringify(usuario));
  }
}