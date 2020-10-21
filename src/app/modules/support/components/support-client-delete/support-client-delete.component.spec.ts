import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportClientDeleteComponent } from './support-client-delete.component';

describe('SupportClientDeleteComponent', () => {
  let component: SupportClientDeleteComponent;
  let fixture: ComponentFixture<SupportClientDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportClientDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportClientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
