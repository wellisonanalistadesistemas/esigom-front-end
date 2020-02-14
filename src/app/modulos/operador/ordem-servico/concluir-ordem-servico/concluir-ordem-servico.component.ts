import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from 'src/app/services/ordemServico';
import { OrdemServico } from 'src/app/model/ordemServico';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-concluir-ordem-servico',
  templateUrl: './concluir-ordem-servico.component.html',
  styleUrls: ['./concluir-ordem-servico.component.scss']
})
export class ConcluirOrdemServicoComponent implements OnInit {
  public ordemServico = new OrdemServico;
  public numeroOrdemDeServico;
  public listaModal: any;
  public objetoLista: any;
  public tituloModalGenerica: any;
  public abertoListaServico;
  public visualizar = false;
  constructor(
    private modalService: NgbModal,
    private _ordemServicoService: OrdemServicoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.numeroOrdemDeServico = params.id;
        this._ordemServicoService.buscarPeloId(params.id).subscribe(data => {
          this.ordemServico = data
        });
      }
    })
    this.route.url.subscribe(url => {
      if (url[0].path == "visualizar") {
        this.visualizar = true;
      }
    })
  }

  /* Abrir Modal Genérica */
  abrirModal(template, size, tipo) {
    this.listaModal = [];
    // caso visualize produtos
    if (tipo == true) {
      this.abertoListaServico = false;
      this.tituloModalGenerica = "Listagem de Peça(s) Comprada(s)";
      this.ordemServico.orcamento.produtos.forEach(obj => {
        this.objetoLista = new Object();
        this.objetoLista.quantidade = obj.quantidade;
        this.objetoLista.descricao = obj.produto.descricao;
        this.objetoLista.clienteLevaPeca = obj.clienteLevaPeca;
        this.listaModal.push(this.objetoLista);
      });
      // caso visualize ordem de serviço
    } else {
      this.abertoListaServico = true;
      this.tituloModalGenerica = "Listagem de Serviços à Executar";
      this.ordemServico.orcamento.servicos.forEach(obj => {
        this.objetoLista = new Object();
        this.objetoLista.quantidade = obj.quantidade;
        this.objetoLista.descricao = obj.servico.descricao;
        this.listaModal.push(this.objetoLista);
      });
    }
    // apresentar em modal
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result;
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
