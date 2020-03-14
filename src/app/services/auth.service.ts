import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RetornoAuth } from '../model/retornoAuth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  autenticar(usuario) {
    return this.http.post<RetornoAuth>(`login`, JSON.stringify(usuario));
  }
}