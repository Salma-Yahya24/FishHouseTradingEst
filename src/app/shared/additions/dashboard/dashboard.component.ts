import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('salesChart') salesChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('profitChart') profitChartRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const salesCtx = this.salesChartRef.nativeElement.getContext('2d');
      const profitCtx = this.profitChartRef.nativeElement.getContext('2d');

      if (salesCtx) {
        new Chart(salesCtx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
              label: 'Sales',
              data: [30000, 40000, 25000, 50000],
              backgroundColor: '#1976d2',
            }]
          }
        });
      }

      if (profitCtx) {
        new Chart(profitCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
              {
                label: 'Profit',
                data: [15000, 18000, 12000, 25000],
                borderColor: '#4caf50',
                fill: false
              },
              {
                label: 'Expenses',
                data: [10000, 12000, 13000, 15000],
                borderColor: '#f44336',
                fill: false
              }
            ]
          }
        });
      }
    }
  }
}
