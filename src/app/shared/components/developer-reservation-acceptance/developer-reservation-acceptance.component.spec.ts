import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperReservationAcceptanceComponent } from './developer-reservation-acceptance.component';

describe('DeveloperReservationAcceptanceComponent', () => {
  let component: DeveloperReservationAcceptanceComponent;
  let fixture: ComponentFixture<DeveloperReservationAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperReservationAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperReservationAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
