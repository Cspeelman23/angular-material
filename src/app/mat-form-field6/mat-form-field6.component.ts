import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FFShopService } from '../ffshop.service';
import {Observable} from 'rxjs';

export interface TestData {
  id: number;
  name: string;
  email: string;
  address;
}
@Component({
  selector: 'app-mat-form-field6',
  templateUrl: './mat-form-field6.component.html',
  styleUrls: ['./mat-form-field6.component.css']
})


export class MatFormField6Component implements OnInit {
  title = 'Matdemo Page 6';
  result= '';
  testy: TestData;
  FFSResponse: any;
  constructor(FFSService: FFShopService) { 
    FFSService.getJSON().subscribe(testy => this.testy =testy)   
  }

    CallOnMe(x){
      if (x==1){
        console.log("testy = " + this.testy.name);
        this.result= this.testy.name;
      }
      else if(x==2){
        console.log("testy = " + this.testy.email);
        this.result= this.testy.email;
      }else{
        console.log("testy = " + this.testy.address.city);
        this.result= this.testy.address.city;
      }
    }
 

  ngOnInit() {
  }

  

}
