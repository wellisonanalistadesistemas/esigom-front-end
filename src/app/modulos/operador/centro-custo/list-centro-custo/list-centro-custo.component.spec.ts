import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentroCustoComponent } from './list-centro-custo.component';

describe('ListCentroCustoComponent', () => {
  let component: ListCentroCustoComponent;
  let fixture: ComponentFixture<ListCentroCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCentroCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
