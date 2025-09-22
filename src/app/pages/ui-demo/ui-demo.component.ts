import { Component } from '@angular/core';
import { AlertComponent } from '../../shared/components/ui/alert/alert.component';
import { ComponentCardComponent } from '../../shared/components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { CommonModule } from '@angular/common';
import { BarChartOneComponent } from '../../shared/components/charts/bar/bar-chart-one/bar-chart-one.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-ui-demo',
  imports: [
    AlertComponent,
    CommonModule,
    BarChartOneComponent,
    ComponentCardComponent,
    PageBreadcrumbComponent,
    ButtonComponent,
  ],
  templateUrl: './ui-demo.component.html',
  styles: '',
})
export class UiDemoComponent {}
