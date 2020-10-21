import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsSucsessDialogComponent } from './suggestions-sucsess-dialog.component';

describe('SuggestionsSucsessDialogComponent', () => {
  let component: SuggestionsSucsessDialogComponent;
  let fixture: ComponentFixture<SuggestionsSucsessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsSucsessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsSucsessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
