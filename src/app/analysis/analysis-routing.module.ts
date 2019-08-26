import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';


const routes: Routes = [
  {
    path: '',
    component: AnalysisComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
