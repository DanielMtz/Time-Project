import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./forms/forms.module').then(mod => mod.FormsModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(mod => mod.FormsModule)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.module').then(mod => mod.AnalysisModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
