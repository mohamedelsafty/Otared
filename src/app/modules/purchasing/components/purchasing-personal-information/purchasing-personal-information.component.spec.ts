import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingPersonalInformationComponent } from './purchasing-personal-information.component';

describe('PurchasingPersonalInformationComponent', () => {
  let component: PurchasingPersonalInformationComponent;
  let fixture: ComponentFixture<PurchasingPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
