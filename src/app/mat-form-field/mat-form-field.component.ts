import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-mat-form-field',
  templateUrl: './mat-form-field.component.html',
  styleUrls: ['./mat-form-field.component.css']
})
export class MatFormFieldComponent implements OnInit {
  checked= false; // initialize checkbox state
  title = 'Matdemo Page 1';

  today = Date.now();
//__________________________________________________________________________________

  myControl = new FormControl();
  filteredOptions: Observable<string[]>; // returns filtered options/states to the template (default all)

  allStates: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
  'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
  'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// ---for mine
   ngOnInit() {
      // value Changes emits an event when the value of the control changes
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
          startWith(''), // priming value change stream w/empty str so states are filtered by that value oninit (before any value changes)
          map(value => this.toFilter(value))
      );
   }
   
   private toFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allStates.filter(state => state.toLowerCase().includes(filterValue));
 }


}
