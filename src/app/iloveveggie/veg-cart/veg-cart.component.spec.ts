import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegCartComponent } from './veg-cart.component';

describe('VegCartComponent', () => {
  let component: VegCartComponent;
  let fixture: ComponentFixture<VegCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
