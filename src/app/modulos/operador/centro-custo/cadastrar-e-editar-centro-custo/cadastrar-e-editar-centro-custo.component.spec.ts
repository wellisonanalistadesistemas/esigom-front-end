import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarCentroCustoComponent } from './cadastrar-e-editar-centro-custo.component';

describe('CadastrarEEditarCentroCustoComponent', () => {
  let component: CadastrarEEditarCentroCustoComponent;
  let fixture: ComponentFixture<CadastrarEEditarCentroCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarCentroCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
