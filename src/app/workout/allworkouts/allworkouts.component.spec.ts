import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllworkoutsComponent } from './allworkouts.component';

describe('AllworkoutsComponent', () => {
  let component: AllworkoutsComponent;
  let fixture: ComponentFixture<AllworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
