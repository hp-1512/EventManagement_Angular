import { Time } from "@angular/common";

export interface EventInvitation {
    eventTitle:string;
    eventDesc:string;
    vanue:string;
    startDate:string;
    endDate:string;
    startTime:Time;
    endTime: Time;
    createdBy:string;
    note:string;
}
