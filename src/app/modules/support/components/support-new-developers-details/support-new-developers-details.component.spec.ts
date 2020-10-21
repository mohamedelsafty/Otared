import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewDevelopersDetailsComponent } from './support-new-developers-details.component';

describe('SupportNewDevelopersDetailsComponent', () => {
  let component: SupportNewDevelopersDetailsComponent;
  let fixture: ComponentFixture<SupportNewDevelopersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewDevelopersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewDevelopersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
