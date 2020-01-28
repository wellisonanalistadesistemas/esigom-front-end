import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContaPagarReceberComponent } from './listar-conta-pagar-receber.component';

describe('ListarContaPagarReceberComponent', () => {
  let component: ListarContaPagarReceberComponent;
  let fixture: ComponentFixture<ListarContaPagarReceberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarContaPagarReceberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContaPagarReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
