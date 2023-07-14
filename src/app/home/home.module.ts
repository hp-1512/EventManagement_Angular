import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventInvitationComponent } from './event-invitation/event-invitation.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CratedEventsComponent } from './crated-events/crated-events.component';
import { ParticipatedEventsComponent } from '../participated-events/participated-events.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { Chart } from 'chart.js/auto';
@NgModule({
  declarations: [
    EventsPageComponent,
    CreateEventComponent,
    CratedEventsComponent,
    ParticipatedEventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule 
  ],
  providers:[
    DatePipe,
    EventInvitationComponent,
    // Chart
  ]
})
export class HomeModule { }
