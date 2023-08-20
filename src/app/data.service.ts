import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  getList(){
    //return "Alo"
    return[
      {'grade':1, 'name':'David', 'country':'Nigeria'},
      {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
      {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
      {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
      {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
    ];
  }
}
