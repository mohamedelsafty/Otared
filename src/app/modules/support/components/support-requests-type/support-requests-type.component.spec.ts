import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestsTypeComponent } from './support-requests-type.component';

describe('SupportRequestsTypeComponent', () => {
  let component: SupportRequestsTypeComponent;
  let fixture: ComponentFixture<SupportRequestsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
