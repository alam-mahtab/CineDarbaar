import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockChapter1Component } from './unlock-chapter1.component';

describe('UnlockChapter1Component', () => {
  let component: UnlockChapter1Component;
  let fixture: ComponentFixture<UnlockChapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockChapter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockChapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
