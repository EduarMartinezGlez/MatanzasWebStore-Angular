import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProdgrillService } from '../prodgrill.service';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.scss']
})
export class ProductgridComponent implements OnInit, OnDestroy  {
  private baseUrl = environment.baseUrl;
  count: any;
  product: any[] = []
  Shopproduct: number[] = []


constructor(
  private http: HttpClient,
  private router: Router,
//  private dataservice:ProdgrillService,
  private service:ProdgrillService
){}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getProducts()

}
productdetails(id:number){
// this.service.getproduct(id)
  this.router.navigateByUrl(`/product/details/${id}`)
}
getProducts() {

  this.http.get(`${this.baseUrl}/products`)
    .subscribe(products => {
      const resp: any[] = Object.values(products)
      console.log('resp de la funcio', resp);

      this.count = resp[0]
      resp[1].forEach((element: any) => {
        this.product.push(element)
      });
      console.log('subcrive', this.product);
      // Haz algo con los productos aquí
   });
}
addShpCart(id:number){
  console.log(' eb el id del add', id);


  this.Shopproduct.push(id);
  this.Shopproduct = this.Shopproduct.filter((elem, index) => {
    return this.Shopproduct.indexOf(elem) === index;
  })

    this.service.setData(this.Shopproduct);

console.log('el array de product',this.Shopproduct);



    //this.service.updateData(id);
  }
  ngOnDestroy() {
    console.log('Sender component destroyed');
  }


}
