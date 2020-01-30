import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarFornecedorComponent } from './cadastrar-e-editar-fornecedor.component';

describe('CadastrarEEditarFornecedorComponent', () => {
  let component: CadastrarEEditarFornecedorComponent;
  let fixture: ComponentFixture<CadastrarEEditarFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
