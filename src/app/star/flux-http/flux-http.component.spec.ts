import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxHttpComponent } from './flux-http.component';

describe('FluxHttpComponent', () => {
  let component: FluxHttpComponent;
  let fixture: ComponentFixture<FluxHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
