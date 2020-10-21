import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingRealEstateTypeComponent } from './purchasing-real-estate-type.component';

describe('PurchasingRealEstateTypeComponent', () => {
  let component: PurchasingRealEstateTypeComponent;
  let fixture: ComponentFixture<PurchasingRealEstateTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingRealEstateTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingRealEstateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
