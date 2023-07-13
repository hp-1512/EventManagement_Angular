import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatedEventsComponent } from './participated-events.component';

describe('ParticipatedEventsComponent', () => {
  let component: ParticipatedEventsComponent;
  let fixture: ComponentFixture<ParticipatedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipatedEventsComponent]
    });
    fixture = TestBed.createComponent(ParticipatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
