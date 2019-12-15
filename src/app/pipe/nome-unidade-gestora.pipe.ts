import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeUnidadeGestora'
})
export class NomeUnidadeGestoraPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length > 0) {
      return value.find(unidadeGestora => unidadeGestora.id === args).nomeComposto;
    } else {
      return '-';
    }
  }
}
