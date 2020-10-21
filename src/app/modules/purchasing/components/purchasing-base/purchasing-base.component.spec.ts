import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingBaseComponent } from './purchasing-base.component';

describe('PurchasingBaseComponent', () => {
  let component: PurchasingBaseComponent;
  let fixture: ComponentFixture<PurchasingBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
