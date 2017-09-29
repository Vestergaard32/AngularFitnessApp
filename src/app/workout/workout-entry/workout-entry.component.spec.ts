import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutEntryComponent } from './workout-entry.component';

describe('WorkoutEntryComponent', () => {
  let component: WorkoutEntryComponent;
  let fixture: ComponentFixture<WorkoutEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
