import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router'; //for redirecting
import { SignUp } from '../data-type'; //for importing datatype
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) {}
  //defining private property inside constructor
  showLogin = false; //for openLogin and openSignUp
  authError: string = ''; //for login error

  //to stay logged in after refresh

  ngOnInit(): void {
    this.admin.reloadAdmin();
  }

  signUp(data: SignUp): void {
    this.admin.userSignUp(data);
  }

  login(data: SignUp): void {
    this.authError = ''; //to hide error msg while re-login
    this.admin.userLogin(data);
    this.admin.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password not correct! Please try again';
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
