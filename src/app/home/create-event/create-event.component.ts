import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ValidatePasswordService } from 'src/app/services/validate-password.service';
// import{Jquery} from 'jquery'
// import '../../../jquery-plugins.d.ts';
// declare global {
//   interface JQuery {
//       imageUploader(options?: any): any;
//   }
// }
// declare var imageUploader: any;
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  constructor(private validationService: ValidatePasswordService, private router: Router) { }

  createEventForm: FormGroup = new FormGroup({
    eveTitle: new FormControl('', [Validators.required, Validators.minLength(2)]),
    eventDesc: new FormControl('', [Validators.required, Validators.minLength(20)]),
    note: new FormControl(''),
    vanue: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    maxParticipant: new FormControl('', Validators.required),
  });

  ngOnInit() {
    $(document).ready(function () {
      $('#createdBy').val(localStorage.getItem('userId') ?? 'null');
      $('#createdByForDisplay').val(localStorage.getItem('userName') ?? 'null');
      let currentDate =new Date();
      let crD =currentDate.toISOString().slice(0, 10)
      debugger;
      $('#startDate').attr('min',crD)
    })
  }
  // ngAfterViewInit(){
  //   $("#preview-event-images").imageUploader({});
  // }

  eventCreation(){
    if(!this.createEventForm.valid){
      return;
    }
  }

   setEndDate() {
    let startDateVal = $("#startDate").val()  as string;
    let start = new Date(startDateVal);
    // debugger;
    start.setDate(start.getDate());
    var minEndDateStr = start.toISOString().slice(0, 10);
    $("#endDate").attr("min", minEndDateStr);
}
 setEndTime() {
    var start = $("#startDate").val();
    var end = $("#endDate").val();

     const startTimeVal = $("#startTime").val();
    if (start == end) {
        // let [hours, mins] = startTimeVal.split(':') ;
        // hours = parseInt(hours) + 1;
        // if (hours < 10) {
        //     hours = hours.toString().padStart(2, '0');
        // };
        // let list = [hours, mins];
        // let newstart = list.join(':');
        // console.log(newstart);

        // $("#endTime").attr("min", newstart);
    }
}
}
