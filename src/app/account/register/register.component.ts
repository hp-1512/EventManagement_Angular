import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { ValidatePasswordService } from 'src/app/services/validate-password.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private accountService: AccountService, private validationService:ValidatePasswordService,private router: Router) { }

  registerForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required]),
    userName: new FormControl('', Validators.required),
  },
   
    this.validationService.passwordMatch('password','confirmPassword'),
  );
 
  //Validating if emailId is unique or not
  validateEmail(event: any) {
    if (event.target.value== '') {
      this.registerForm.get('email')?.setErrors({ invalid: true ,message:"Email is required." });
    }
    else {
      this.accountService.validateEmail(event.target.value).subscribe(
        data => {
          if (data.toString() == 'false') {
            this.registerForm.get('email')?.setErrors({ invalid: true ,message:"EmailId is already in use. Please enter different EmailId."});
            console.log(data);
          }
        }
      )
    }
  }

 //Validating if userName is unique or not
  validateUsername(event: any) {
    if (event.target.value== '') {
      this.registerForm.get('userName')?.setErrors({ invalid: true ,message:"Username is required." });
    }
    else {
      this.accountService.validateUserName(event.target.value).subscribe(
        data => {
          if (data.toString() == 'false') {
            this.registerForm.get('userName')?.setErrors({ invalid: true ,message:"UserName is already in use. Please enter different Username."});
            console.log(data);
          }
        }
      )
    }
  }

  //registration of a user
  submitRegistrationForm(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      this.registerForm.get('userName')?.setErrors({ invalid: true ,message:"Username is required." });
      return;
    }
    const data : User ={
      firstName:this.registerForm.get('firstName')?.value,
      lastName:this.registerForm.get('lastName')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
      username:this.registerForm.get('userName')?.value,
    }
    
    this.accountService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response),
          this.router.navigateByUrl('emailVarification')},
        error: (error) => {
          // debugger;
          console.log('Error:', error);
          // Perform error handling, such as displaying a user-friendly message
        },
      }
    )
  }

}

