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
        return this.http.get(`operador/clientes`, { params });
    }

    alterar(id: number, dto: Cliente) {
        return this.http.put(`operador/clientes/` + id, dto);
    }

    salvar(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`operador/clientes`, cliente);
    }

    excluir(id: number) {
        return this.http.delete(`operador/clientes/` + id);
    }

    buscarPeloId(id: number) {
        return this.http.get<Cliente>(`operador/clientes/` + id);
    }

    buscarPeloCpf(cpf: string) {
        return this.http.get<Cliente>(`operador/clientes/getByCpf/` + cpf);
    }

    alterarSenha(id: number, novaSenha: String) {
        return this.http.put(`operador/clientes/alterarSenha/` + id, novaSenha);
    }



}
