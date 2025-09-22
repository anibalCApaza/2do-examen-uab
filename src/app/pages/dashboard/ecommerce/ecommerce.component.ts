import { Component } from '@angular/core';
import { EcommerceMetricsComponent } from '../../../shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component';
import { MonthlySalesChartComponent } from '../../../shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../../shared/components/ecommerce/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../../shared/components/ecommerce/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../shared/components/ecommerce/recent-orders/recent-orders.component';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-ecommerce',
  imports: [
    EcommerceMetricsComponent,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
  ],
  templateUrl: './ecommerce.component.html',
})
export class EcommerceComponent {
  constructor(private notificacionService: NotificationService) {}

  allowNotifications() {
    this.notificacionService
      .requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          alert('Permiso concedido');
        } else {
          alert('Permiso denegado');
        }
      })
      .catch((err) => console.error(err));
  }

  testNotification() {
    this.notificacionService.showNotification('!Hola desde Angular', {
      body: 'Esta ese una notificación de prueba',
      icon: '/images/logo/logo.svg',
    });
  }
}
