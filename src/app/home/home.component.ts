import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
    if (this.auth.isUserAuthenticated()) {
      return;
    }
    else {
      this.logOut();
    }
  }

  logOut() {
    this.auth.logout();
  }
}



// isUserAuthenticated() {
//   const token = localStorage.getItem("token");
//   if (token && !jwtHelper.isTokenExpired(token)) {
//     return true;
//   }
//   else {
//     this.router.navigate(["login"]);
//     return false;
//   }
// }