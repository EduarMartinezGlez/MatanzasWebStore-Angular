import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    ProductgridComponent,
    ProductdetailsComponent
   ],
  imports: [
    CommonModule,
    ShowroomRoutingModule
  ]
})
export class ShowroomModule { }
