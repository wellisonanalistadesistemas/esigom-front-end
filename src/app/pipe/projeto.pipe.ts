import { Pipe, PipeTransform } from '@angular/core';
import { TipoComposicao } from '../enum/tipo-composicao.enum';

@Pipe({
  name: 'projeto'
})
export class ProjetoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === TipoComposicao.PROJETO_BASICO ? 'Projeto Basico' : 'Projeto Executivo';
  }

}
