import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingOffersComponent } from './purchasing-offers.component';

describe('PurchasingOffersComponent', () => {
  let component: PurchasingOffersComponent;
  let fixture: ComponentFixture<PurchasingOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
