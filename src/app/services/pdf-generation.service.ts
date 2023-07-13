import { Injectable } from '@angular/core';
import { EventModel } from 'src/app/models/event-model';
import html2pdf from 'html2pdf.js';
import { EventInvitation } from '../models/event-invitation';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {
  generateEventInvitationPDF(event: EventInvitation) {
    const eventInvitationComponent = document.createElement('app-event-invitation');
    eventInvitationComponent.setAttribute('eventDetails', JSON.stringify(event));

    const container = document.createElement('div');
    container.appendChild(eventInvitationComponent);

    document.body.appendChild(container);

    setTimeout(() => {
      const component = eventInvitationComponent as any;
      component.generatePDF();

      document.body.removeChild(container);
    }, 0);
  }
}
