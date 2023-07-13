export interface EventsDataPieChartModel {
    completedEvents: number ,
    ongoingEvents: number,
    upcomingEvents: number
}

export interface UsersDataPieChartModel {
    activeUsers : number,
    inactiveUsers : number
}

export interface AnnualDataBarChartModel {
    month: number,
    totalEvents:number
}
