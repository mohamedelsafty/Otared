import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingIsRealEstateComponent } from './purchasing-is-real-estate.component';

describe('PurchasingIsRealEstateComponent', () => {
  let component: PurchasingIsRealEstateComponent;
  let fixture: ComponentFixture<PurchasingIsRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingIsRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingIsRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
