import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportManageRequestsComponent } from './support-manage-requests.component';

describe('SupportManageRequestsComponent', () => {
  let component: SupportManageRequestsComponent;
  let fixture: ComponentFixture<SupportManageRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportManageRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportManageRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
