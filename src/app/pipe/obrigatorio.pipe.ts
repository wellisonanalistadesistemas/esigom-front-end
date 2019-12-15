import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obrigatorio'
})
export class ObrigatorioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Sim' : 'Não';
  }

}
