import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}
export interface Travel {
  name: string;
}
@Component({
  selector: 'app-mat-form-field3',
  templateUrl: './mat-form-field3.component.html',
  styleUrls: ['./mat-form-field3.component.css']
})

export class MatFormField3Component implements OnInit {
  title = 'Matdemo Page 3';
  show_text= false;
  show_img = false;
  panelOpenState = false;
  selected= "";
  
  visible = true;
  selectable = true;
  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() { }
  

  ngOnInit() {
  }
  
//------------------------
  toggle(x) {
    if(x== 1) {
      this.show_text = true;
      this.show_img= false;
    }
    else{
      this.show_text= false;
      this.show_img = true;
    }
  }
//--------------------------------------
methods: Travel[]=[
  {name: "Let's Go!"}
];

onClickMe(val){
    console.log(val);
    this.selected= val;
    if ((val || '').trim()) {
      this.methods.push({name: val.trim()});
    }
  }

  removeT(method: Travel): void {
    const index = this.methods.indexOf(method);

    if (index >= 0) {
      this.methods.splice(index, 1);
    }
  }

//----------------------------------------

  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


}

