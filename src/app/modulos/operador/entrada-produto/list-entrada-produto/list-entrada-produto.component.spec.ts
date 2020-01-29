import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntradaProdutoComponent } from './list-entrada-produto.component';

describe('ListEntradaProdutoComponent', () => {
  let component: ListEntradaProdutoComponent;
  let fixture: ComponentFixture<ListEntradaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntradaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntradaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
