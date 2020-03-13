import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router, private toastr: ToastrService) { }
  usuario = ({}) as UsuarioEntity;

  @Output() teste = new EventEmitter();

  ngOnInit() {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
      this.router.navigate(['operador/orcamentos']);
    }
  }

  autenticar() {
    this._authService.autenticar(this.usuario).subscribe(data => {

      /* Variáveis*/
      var resultado = JSON.parse(JSON.stringify(data));
      localStorage.setItem("token", resultado.access_token);
      localStorage.setItem("nome", resultado.nome);
      localStorage.setItem("funcao", resultado.funcao);
      localStorage.setItem("roles", resultado.roles);

      this.teste.emit(localStorage);
      this.toastr.success('Login realizado com sucesso.');
      this.router.navigate(['operador/orcamentos']);
    },
      error => {
        this.toastr.error('Usuário e/ou senha inválidos.');
        console.error("Erro ao fazer login");
      });
  }
}



export class UsuarioEntity {
  login: number;
  senha: number
}