import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {

  constructor(private http: HttpClient) { }

  getBookInfo(): Observable<any> {
    return this.http.get<any>("https://s3.amazonaws.com/api-fun/books.json");
  }
}
