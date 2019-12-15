import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class ControlMessagesService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Obrigatório',
      invalidCreditCard: 'Inválido',
      invalidEmailAddress: 'Inválido',
      invalidPassword: 'Inválido. A senha deve conter pelo menos 6 caracteres e 1 número.',
      minlength: `Tamanho Mínimo ${validatorValue.requiredLength}`,
      validateEqual: 'Campo diferente',
      validateIf: 'Obrigatório',
      customService: ` ${validatorValue}`,
      lei: 'Dados da lei inválidos.',
      unidadeGestora: 'Códigos da UG não coincidem.',
      regimeJuridico: 'Códigos do regime juridico não coincidem.',
      codPlanoUg: 'Códigos do Plano de cargos na Ug não coincidem.',
      anoLei: 'Anos não coincidem.',
      numeroLei: 'Números não coincidem.',
      esferaLei: 'Esferas não coincidem.',
      tipoLei: 'Tipos não coincidem.',
      min: 'Valor do contrato inválido.',
      rangeAno: `O ano tem que estar ${validatorValue}`,
      maxLength: `Quantidade de caracteres tem que ser menor que ${validatorValue}`,
    };

    return config[validatorName];
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}

export function anoValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.lei;
      const lei = c.root.get('lei');
      if (lei) {
        const _ano = lei.get('anoLei').value;
        return (_ano !== dados.ano) ? { anoLei: true } : null;
      }
    }
  };
}
export function numeroValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.lei;
      const lei = c.root.get('lei');
      if (lei) {
        const _numero = lei.get('numeroLei').value;
        return (_numero !== dados.numero) ? { numeroLei: true } : null;
      }
    }
  };
}
export function esferaValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.lei;
      const lei = c.root.get('lei');
      if (lei) {
        const _esfera = lei.get('esfera').value;
        return (_esfera !== dados.esferaId) ? { esferaLei: true } : null;
      }
    }
  };
}
export function tipoValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.lei;
      const lei = c.root.get('lei');
      if (lei) {
        const _tipo = lei.get('tipoLei').value;
        return (_tipo !== dados.legislacaoTipoId) ? { tipoLei: true } : null;
      }
    }
  };
}

export function ugValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.unidadeGestora;
      const _dados = c.root.get('unidadeGestoraId');
      if (_dados) {
        const _unidadeGestora = _dados.value;
        return (_unidadeGestora !== parseInt(dados)) ? { unidadeGestora: true } : null;
      }
    }
  };
}

export function regimeJuridicoValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.regimeJuridico;
      const _dados = c.root.get('regimeJuridico');
      if (_dados) {
        const _regimeJuridico = _dados.value;
        return (_regimeJuridico !== parseInt(dados)) ? { regimeJuridico: true } : null;
      }
    }
  };
}

export function codigoPlanoUgValidator(dadosInicio): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (dadosInicio) {
      const dados = dadosInicio.dadosIniciais.value.codigoPlanoUG;
      const _dados = c.root.get('codigoPlanoCargosUnidadeGestora');
      if (_dados) {
        const _codigoPlanoUg = _dados.value;
        return (_codigoPlanoUg !== parseInt(dados)) ? { codPlanoUg: true } : null;
      }
    }
  };
}

