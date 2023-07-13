import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventInvitationComponent } from './event-invitation/event-invitation.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,
  children: [
    {path: '',component: DashboardComponent },
    {path: 'dashboard',component: DashboardComponent, title:'Dashboard' },
    {path: 'eventsPage',component:EventsPageComponent, title:'EventsPage'},
    {path: 'eventCreation',component:CreateEventComponent, title:'EventsPage'},   
    
  ],
},
{path: 'eventinvitation/:eventId',component: EventInvitationComponent, title:'EventsPage'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
