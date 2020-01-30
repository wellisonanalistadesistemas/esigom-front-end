import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto';
import { Produto } from 'src/app/model/produto';
import { Fornecedor } from 'src/app/model/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';


@Component({
  selector: 'app-cadastrar-e-editar-fornecedor',
  templateUrl: './cadastrar-e-editar-fornecedor.component.html',
  styleUrls: ['./cadastrar-e-editar-fornecedor.component.scss']
})
export class CadastrarEEditarFornecedorComponent implements OnInit {
  public objeto = new Fornecedor;
  public visualizar: boolean;

  constructor(public _fornecedorService: FornecedorService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._fornecedorService.buscarPeloId(params.id).subscribe(data => this.objeto = data);

      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._fornecedorService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/operador/fornecedores']);
            this.toastr.success('Fornecedor editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._fornecedorService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/operador/fornecedores']);
          this.toastr.success('Fornecedor cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
