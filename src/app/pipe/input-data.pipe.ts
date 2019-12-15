import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputData'
})
export class InputDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const dataOriginal = new Date(value);
      return dataOriginal.toISOString().substring(0, 10);
    }

  }

}
