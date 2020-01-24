import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdemServicoComponent } from './listar-ordem-servico.component';

describe('ListarOrdemServicoComponent', () => {
  let component: ListarOrdemServicoComponent;
  let fixture: ComponentFixture<ListarOrdemServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrdemServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
