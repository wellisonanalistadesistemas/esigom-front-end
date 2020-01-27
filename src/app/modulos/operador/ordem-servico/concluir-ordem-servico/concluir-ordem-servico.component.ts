import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from 'src/app/services/OrdemServico.service';
import { OrdemServico } from 'src/app/model/ordemServico';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-concluir-ordem-servico',
  templateUrl: './concluir-ordem-servico.component.html',
  styleUrls: ['./concluir-ordem-servico.component.scss']
})
export class ConcluirOrdemServicoComponent implements OnInit {
  public ordemServico = new OrdemServico;
  public numeroOrdemDeServico;
  constructor(private _ordemServicoService: OrdemServicoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.numeroOrdemDeServico = params.id;
        this._ordemServicoService.buscarPeloId(params.id).subscribe(data => {
          this.ordemServico = data
        });
      }
    })
  }

  salvar() {
    // Altera Situação para "Finalizado"
    this.ordemServico.codStatus = 2;
    // Atribui Data de Conclusão do Orçamento
    this.ordemServico.dataEntrega = new Date();
    // Invoca API
    this._ordemServicoService.alterar(this.ordemServico.id, this.ordemServico).subscribe(data => {
      if (data) {
        this.toastr.success('Ordem de serviço finalizada com sucesso!');
        this.router.navigate(['/operador/ordens-servicos']);
      } else {
        this.toastr.error('Erro.');
      }
    });
  }

}
