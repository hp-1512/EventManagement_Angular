import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent,
        children: [
          {path: '',component: LoginComponent },
          {path: 'login',component: LoginComponent },
          {path: 'register', component:RegisterComponent},
          { path: 'emailVarification', loadChildren: () => import('./email-verification/email-verification.module').then(m => m.EmailVerificationModule) }
        ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
