import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FFShopService } from '../ffshop.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-mat-form-field6',
  templateUrl: './mat-form-field6.component.html',
  styleUrls: ['./mat-form-field6.component.css']
})
export class MatFormField6Component implements OnInit {
  title = 'Matdemo Page 6';
  FFSResponse: any;
  constructor(FFSService: FFShopService) { 
    FFSService.getJSON().subscribe(data => {
      console.log(data);
    });
  
 }

  ngOnInit() {
  }

}
