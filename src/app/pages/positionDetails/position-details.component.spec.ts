import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDetailsComponent } from './position-details.component';

describe('PositionDetailsComponent', () => {
  let component: PositionDetailsComponent;
  let fixture: ComponentFixture<PositionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionDetailsComponent]
    });
    fixture = TestBed.createComponent(PositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
