import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoInput } from '../../enum/tipo-input.enum';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() label;
  @Input() title;
  @Input() control;
  @Input() tipo;
  @Input() items;
  @Input() bindLabel = 'text';
  @Input() bindValue = 'value';
  @Input() dataMin;
  @Input() dataMax;
  @Input() anoMin;
  @Input() anoMax;
  @Input() maxLength;
  @Input() campo;
  @Input() form;
  @Input() rows = 5;
  @Input() clearOnBackspace = true;
  @Input() clearable = true;
  @Input() controlName;
  @Output() returnYearEvent = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  @Output() returnCommentEvent = new EventEmitter();
  @Output() retornoEventoData = new EventEmitter();
  public tipoInput = TipoInput;
  public min;
  public max;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    if (!this.control.value && this.tipo === this.tipoInput.DATA || this.tipo === this.tipoInput.DATA_HORA) {
      this.change.emit(this.control.value);
    }

    if (!this.control.value && this.tipo === this.tipoInput.MOEDA) {
      this.control.setValue('0');
    }

    if (this.dataMin) {
      this.min = new Date(this.dataMin + ' 00:00:00');
    }

    if (this.dataMax) {
      this.max = new Date(this.dataMax + ' 23:59:59');
    }
  }

  // public chosenYearHandler(normalizedYear: Moment) {
  //   const ctrlValue = this.control.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.control.setValue(ctrlValue);
  // }

  // public chosenMonthHandler(normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment>) {
  //   const ctrlValue = this.control.value;
  //   ctrlValue.month(normalizedMonth.month());
  //   this.control.setValue(ctrlValue);
  //   // datepicker.close();
  // }

  setDate() {
    if (this.control.value.getHours() !== 0) {
      const tzoffset = ((new Date()).getTimezoneOffset()) * 60000;
      const localISOTime = (new Date(this.control.value - tzoffset)).toISOString().slice(0, -1);
      this.control.setValue(localISOTime);
    }
    this.change.emit(this.control.value);
  }

  public newDate() {
    const date = new Date();
    date.setFullYear(this.control.value.substring(2, 6));
    date.setMonth(this.control.value.substring(0, 2));
    this.control.setValue(date);
  }

  public selecionar(event) {
    this.change.emit(event);
  }

  public addDataMask(data: any) {

    const dataSemFormatacao = data.replace(/\D/g, '');
    let novaData = '';
    for (let i = 0; i < dataSemFormatacao.length; i++) {
      novaData += dataSemFormatacao.charAt(i);
      if (i === 1) {
        novaData += '/';
      }
      if (i === 3) {
        novaData += '/';
      }
    }
    return novaData;
  }

  public setarData(event) {
    const dataSelecionada = event.target.value;
    if (dataSelecionada.length < 11) {
      const arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (arrayNumbers.indexOf(event.key) > -1) {
        const novaData = this.addDataMask(dataSelecionada);
        event.target.value = novaData;
      }
    } else {
      event.target.value = this.addDataMask(dataSelecionada.substr(0, (dataSelecionada.length - 1)));
    }
  }

  public validaDataManual(event) {
    const data = event.target.value;
    const retorno = { nome: '', erro: false };
    retorno.nome = this.controlName;
    const arrayData = data.split('/');
    if (arrayData.length !== 3 || arrayData[0] === '' || arrayData[1] === ''
      || arrayData[2] === '' || data.length !== 10) {
      this.control.setValue(null);
      return false;
    }

    const date = new Date(arrayData[2] + '-' + arrayData[1] + '-' + arrayData[0] + ' 00:00:01');
    if (isNaN(date.getTime())) {
      this.control.setValue(null);
      return false;
    }

    if (date < (new Date(this.dataMin)) || date > (new Date(this.dataMax))) {
      retorno.erro = true;
      this.retornoEventoData.emit(retorno);
    }

    this.retornoEventoData.emit(retorno);
    this.control.setValue(date);
  }

  /**
   * Método responsável por verificar se o ano está entre os anos válidos
   * caso não seja válido, retorna um evento contendo o erro e marca o formulário
   * destacando o campo.
   * @param event O evento contendo o ano.
   */
  public validarAno(event) {
    const ano = event.target.value;
    const retorno = { nome: '', erro: false };
    if (ano && (ano < this.anoMin || ano > this.anoMax)) {
      const mensagem = 'Campo ' + this.campo + ' deve estar entre ' + this.anoMin + ' e ' + this.anoMax;
      retorno[this.controlName] = [mensagem];
      this.utilService.setErrorsForm(retorno, this.form);
      retorno.erro = true;
      retorno.nome = this.controlName;
      this.returnYearEvent.emit(retorno);
      return false;
    }
    retorno.erro = false;
    retorno.nome = this.controlName;
    this.returnYearEvent.emit(retorno);
    this.control.setValue(ano);
  }

  /**
   * Método responsável por verificar se o comentário tem a quantidade de caracteres máxima
   * caso tenha, ele retorna um evento contendo o erro e marca o formulário destacando o campo.
   * @param event O evento contendo o comentário.
   */
  public validarComentario(event) {
    const comentario = event.target.value;
    const retorno = {};
    if (comentario.length > this.maxLength) {
      const mensagem = 'Campo ' + this.campo + ' a quantidade de caracteres tem que ser menor que ' + this.maxLength;
      retorno[this.controlName] = [mensagem];
      this.utilService.setErrorsForm(retorno, this.form);
      this.returnCommentEvent.emit(retorno);
      return false;
    }

    this.control.setValue(comentario);
  }

  public openEvent(event) {
    this.open.emit(event);
  }
}
