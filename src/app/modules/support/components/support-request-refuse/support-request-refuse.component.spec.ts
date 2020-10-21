import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestRefuseComponent } from './support-request-refuse.component';

describe('SupportRequestRefuseComponent', () => {
  let component: SupportRequestRefuseComponent;
  let fixture: ComponentFixture<SupportRequestRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportRequestRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
