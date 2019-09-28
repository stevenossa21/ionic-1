import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { 
    console.log('Hello RestServiceProvider Provider');
  }

  apiUrl = 'http://www.mocky.io/v2/5d8981933000006400b9a155';

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }
}
