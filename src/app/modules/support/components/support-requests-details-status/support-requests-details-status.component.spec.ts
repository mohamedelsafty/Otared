import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestsDetailsStatusComponent } from './support-requests-details-status.component';

describe('SupportRequestsDetailsStatusComponent', () => {
  let component: SupportRequestsDetailsStatusComponent;
  let fixture: ComponentFixture<SupportRequestsDetailsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestsDetailsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestsDetailsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
