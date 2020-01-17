import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto';
import { Produto } from 'src/app/model/produto';


@Component({
  selector: 'app-cadastrar-e-editar-produto',
  templateUrl: './cadastrar-e-editar-produto.component.html',
  styleUrls: ['./cadastrar-e-editar-produto.component.scss']
})
export class CadastrarEEditarProdutoComponent implements OnInit {
  public objeto = new Produto;
  public visualizar: boolean;

  constructor(public _produtoService: ProdutoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._produtoService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._produtoService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/operador/produtos']);
            this.toastr.success('Produto editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._produtoService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/operador/produtos']);
          this.toastr.success('Produto cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
