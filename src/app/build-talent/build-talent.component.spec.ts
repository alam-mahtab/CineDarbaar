import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTalentComponent } from './build-talent.component';

describe('BuildTalentComponent', () => {
  let component: BuildTalentComponent;
  let fixture: ComponentFixture<BuildTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
