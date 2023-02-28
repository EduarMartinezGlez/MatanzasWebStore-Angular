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
export class ProductgridComponent implements OnInit  {
  private baseUrl = environment.baseUrl;
  count: any;
  product: any[] = []
  Shopproduct: any[] = []


constructor(
  private http: HttpClient,
  private router: Router,
  private service:ProdgrillService
){}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getProducts()

}
productdetails(id:number){
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
      // Haz algo con los productos aquí
   });
}
addShpCart(id:number, name:string, price:number){
  const productToShop= {
    id:id,
    name:name,
    price:price,
    amount: 1
  }

  this.Shopproduct.push(productToShop);
  this.Shopproduct = this.Shopproduct.filter((obj, index, self) =>
  index === self.findIndex((t) => (
    t.id === obj.id && t.name === obj.name
  )))
console.log('el producto shop', this.Shopproduct);

    this.service.actualizarProductosSeleccionados(this.Shopproduct);

  }


  irAPaginaDeProductos() {
    this.router.navigate(['/product/shoppingcart'], { state: { productos: this.service.productosSeleccionados } });
  }

}
