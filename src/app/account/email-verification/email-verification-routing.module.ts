import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { EmailVerificationComponent } from './email-verification.component';
import { VerificationFailedComponent } from './verification-failed/verification-failed.component';
import { VerificationSuccessfulComponent } from './verification-successful/verification-successful.component';

const routes: Routes = [
  { path: '', component: EmailVerificationComponent ,
  children: [
    {path: 'VerifyEmail',component: EmailSentComponent },
    {path: 'VerificationSuccessful',component: VerificationSuccessfulComponent },
    {path: 'Error',component: VerificationFailedComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailVerificationRoutingModule { }
