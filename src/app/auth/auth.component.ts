import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../model/role';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router, private toastr: ToastrService) { }
  usuario = ({}) as UsuarioEntity;
  roles = new Array<Role>();
  
  @Output() teste = new EventEmitter();

  ngOnInit() {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
      this.router.navigate(['operador/orcamentos']);
    }
  }

  autenticar() {
    this._authService.autenticar(this.usuario).subscribe(data => {

      var resposta = JSON.stringify(data);
      localStorage.setItem("sigom_auth", resposta);

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