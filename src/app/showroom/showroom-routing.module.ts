import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ShoppingcarComponent } from './shoppingcar/shoppingcar.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:ProductgridComponent},
      {path:'details/:id', component:ProductdetailsComponent},
      {path:'shoppingcar', component:ShoppingcarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowroomRoutingModule { }
