import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarContaPagarReceberComponent } from './cadastrar-e-editar-conta-pagar-receber.component';

describe('CadastrarEEditarContaPagarReceberComponent', () => {
  let component: CadastrarEEditarContaPagarReceberComponent;
  let fixture: ComponentFixture<CadastrarEEditarContaPagarReceberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarContaPagarReceberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarContaPagarReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
