import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingIncomeSourcesComponent } from './purchasing-income-sources.component';

describe('PurchasingIncomeSourcesComponent', () => {
  let component: PurchasingIncomeSourcesComponent;
  let fixture: ComponentFixture<PurchasingIncomeSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingIncomeSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingIncomeSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
