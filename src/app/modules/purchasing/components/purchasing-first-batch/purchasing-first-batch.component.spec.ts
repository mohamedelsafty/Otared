import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingFirstBatchComponent } from './purchasing-first-batch.component';

describe('PurchasingFirstBatchComponent', () => {
  let component: PurchasingFirstBatchComponent;
  let fixture: ComponentFixture<PurchasingFirstBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingFirstBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingFirstBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
