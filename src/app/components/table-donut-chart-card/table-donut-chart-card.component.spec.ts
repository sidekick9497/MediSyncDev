import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDonutChartCardComponent } from './table-donut-chart-card.component';

describe('TableDonutChartCardComponent', () => {
  let component: TableDonutChartCardComponent;
  let fixture: ComponentFixture<TableDonutChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDonutChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDonutChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
