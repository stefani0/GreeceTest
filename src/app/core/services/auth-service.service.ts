import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { shareReplay } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  loginauth() {
    console.log(httpOptions)
    return this.http.post('/home/', {})

        // this is just the HTTP call, 
        // we still need to handle the reception of the token
       // .shareReplay();
}
}