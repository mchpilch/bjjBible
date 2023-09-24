import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniquesComponent } from './techniques.component';

describe('TechniquesComponent', () => {
  let component: TechniquesComponent;
  let fixture: ComponentFixture<TechniquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechniquesComponent]
    });
    fixture = TestBed.createComponent(TechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
