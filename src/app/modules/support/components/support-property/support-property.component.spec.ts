import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPropertyComponent } from './support-property.component';

describe('SupportPropertyComponent', () => {
  let component: SupportPropertyComponent;
  let fixture: ComponentFixture<SupportPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
