import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShoppingcarComponent } from './shoppingcar/shoppingcar.component';
import{ProdgrillService} from './prodgrill.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductgridComponent,
    ProductdetailsComponent,
    ShoppingcarComponent
   ],
  imports: [
    CommonModule,
    ShowroomRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProdgrillService]
})
export class ShowroomModule { }
