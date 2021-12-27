import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationPlanTableComponent } from './medication-plan-table.component';

describe('MedicationPlanTableComponent', () => {
  let component: MedicationPlanTableComponent;
  let fixture: ComponentFixture<MedicationPlanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationPlanTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
