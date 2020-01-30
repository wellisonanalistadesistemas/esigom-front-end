import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto';
import { Produto } from 'src/app/model/produto';
import { CentroCustoService } from 'src/app/services/centroCusto.service';
import { CentroCusto } from 'src/app/model/centroCusto';


@Component({
  selector: 'app-cadastrar-e-editar-centro-custo',
  templateUrl: './cadastrar-e-editar-centro-custo.component.html',
  styleUrls: ['./cadastrar-e-editar-centro-custo.component.scss']
})
export class CadastrarEEditarCentroCustoComponent implements OnInit {
  public objeto = new CentroCusto;
  public visualizar: boolean;

  constructor(public _centroCustoService: CentroCustoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._centroCustoService.buscarPeloId(params.id).subscribe(data => this.objeto = data);

      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._centroCustoService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/operador/centro-custo']);
            this.toastr.success('Centro Custo editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._centroCustoService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/operador/centro-custo']);
          this.toastr.success('Centro Custo cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
