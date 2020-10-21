import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsRequestsListComponent } from './reservations-requests-list.component';

describe('ReservationsRequestsListComponent', () => {
  let component: ReservationsRequestsListComponent;
  let fixture: ComponentFixture<ReservationsRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
