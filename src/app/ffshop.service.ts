import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FFShopService {
  //private dataUrl = '' //web api url, :base/:collectionName
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get<any>("FFSResponse.json");
    //return this.http.get<any>("this.dataUrl");
    //return this.http.get("./assets/mydata.json");
  }
}
