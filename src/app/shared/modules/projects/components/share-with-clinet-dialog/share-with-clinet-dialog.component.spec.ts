import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWithClinetDialogComponent } from './share-with-clinet-dialog.component';

describe('ShareWithClinetDialogComponent', () => {
  let component: ShareWithClinetDialogComponent;
  let fixture: ComponentFixture<ShareWithClinetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareWithClinetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareWithClinetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
