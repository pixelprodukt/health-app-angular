import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodpressureValuesComponent } from './bloodpressure-values.component';

describe('BloodpressureValuesComponent', () => {
  let component: BloodpressureValuesComponent;
  let fixture: ComponentFixture<BloodpressureValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodpressureValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodpressureValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
