import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdemServicoComponent } from './editar-ordem-servico.component';

describe('EditarOrdemServicoComponent', () => {
  let component: EditarOrdemServicoComponent;
  let fixture: ComponentFixture<EditarOrdemServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrdemServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
