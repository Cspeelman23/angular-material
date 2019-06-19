import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-form-field2',
  templateUrl: './mat-form-field2.component.html',
  styleUrls: ['./mat-form-field2.component.css']
})
export class MatFormField2Component implements OnInit {
  title = 'Matdemo Page 2';
  disabled= false; // start enabled
  textEntry = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
