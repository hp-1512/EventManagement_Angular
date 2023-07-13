import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { EventInvitationComponent } from './home/event-invitation/event-invitation.component';

const routes: Routes = [ 
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
