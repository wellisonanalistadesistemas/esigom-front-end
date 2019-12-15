import { Pipe, PipeTransform } from '@angular/core';
import { TipoComposicao } from '../enum/tipo-composicao.enum';

@Pipe({
  name: 'parecer'
})
export class ParecerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === TipoComposicao.PARECER_TECNICO ? 'Parecer Técnico' : 'Parecer Juridico do Edital e Minuta do Contrato ou Instrumento Equivalente';
  }

}
