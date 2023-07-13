import { DatePipe } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { EventModel } from 'src/app/models/event-model';
import { EventsPageService } from 'src/app/services/events-page.service';
import { EventInvitationComponent } from '../event-invitation/event-invitation.component';
import * as html2pdf from 'html2pdf.js';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { PdfGenerationService } from 'src/app/services/pdf-generation.service';
import { EventInvitation } from 'src/app/models/event-invitation';
const html2pdfVar: any = html2pdf;

@Component({
  providers: [EventInvitationComponent],
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})

export class EventsPageComponent {
  @Input() event!: EventModel;
  eventsList: EventModel[] = [];
  dateNow2: Date = new Date();
  dateNow: string;

  constructor(private eventsPage: EventsPageService, private datePipe: DatePipe, private router: Router, private eventInvitation:EventInvitationComponent) {
    this.dateNow = this.dateNow2.toISOString();
  }


  downloadInvitation(eventId: number) {
    this.router.navigate(['/home/eventinvitation', eventId]);
    // return this.eventInvitation.ngAfterViewInit2();
  }
  shareEvent(eventId: number) {
    const currentUrl = window.origin + "/home/eventinvitation/" + eventId;
    const shareData = {
      title: "EventAlchemy",
      text: "Greetings From EventAlchemy!!!",
      url: currentUrl,
    };
    try {
      navigator.share(shareData);
    } catch (err) {
      return;
    }
  };
  ngOnInit() {
    this.eventsPage.getEventsDataForCards().subscribe(data => {
      this.eventsList = data;
    });
    // $(document).ready(function () {
      $('.card-text').on('click', function () {
        if ($('.card-text').css('overflow-y') == 'scroll') {
          $('.card-text').scrollTop(0);
          $('.card-text').css({
            'height': 'auto', '-webkit-line-clamp': '2', 'overflow-y': 'hidden'
          });
        }
        else {
          $('.card-text').css({
            'height': '48px', '-webkit-line-clamp': '', 'overflow-y': 'scroll'
          });
        }
      })
      $('.card-title').on('click', function () {
        if ($(this).css('overflow-y') == 'scroll') {
          $(this).scrollTop(0);
          $(this).css({
            'height': 'auto', '-webkit-line-clamp': '2', 'overflow-y': 'hidden'
          });

        }
        else {
          $(this).css({
            'height': '25px', '-webkit-line-clamp': '', 'overflow-y': 'scroll'
          });
        }
      })
    // })

  }
}