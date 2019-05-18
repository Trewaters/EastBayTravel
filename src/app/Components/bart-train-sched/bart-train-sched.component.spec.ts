import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartTrainSchedComponent } from './bart-train-sched.component';

describe('BartTrainSchedComponent', () => {
  let component: BartTrainSchedComponent;
  let fixture: ComponentFixture<BartTrainSchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartTrainSchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartTrainSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
