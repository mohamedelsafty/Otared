import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestAcceptanceComponent } from './support-request-acceptance.component';

describe('SupportRequestAcceptanceComponent', () => {
  let component: SupportRequestAcceptanceComponent;
  let fixture: ComponentFixture<SupportRequestAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
