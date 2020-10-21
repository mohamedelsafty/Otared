import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestsListComponent } from './visit-requests-list.component';

describe('VisitRequestsListComponent', () => {
  let component: VisitRequestsListComponent;
  let fixture: ComponentFixture<VisitRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
