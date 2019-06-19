import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField3Component } from './mat-form-field3.component';

describe('MatFormField3Component', () => {
  let component: MatFormField3Component;
  let fixture: ComponentFixture<MatFormField3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormField3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormField3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
