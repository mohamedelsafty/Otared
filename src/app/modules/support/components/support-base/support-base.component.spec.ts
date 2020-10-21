import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBaseComponent } from './support-base.component';

describe('SupportBaseComponent', () => {
  let component: SupportBaseComponent;
  let fixture: ComponentFixture<SupportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
