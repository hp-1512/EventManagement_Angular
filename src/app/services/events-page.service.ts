import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventInvitation } from '../models/event-invitation';
import { EventModel } from '../models/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventsPageService {

  constructor(private http: HttpClient) { }
  getEventsDataForCards():Observable<EventModel[]>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get<EventModel[]>(`${environment.apiUrl}Events/GetEventsList`,{'headers': headers})
  }

  eventInvitationShare(eventId: number):Observable<EventInvitation>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const params = new HttpParams().set('eventId', eventId);
    return this.http.get<EventInvitation>(`${environment.apiUrl}Events/GetEventDetails`,{'headers': headers,'params':params})
  }
}
