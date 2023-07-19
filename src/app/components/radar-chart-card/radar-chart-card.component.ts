import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService } from '../../service/appconfigservice';
import { AppConfig } from '../../domain/appconfig';

@Component({
  selector: 'app-radar-chart-card',
  templateUrl: './radar-chart-card.component.html',
  styleUrls: ['./radar-chart-card.component.scss']
})
export class RadarChartCardComponent implements OnInit, OnDestroy {
  data: any;

  chartOptions: any;

  subscription: Subscription | undefined;

  config: AppConfig | undefined;

  constructor(private configService: AppConfigService) { }

  ngOnInit() {
    this.data = {
      labels: ['C1', 'C2', 'C3', 'C4', 'CC5'],
      datasets: [
        {
          label: 'Analyzed',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 29, 90, 81, 24]
        },
        {
          label: 'Remaining',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [48, 88, 40, 69, 34]
        }
      ]
    };

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
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
      },
      scales: {
        r: {
          pointLabels: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          },
          angleLines: {
            color: '#ebedef'
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
      },
      scales: {
        r: {
          pointLabels: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          },
          angleLines: {
            color: 'rgba(255,255,255,0.2)'
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
