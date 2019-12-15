import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arquivo'
})
export class ArquivoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return !value || value === '' ? ' Nenhum arquivo selecionado ' : value;
  }

}
