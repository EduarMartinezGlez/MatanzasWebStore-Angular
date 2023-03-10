import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ShoppingcarComponent } from './shoppingcar/shoppingcar.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:ProductgridComponent},
      {path:'details/:id', component:ProductdetailsComponent},
      {path:'shoppingcart', component:ShoppingcarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowroomRoutingModule { }
