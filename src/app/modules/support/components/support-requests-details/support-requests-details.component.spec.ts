import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestsDetailsComponent } from './support-requests-details.component';

describe('SupportRequestsDetailsComponent', () => {
  let component: SupportRequestsDetailsComponent;
  let fixture: ComponentFixture<SupportRequestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
