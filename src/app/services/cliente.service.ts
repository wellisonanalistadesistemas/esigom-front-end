import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../model/cliente';

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    constructor(private http: HttpClient) { }
    pesquisar(params) {
        return this.http.get(`clientes`, { params });
    }

    alterar(id: number, dto: Cliente) {
        return this.http.put(`clientes/` + id, dto);
    }

    salvar(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`clientes`, cliente);
    }

    excluir(id: number) {
        return this.http.delete(`clientes/` + id);
    }

    buscarPeloId(id: number) {
        return this.http.get<Cliente>(`clientes/` + id);
    }

    buscarPeloCpf(cpf: string) {
        return this.http.get<Cliente>(`clientes/getByCpf/` + cpf);
    }

    alterarSenha(id: number, novaSenha: String) {
        return this.http.put(`clientes/alterarSenha/` + id, novaSenha);
    }



}
