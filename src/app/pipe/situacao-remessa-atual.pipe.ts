import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoRemessaAtual'
})
export class SituacaoRemessaAtualPipe implements PipeTransform {

  transform(situacoesRemessas: Array<any>, ...args: any[]): any {
    const situacoesRemessasOrdenada = situacoesRemessas.sort((a, b) => {
      if (a.dataCadastro < b.dataCadastro) {
        return 1;
      }
      if (a.dataCadastro > b.dataCadastro) {
        return -1;
      }
      return 0;
    });
    return situacoesRemessasOrdenada[0].situacaoId;
  }

}
