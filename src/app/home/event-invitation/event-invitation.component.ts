import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EventInvitation } from 'src/app/models/event-invitation';
import { EventsPageService } from 'src/app/services/events-page.service';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
const html2pdfVar: any = html2pdf;


@Component({
  selector: 'app-event-invitation',
  templateUrl: './event-invitation.component.html',
  styleUrls: ['./event-invitation.component.css']
})
export class EventInvitationComponent {
  @Input() eventDetails!: EventInvitation;
 public eventId !: number;
  constructor(private eventsPage: EventsPageService,private datePipe: DatePipe, private route : ActivatedRoute,private elRef:ElementRef) {
   
    // this.eventInvitation(eventId);
  }
  
  ngOnInit(){
    const eventId = parseInt(this.route.snapshot.params['eventId'], 10);
    this.loadEventDetails(eventId);
    }

    loadEventDetails(eventId:number){
      this.eventId = eventId;
      this.eventsPage.eventInvitationShare(eventId).subscribe(data=>
        this.eventDetails = data
        )
        return;
    }

    // ngAfterViewInit() {
    //   // Use a setTimeout to allow for one tick of change detection
    //   setTimeout(() => {
    //     this.eventInvitation(this.eventId);
    //   });
    // }
    @ViewChild('invitationContainer', { static: false }) content!: ElementRef;
  
    eventInvitation(eventId: number) {
      this.loadEventDetails(eventId);
      setTimeout(() => {
        // const content = this.elRef.nativeElement.querySelector('container');
        debugger;
        if (this.content) {
          debugger;
          html2canvas(this.content.nativeElement,{ useCORS: true }).then((canvas) => {
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
            pdf.save('webpage.pdf');
          });
        }
      }, 1000); // Delay of 1 second (adjust as needed)
    }
    
}
