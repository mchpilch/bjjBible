import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginRegisterQuestionDialogComponent} from './login-register-question-dialog.component';

describe('LoginRegisterQuestionComponent', () => {
  let component: LoginRegisterQuestionDialogComponent;
  let fixture: ComponentFixture<LoginRegisterQuestionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterQuestionDialogComponent]
    });
    fixture = TestBed.createComponent(LoginRegisterQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
