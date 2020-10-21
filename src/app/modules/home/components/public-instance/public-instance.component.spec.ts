import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInstanceComponent } from './public-instance.component';

describe('PublicInstanceComponent', () => {
  let component: PublicInstanceComponent;
  let fixture: ComponentFixture<PublicInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
