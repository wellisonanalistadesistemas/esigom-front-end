import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArquivoPipe } from './arquivo.pipe';
import { BlankPipe } from './blank.pipe';
import { ObrigatorioPipe } from './obrigatorio.pipe';
import { FilterPipe } from './filter.pipe';
import { ProjetoPipe } from './projeto.pipe';
import { ParecerPipe } from './parecer.pipe';
import { CpfPipe } from './cpf.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { HumanizePipe } from './humanize.pipe';
import { MatriculaPipe } from './matricula.pipe';
import { FuncaoPipe } from './funcao.pipe';
import { RgPipe } from './rg.pipe';
import { NomeUnidadeGestoraPipe } from './nome-unidade-gestora.pipe';
import { SituacaoRemessaPipe } from './situacao-remessa.pipe';
import { TipoRecursoOrcamentarioPipe } from './tipo-recurso-orcamentario.pipe';
import { SituacaoRemessaAtualPipe } from './situacao-remessa-atual.pipe';
import { InputDataPipe } from './input-data.pipe';
import { InputDatatimePipe } from './input-datatime.pipe';
import { SiglaUnidadeGestoraPipe } from './sigla-unidade-gestora.pipe';
import { SubtipoAlteracaoContratualPipe } from './subtipo-alteracao-contratual.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlankPipe,
    ArquivoPipe,
    ObrigatorioPipe,
    ProjetoPipe,
    ParecerPipe,
    CpfPipe,
    FilterPipe,
    CnpjPipe,
    HumanizePipe,
    MatriculaPipe,
    FuncaoPipe,
    RgPipe,
    NomeUnidadeGestoraPipe,
    SituacaoRemessaPipe,
    TipoRecursoOrcamentarioPipe,
    SituacaoRemessaAtualPipe,
    InputDataPipe,
    InputDatatimePipe,
    SiglaUnidadeGestoraPipe,
    SubtipoAlteracaoContratualPipe,
  ],
  declarations: [
    BlankPipe,
    ArquivoPipe,
    ObrigatorioPipe,
    ProjetoPipe,
    ParecerPipe,
    CpfPipe,
    FilterPipe,
    CnpjPipe,
    HumanizePipe,
    MatriculaPipe,
    FuncaoPipe,
    RgPipe,
    NomeUnidadeGestoraPipe,
    SituacaoRemessaPipe,
    TipoRecursoOrcamentarioPipe,
    SituacaoRemessaAtualPipe,
    InputDataPipe,
    InputDatatimePipe,
    SiglaUnidadeGestoraPipe,
    SubtipoAlteracaoContratualPipe,
  ]
})
export class PipeModule { }
