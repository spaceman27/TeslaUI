import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFlightComponent } from './one-flight.component';

describe('OneFlightComponent', () => {
  let component: OneFlightComponent;
  let fixture: ComponentFixture<OneFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
