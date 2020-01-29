import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/model/conta';
import { ContaService } from 'src/app/services/conta.service.';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-e-editar-conta-pagar-receber',
  templateUrl: './cadastrar-e-editar-conta-pagar-receber.component.html',
  styleUrls: ['./cadastrar-e-editar-conta-pagar-receber.component.scss']
})
export class CadastrarEEditarContaPagarReceberComponent implements OnInit {

  public objeto = new Conta;
  public visualizar: boolean;

  constructor(public _contaService: ContaService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._contaService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._contaService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/operador/contas-a-pagar-receber']);
            this.toastr.success('Conta editada com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._contaService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/operador/contas-a-pagar-receber']);
          this.toastr.success('Conta cadastrada com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}

