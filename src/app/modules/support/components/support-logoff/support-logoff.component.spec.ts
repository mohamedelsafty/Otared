import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLogoffComponent } from './support-logoff.component';

describe('SupportLogoffComponent', () => {
  let component: SupportLogoffComponent;
  let fixture: ComponentFixture<SupportLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
