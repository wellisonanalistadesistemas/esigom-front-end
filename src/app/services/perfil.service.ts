import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from '../model/perfil';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Perfil> {
    return this.http.get<Perfil>(`perfis`);
  }

}
