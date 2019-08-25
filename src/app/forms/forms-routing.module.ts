import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryContainerComponent } from './containers/category-container/category-container.component'
import { FormsComponent } from './forms.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
