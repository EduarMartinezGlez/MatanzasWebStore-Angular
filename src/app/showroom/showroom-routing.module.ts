import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductgridComponent } from './productgrid/productgrid.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:ProductgridComponent},
      {path:'details', component:ProductdetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowroomRoutingModule { }
