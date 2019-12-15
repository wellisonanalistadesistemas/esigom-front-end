import { Pipe, PipeTransform } from '@angular/core';
import { SubtipoAlteracaoContratual } from '../enum/subtipo-alteracao-contratual.enum';

@Pipe({
  name: 'subtipoAlteracaoContratual'
})
export class SubtipoAlteracaoContratualPipe implements PipeTransform {

  transform(subTipoAlteracaoContratualId: any, ...args: any[]): any {
    let subtipoAlteracao;
    switch (subTipoAlteracaoContratualId) {
      case SubtipoAlteracaoContratual.PRAZO:
        subtipoAlteracao = 'Prazo';
        break;
      case SubtipoAlteracaoContratual.VALOR:
        subtipoAlteracao = 'Valor';
        break;
      case SubtipoAlteracaoContratual.DOTACAO_ORCAMENTARIA:
        subtipoAlteracao = 'Dotação Orçamentária';
        break;
      case SubtipoAlteracaoContratual.NAO_LISTADO:
        subtipoAlteracao = 'Não Listado';
        break;
    }
    return subtipoAlteracao;
  }

}
