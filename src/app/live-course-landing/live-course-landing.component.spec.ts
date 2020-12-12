import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCourseLandingComponent } from './live-course-landing.component';

describe('LiveCourseLandingComponent', () => {
  let component: LiveCourseLandingComponent;
  let fixture: ComponentFixture<LiveCourseLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCourseLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCourseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
