import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperReservationRefusalComponent } from './developer-reservation-refusal.component';

describe('DeveloperReservationRefusalComponent', () => {
  let component: DeveloperReservationRefusalComponent;
  let fixture: ComponentFixture<DeveloperReservationRefusalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperReservationRefusalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperReservationRefusalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
