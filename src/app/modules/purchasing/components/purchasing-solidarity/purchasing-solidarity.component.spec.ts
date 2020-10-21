import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingSolidarityComponent } from './purchasing-solidarity.component';

describe('PurchasingSolidarityComponent', () => {
  let component: PurchasingSolidarityComponent;
  let fixture: ComponentFixture<PurchasingSolidarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingSolidarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingSolidarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
