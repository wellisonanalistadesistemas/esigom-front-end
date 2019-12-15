import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoRecursoOrcamentario'
})
export class TipoRecursoOrcamentarioPipe implements PipeTransform {

  transform(tiposRecursos: any, tipoRecursoOrcamentarioId): any {
    if (tiposRecursos && tiposRecursos.length > 0) {
      return tiposRecursos.find(tipoRecurso => tipoRecurso.cod === tipoRecursoOrcamentarioId).descricao;
    } else {
      return '-';
    }
  }

}
