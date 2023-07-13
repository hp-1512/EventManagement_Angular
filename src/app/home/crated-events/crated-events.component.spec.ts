import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CratedEventsComponent } from './crated-events.component';

describe('CratedEventsComponent', () => {
  let component: CratedEventsComponent;
  let fixture: ComponentFixture<CratedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CratedEventsComponent]
    });
    fixture = TestBed.createComponent(CratedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
