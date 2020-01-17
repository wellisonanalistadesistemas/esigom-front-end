import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarProdutoComponent } from './cadastrar-e-editar-produto.component';

describe('CadastrarEEditarProdutoComponent', () => {
  let component: CadastrarEEditarProdutoComponent;
  let fixture: ComponentFixture<CadastrarEEditarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
