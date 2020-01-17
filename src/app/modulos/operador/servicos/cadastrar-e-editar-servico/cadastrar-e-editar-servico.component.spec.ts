import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarServicoComponent } from './cadastrar-e-editar-servico.component';

describe('CadastrarEEditarServicoComponent', () => {
  let component: CadastrarEEditarServicoComponent;
  let fixture: ComponentFixture<CadastrarEEditarServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
