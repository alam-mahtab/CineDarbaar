import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentAndCareersComponent } from './talent-and-careers.component';

describe('TalentAndCareersComponent', () => {
  let component: TalentAndCareersComponent;
  let fixture: ComponentFixture<TalentAndCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentAndCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentAndCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
