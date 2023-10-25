import { Injectable } from '@angular/core';
import { SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  userSignUp(user: SignUp) {
    this.http
      .post('http://localhost:3000/users', user, { observe: 'response' }) //to check response with body, observe is used
      .subscribe((result) => {
        console.warn(result);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.route.navigate(['/']);
        }
      });
  }
}
