import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDetalhes } from '../../enum/tipo-detalhes.enum';
import { ComponentsModule } from './../components.module';
import { FormDetalharComponent } from './form-detalhar.component';

describe('FormDetalharComponent', () => {
  let component: FormDetalharComponent;
  let fixture: ComponentFixture<FormDetalharComponent>;
  const tipo = TipoDetalhes;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetalharComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dados', () => {
    component.dado = 'teste';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const teste = compiled.querySelector('.form-group .text').textContent;
    expect(compiled.querySelector('.form-group .text').textContent).toContain('teste');
  });

  it('label', () => {
    component.label = 'Nome:';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const value = compiled.querySelector('.form-group .col-form-label').textContent;
    expect(value).toContain('Nome:');
  });

  it('data', () => {
    const data = '2018-11-28T14:24:28.41';
    component.dado = data;
    component.tipo = tipo.DATA;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const value = compiled.querySelector('.form-group .text').textContent;
    expect(value).toContain('28/11/2018');
  });

  it('cpf', () => {
    const cpf = '12345678998';
    component.dado = cpf;
    component.tipo = tipo.CPF;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const value = compiled.querySelector('.form-group .text').textContent;
    expect(value).toContain('123.456.789-98');
  });

  it('moeda', () => {
    const money = '1000';
    component.dado = money;
    component.tipo = tipo.MOEDA;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const value = compiled.querySelector('.form-group .text').textContent;
    expect(value).toContain('R$1,000.00');
  });
});
