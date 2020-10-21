import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportClientDetailsComponent } from './support-client-details.component';

describe('SupportClientDetailsComponent', () => {
  let component: SupportClientDetailsComponent;
  let fixture: ComponentFixture<SupportClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
