import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField2Component } from './mat-form-field2.component';

describe('MatFormField2Component', () => {
  let component: MatFormField2Component;
  let fixture: ComponentFixture<MatFormField2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormField2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormField2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
