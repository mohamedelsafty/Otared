import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewDevelopersComponent } from './support-new-developers.component';

describe('SupportNewDevelopersComponent', () => {
  let component: SupportNewDevelopersComponent;
  let fixture: ComponentFixture<SupportNewDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
