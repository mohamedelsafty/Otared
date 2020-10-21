import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportClientComponent } from './support-client.component';

describe('SupportClientComponent', () => {
  let component: SupportClientComponent;
  let fixture: ComponentFixture<SupportClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
