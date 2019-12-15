import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blank'
})
export class BlankPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return !value || value === '' ? ' - ' : value;
  }

}
