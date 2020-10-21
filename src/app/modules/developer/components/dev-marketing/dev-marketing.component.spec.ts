import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMarketingComponent } from './dev-marketing.component';

describe('DevMarketingComponent', () => {
  let component: DevMarketingComponent;
  let fixture: ComponentFixture<DevMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
