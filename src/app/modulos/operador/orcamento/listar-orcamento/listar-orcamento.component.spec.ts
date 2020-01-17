import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrcamentoComponent } from './listar-orcamento.component';

describe('ListarOrcamentoComponent', () => {
  let component: ListarOrcamentoComponent;
  let fixture: ComponentFixture<ListarOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
