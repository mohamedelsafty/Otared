import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportClientBlockComponent } from './support-client-block.component';

describe('SupportClientBlockComponent', () => {
  let component: SupportClientBlockComponent;
  let fixture: ComponentFixture<SupportClientBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportClientBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportClientBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
