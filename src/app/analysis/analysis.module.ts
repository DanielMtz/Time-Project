import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';
import { SharedModule } from '../shared/shared.module';
import { BarChartComponent } from './containers/bar-chart/bar-chart/bar-chart.component';


@NgModule({
  declarations: [AnalysisComponentComponent, BarChartComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    SharedModule
  ]
})
export class AnalysisModule { }
