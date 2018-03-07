import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUiComponent } from './flight-ui.component';

describe('FlightUiComponent', () => {
  let component: FlightUiComponent;
  let fixture: ComponentFixture<FlightUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
