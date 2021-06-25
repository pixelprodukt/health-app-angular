import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodpressureComponent } from './view-bloodpressure.component';

describe('ViewBloodpressureComponent', () => {
  let component: ViewBloodpressureComponent;
  let fixture: ComponentFixture<ViewBloodpressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodpressureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
