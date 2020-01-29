import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarEntradaProdutoComponent } from './cadastrar-editar-entrada-produto.component';

describe('CadastrarEditarEntradaProdutoComponent', () => {
  let component: CadastrarEditarEntradaProdutoComponent;
  let fixture: ComponentFixture<CadastrarEditarEntradaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEditarEntradaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarEntradaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
