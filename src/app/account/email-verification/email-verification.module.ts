import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { VerificationSuccessfulComponent } from './verification-successful/verification-successful.component';
import { VerificationFailedComponent } from './verification-failed/verification-failed.component';
import { EmailVerificationComponent } from './email-verification.component';


@NgModule({
  declarations: [
    EmailVerificationComponent,
    EmailSentComponent,
    VerificationSuccessfulComponent,
    VerificationFailedComponent
  ],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule
  ]
})
export class EmailVerificationModule { }
