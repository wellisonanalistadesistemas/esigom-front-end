import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEEditarClienteComponent } from './cadastrar-e-editar-cliente.component';

describe('CadastrarEEditarClienteComponent', () => {
  let component: CadastrarEEditarClienteComponent;
  let fixture: ComponentFixture<CadastrarEEditarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEEditarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
