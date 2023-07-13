import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSuccessfulComponent } from './verification-successful.component';

describe('VerificationSuccessfulComponent', () => {
  let component: VerificationSuccessfulComponent;
  let fixture: ComponentFixture<VerificationSuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationSuccessfulComponent]
    });
    fixture = TestBed.createComponent(VerificationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
