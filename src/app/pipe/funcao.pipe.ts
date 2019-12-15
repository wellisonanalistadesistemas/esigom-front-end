import { Pipe, PipeTransform } from '@angular/core';
import { Funcoes } from '../enum/funcoes.enum';

@Pipe({
  name: 'funcao'
})
export class FuncaoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = parseInt(value, 10);
    switch (value) {
      case Funcoes.PRESIDENTE:
        value = 'Presidente';
        break;
      case Funcoes.MEMBRO:
        value = 'Membro';
        break;
      case Funcoes.PREGOEIRO:
        value = 'Pregoeiro';
        break;
      case Funcoes.EQUIPE_DE_APOIO:
        value = 'Equipe de Apoio';
        break;
      default:
        value = '-';
    }
    return value;
  }

}
