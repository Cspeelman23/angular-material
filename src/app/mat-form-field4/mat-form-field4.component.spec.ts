import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField4Component } from './mat-form-field4.component';

describe('MatFormField4Component', () => {
  let component: MatFormField4Component;
  let fixture: ComponentFixture<MatFormField4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormField4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormField4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
