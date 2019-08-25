import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FormsComponent, CategoryContainerComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  entryComponents:  [
    CategoryContainerComponent
  ]
})
export class FormsModule { }
