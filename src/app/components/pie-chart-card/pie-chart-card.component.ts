import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService } from '../../service/appconfigservice';
import { AppConfig } from '../../domain/appconfig';

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styleUrls: ['./pie-chart-card.component.scss']
})
export class PieChartCardComponent implements OnInit, OnDestroy {
  data: any;

  chartOptions: any;

  subscription: Subscription | undefined;

  config: AppConfig | undefined;

  constructor(private configService: AppConfigService) { }

  ngOnInit() {
    this.data = {
      labels: ['Utilized', 'remaining'],
      datasets: [
        {
          data: [20000, 2000],
          backgroundColor: ['green', 'red'],
          hoverBackgroundColor: ['green', 'red']
        }
      ]
    };

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe((config: any) => {
      this.config = config;
      this.updateChartOptions();
    });
  }

  updateChartOptions() {
    this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
