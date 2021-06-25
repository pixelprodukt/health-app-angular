import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodpressureFormComponent } from './bloodpressure-form.component';

describe('BloodpressureFormComponent', () => {
  let component: BloodpressureFormComponent;
  let fixture: ComponentFixture<BloodpressureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodpressureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodpressureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
