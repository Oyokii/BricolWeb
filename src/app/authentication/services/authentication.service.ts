import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/User';


export interface Credentials{
  email : string;
  password : string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = signal<User | null | undefined>(undefined);
  BASE_URL = 'http://localhost:8000';

  private http = inject(HttpClient);

  constructor() {}

  SignIn(credentials : Credentials) : Observable<User | null | undefined> {
    return this.http.post(this.BASE_URL + '/sessions/login/', credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
      }),
      map((result : any) => {
        return this.user();
      })
    );
  }

  getUsers() : Observable<User | null | undefined> {
    return this.http.get(this.BASE_URL + '/sessions/me/').pipe(
      tap((result: any) => {
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result : any) => {
        return this.user();
      }))
  };

  LogOut() : Observable<null> {
    return this.http.get(this.BASE_URL + '/sessions/logout/').pipe(
      tap((result : any) => {
        localStorage.removeItem('token');
        this.user.set(null);
      })
    )
  }
}
