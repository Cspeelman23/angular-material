import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FFShopService {
  //private dataUrl = 'http://my-json-server.typicode.com/Cspeelman23/json-data/'; //web api url, :base/:collectionName
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");
    //return this.http.get<any>("this.dataUrl");
    //return this.http.get("./assets/mydata.json");
  }
}
