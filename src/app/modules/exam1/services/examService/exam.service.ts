import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private url;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://my-json-server.typicode.com/stefani0/GreeceTest/data/';
  }


  getData(): Observable<any> {
    return this.httpClient.get<any>(
      'https://my-json-server.typicode.com/stefani0/GreeceTest/data/'
    )
  }


  deleteData(params) {
    return this.httpClient.delete(`${this.url}${params}`)
      .pipe(map((response: any) => {  

      }));
  }

  updatePost(postData) {   
    const id = postData.id;
    return this.httpClient.put(`${this.url}${id}`, postData)
  }

  addPost(postData): Observable<any> {
    return this.httpClient.post(`${this.url}`, postData);
  }


}
