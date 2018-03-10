import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegWalletComponent } from './veg-wallet.component';

describe('VegWalletComponent', () => {
  let component: VegWalletComponent;
  let fixture: ComponentFixture<VegWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
