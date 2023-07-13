import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    // AccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule, 
    ReactiveFormsModule ,
    HttpClientModule,
    RouterModule
  ]
})
export class AccountModule { }
