import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirOrdemServicoComponent } from './concluir-ordem-servico.component';

describe('ConcluirOrdemServicoComponent', () => {
  let component: ConcluirOrdemServicoComponent;
  let fixture: ComponentFixture<ConcluirOrdemServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluirOrdemServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluirOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
