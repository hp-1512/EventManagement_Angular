import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EventsDataPieChartModel } from '../../models/dashboard-data';

import { UsersDataPieChartModel ,AnnualDataBarChartModel} from '../../models/dashboard-data';

import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) { }
  public eventsChart: any;
  public usersChart: any;
  public barChart: any;

  public eventsDataPieChartModel!: EventsDataPieChartModel;
  public usersDataPieChartModel!: UsersDataPieChartModel;
  public barChartModel!: AnnualDataBarChartModel [];
  ngOnInit() {
    
    this.dashboardService.PieChartForEventsData().subscribe(data => {
      this.eventsDataPieChartModel = data;
      this.createPieChartForEventsData(this.eventsDataPieChartModel)
    });
    this.dashboardService.PieChartForUsersData().subscribe(data => {
      this.usersDataPieChartModel = data;
      this.createPieChartForUser(this.usersDataPieChartModel)
    });

    this.dashboardService.BarChartForEvents().subscribe(data=>{
      this.createBarChart(data);
    }
    );
  }

  // Pie Charts For Event Sorting Based on their status

  createPieChartForEventsData(data: EventsDataPieChartModel) {
    this.eventsChart = new Chart("PieChartForEventsData", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["Completed Events", "Ongoing Events", "Upcoming Events"],
        datasets: [{
          label: 'Insights Of Events',
          data: [data.completedEvents, data.ongoingEvents, data.upcomingEvents],
          backgroundColor: [
            "rgba(185, 29, 71, 0.7)", "rgba(0, 171, 169, 0.7)", "rgba(43, 87, 151, 0.7)"
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Insights Of Events'
          },
        }
      }

    });
  }

  // Pie Charts For Users Sorting Based on their status
  createPieChartForUser(data: UsersDataPieChartModel) {
    this.usersChart = new Chart("PieChartForUsersData", {
      type: 'pie',
      data: {
        labels: ["Active Users", "Inactive Users"],
        datasets: [{
          backgroundColor: ['rgba(232, 195, 185, 0.7)', 'rgba(30, 113, 69, 0.7)'],
          data: [data.activeUsers, data.inactiveUsers],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Insights Of Users'
          },
        },
      },
    });
  }


  getMonthName(monthNumber : any) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    // Using the browser's default locale.
    return date.toLocaleString([], { month: 'long' });
}

  // Annual Insights of Events 
  createBarChart(data: AnnualDataBarChartModel[]){
    var months : string[] = [];
    var events : number[] = [];
    data.forEach(element => {
      months.push(this.getMonthName(element.month));
      events.push(element.totalEvents);
    });
    this.barChart = new Chart("barChartForEvents", {
      type: 'bar',
      data: {
          labels: months,
          datasets: [{
              label: 'Number of Events Conducted',
              data: events,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)',
                  'rgba(17, 46, 81, 0.2)',
                  'rgba(133, 58, 34, 0.2)',
                  'rgba(54, 158, 82, 0.2)',
                  'rgba(71, 11, 97, 0.2)',
                  'rgba(101, 112, 26, 0.2)',
              ],
              borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)',
                  'rgb(17, 46, 81)',
                  'rgb(133, 58, 34)',
                  'rgb(54, 158, 82)',
                  'rgb(71, 11, 97)',
                  'rgb(101, 112, 26)',
              ],
              borderWidth: 1.3
          }]
      },
      options: {
          /*indexAxis: 'y',*/
          aspectRatio:2.5,
          scales: {
              y: {
                  beginAtZero: true,
                  // max: range,
                  ticks: {
                    precision: 0
                  }
              }
          },
          plugins: {
              legend: {
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Annual Summary of Total Events Conducted'
              }
          }
      },


  });
  }
}