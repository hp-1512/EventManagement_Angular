import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatePasswordService {

  constructor() { }
  passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    // debugger;
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  TimeDurationValidation(startTime: string, endTime: string, startDate: string, endDate: string): ValidatorFn {

    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      if (startDate != '' && endTime != '' && startTime != '' && endDate != '') {
        const startTimeControl = formGroup.get(startTime);
        const endTimeControl = formGroup.get(endTime);

        const startDate1 = new Date(startDate).toISOString();
        const endDate1 = new Date(endDate).toISOString();
        const startTime1 = new Date(`1970-01-01T${startTimeControl?.value}`);
        const endTime1 = new Date(`1970-01-01T${endTimeControl?.value}`);

        if (startDate1 == endDate1) {
          const durationInMinutes = (endTime1.getTime() - startTime1.getTime()) / (1000 * 60);
          if (durationInMinutes !== 60) {
            return { notOneHourApart: true };
          }
        }
      }
      return null;
    };
  }
}

