import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicationPlanComponent } from './view-medication-plan.component';

describe('ViewMedicationPlanComponent', () => {
  let component: ViewMedicationPlanComponent;
  let fixture: ComponentFixture<ViewMedicationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicationPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
