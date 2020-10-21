import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDetailsProjectsComponent } from './support-details-projects.component';

describe('SupportDetailsProjectsComponent', () => {
  let component: SupportDetailsProjectsComponent;
  let fixture: ComponentFixture<SupportDetailsProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDetailsProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDetailsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
