import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBoxHorizonComponent } from './veg-box-horizon.component';

describe('VegBoxHorizonComponent', () => {
  let component: VegBoxHorizonComponent;
  let fixture: ComponentFixture<VegBoxHorizonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegBoxHorizonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegBoxHorizonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
