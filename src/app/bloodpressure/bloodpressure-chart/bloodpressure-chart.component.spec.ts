import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodpressureChartComponent } from './bloodpressure-chart.component';

describe('BloodpressureChartComponent', () => {
  let component: BloodpressureChartComponent;
  let fixture: ComponentFixture<BloodpressureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodpressureChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodpressureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
