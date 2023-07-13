import { Component } from '@angular/core';
import {FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private auth:AuthService
  ) { }

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  // ngOnInit() {
  // }

  onLoginSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      // debugger;
      this.loginForm.markAllAsTouched();
      return;
    }
    const userName  = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    this.auth.ifUserExist(userName,password).subscribe(
      data=> {
        console.log(data);
        // debugger;
        if(!data){
          this.loginForm.setErrors({InvalidUser:true})
        }
        else{
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('home');
        }
      }
    )

  
    // logout(): void {
    //   this.authService.logout();
    //   // Redirect or perform any other actions upon logout
    // }
    
  }
}
