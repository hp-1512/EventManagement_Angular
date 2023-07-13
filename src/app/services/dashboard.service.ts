import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnnualDataBarChartModel, EventsDataPieChartModel, UsersDataPieChartModel } from '../models/dashboard-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  PieChartForEventsData():Observable<EventsDataPieChartModel>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get<EventsDataPieChartModel>(`${environment.apiUrl}Dashboard/EventsDataPieChart`,{'headers': headers})
  }

  PieChartForUsersData():Observable<UsersDataPieChartModel>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get<UsersDataPieChartModel>(`${environment.apiUrl}Dashboard/UsersDataPieChart`,{'headers': headers})
  }

  BarChartForEvents():Observable<AnnualDataBarChartModel[]>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get<AnnualDataBarChartModel[]>(`${environment.apiUrl}Dashboard/EventsForBarChart`,{'headers': headers})
  }
  
}
