import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ListData } from '../../models/ListData';
import { Result } from '../../models/Results';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private url;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://my-json-server.typicode.com/stefani0/GreeceTest/data/';
  }


  getData(): Observable<Result<ListData>> {
    return this.httpClient.get<Result<ListData>>(
      `${this.url}`
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
