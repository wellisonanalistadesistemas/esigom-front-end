import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicaoVisualizarComponent } from './composicao-visualizar.component';

describe('ComposicaoVisualizarComponent', () => {
  let component: ComposicaoVisualizarComponent;
  let fixture: ComponentFixture<ComposicaoVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposicaoVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposicaoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
