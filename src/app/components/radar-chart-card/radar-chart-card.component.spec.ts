import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartCardComponent } from './radar-chart-card.component';

describe('RadarChartCardComponent', () => {
  let component: RadarChartCardComponent;
  let fixture: ComponentFixture<RadarChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
