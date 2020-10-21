import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestsDetailsRefuseComponent } from './support-requests-details-refuse.component';

describe('SupportRequestsDetailsRefuseComponent', () => {
  let component: SupportRequestsDetailsRefuseComponent;
  let fixture: ComponentFixture<SupportRequestsDetailsRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestsDetailsRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestsDetailsRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
