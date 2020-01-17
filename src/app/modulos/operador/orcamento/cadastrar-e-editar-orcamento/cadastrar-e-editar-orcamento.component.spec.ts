import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarOrcamentoComponent } from './cadastrar-e-editar-orcamento.component';

describe('CadastrarEEditarOrcamentoComponent', () => {
  let component: CadastrarEEditarOrcamentoComponent;
  let fixture: ComponentFixture<CadastrarEEditarOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
