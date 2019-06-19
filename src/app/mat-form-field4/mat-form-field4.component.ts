import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-mat-form-field4',
  templateUrl: './mat-form-field4.component.html',
  styleUrls: ['./mat-form-field4.component.css']
})
export class MatFormField4Component implements OnInit {
  title = 'Matdemo Page 4';
  centered = false;
  center2 = true;
  constructor() { }
  color= "rgba(255,255,255,.5)";
  ngOnInit() {

  }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];

}
