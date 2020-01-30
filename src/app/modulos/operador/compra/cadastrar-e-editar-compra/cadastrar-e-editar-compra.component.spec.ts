import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarCompraComponent } from './cadastrar-e-editar-compra.component';

describe('CadastrarEEditarCompraComponent', () => {
  let component: CadastrarEEditarCompraComponent;
  let fixture: ComponentFixture<CadastrarEEditarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
