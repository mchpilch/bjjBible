import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutQuestionComponent } from './logout-question.component';

describe('LogoutQuestionComponent', () => {
  let component: LogoutQuestionComponent;
  let fixture: ComponentFixture<LogoutQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutQuestionComponent]
    });
    fixture = TestBed.createComponent(LogoutQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
