import { SituacaoRemessaEnum } from './../enum/situacao-remessa.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoRemessa'
})
export class SituacaoRemessaPipe implements PipeTransform {

  transform(situacaoRemessaId, ...args: any[]): any {
    let situacaoRemessa;

    switch (situacaoRemessaId) {
      case SituacaoRemessaEnum.RASCUNHO:
        situacaoRemessa = 'Rascunho';
        break;
      case SituacaoRemessaEnum.ENVIADA:
        situacaoRemessa = 'Enviada';
        break;
      case SituacaoRemessaEnum.PROCESSADA:
        situacaoRemessa = 'Processada';
        break;
      case SituacaoRemessaEnum.EM_ANALISE:
        situacaoRemessa = 'Em Análise';
        break;
      case SituacaoRemessaEnum.RECUSADA:
        situacaoRemessa = 'Recusada';
        break;
      case SituacaoRemessaEnum.RETIFICADA:
        situacaoRemessa = 'Retificada';
        break;
    }
    return situacaoRemessa;
  }

}
