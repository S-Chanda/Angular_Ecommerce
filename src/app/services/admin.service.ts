import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //manually imported to call api
import { SignUp, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdminLoggedIn = new BehaviorSubject<boolean>(false); //BehaviourSubject is RsJX property
  // isLoginError is defined to show error msg if login fails
  // by default false so that we don't take error prehand while logging in
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  //making function for user signup
  userSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/admin', data, { observe: 'response' })
      .subscribe((result) => {
        this.isAdminLoggedIn.next(true);
        //to store userdata in localstorage
        //for user to stay logged in after refresh, reload function
        localStorage.setItem('admin', JSON.stringify(result.body));
        this.router.navigate(['admin-home']);
      });
  }

  reloadAdmin() {
    if (localStorage.getItem('admin')) {
      this.isAdminLoggedIn.next(true);
      this.router.navigate(['admin-home']);
    }
  }

  userLogin(data: login) {
    console.warn(data);
    //api call code

    this.http
      .get(
        `http://localhost:3000/admin?email=${data.email}&password=${data.password}`, //$ should be in different color
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length) {
          console.warn('User Logged In');
          localStorage.setItem('admin', JSON.stringify(result.body));
          this.router.navigate(['admin-home']);
        } else {
          console.warn('Login failed');
          this.isLoginError.emit(true);
        }
      });
  }
}
