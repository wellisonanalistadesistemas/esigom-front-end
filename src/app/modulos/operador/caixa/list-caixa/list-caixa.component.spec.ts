import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCaixaComponent } from './list-caixa.component';

describe('ListCaixaComponent', () => {
  let component: ListCaixaComponent;
  let fixture: ComponentFixture<ListCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
