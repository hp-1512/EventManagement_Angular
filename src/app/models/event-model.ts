import { Time } from "@angular/common";

export interface EventModel {
    eventId :number;
    eventImage:string;
    eventTitle:string;
    creator:string;
    vanue:string;
    startDate:string;
    endDate:string;
    startTime:Time;
    endTime:Time;
    eventDesc:string;
    maxParticipant:number;
    participatedUser:number;
    note:string;
}
