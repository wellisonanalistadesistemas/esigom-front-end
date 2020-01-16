import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarPerfilComponent } from './cadastrar-e-editar-perfil.component';

describe('CadastrarEEditarPerfilComponent', () => {
  let component: CadastrarEEditarPerfilComponent;
  let fixture: ComponentFixture<CadastrarEEditarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
