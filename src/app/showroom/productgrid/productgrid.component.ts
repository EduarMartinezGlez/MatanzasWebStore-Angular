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
export class ProductgridComponent implements OnInit {
  private baseUrl = environment.baseUrl;
  count: any;
  countProduct: number = 0
  product: any[] = []
  Shopproduct: any[] = []


  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ProdgrillService
  ) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProducts()

    const cart = localStorage.getItem("myShopcartStore");
     this.Shopproduct = JSON.parse(cart!);
    if (this.Shopproduct!){
      this.countProduct = this.Shopproduct.length
    }
    else{
      this.countProduct = 0
    }

  }
  productdetails(id: number) {
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
  addShpCart(id: number, name: string, price: number) {
    // this.countProduct ++
    const productToShop = {
      id: id,
      name: name,
      price: price,
      amount: 1
    }

    this.Shopproduct.push(productToShop);
    /* Removing duplicates from the array. */
    this.Shopproduct = this.Shopproduct.filter((obj, index, self) =>
      index === self.findIndex((t) => (
        t.id === obj.id && t.name === obj.name
      )))
    console.log('el producto shop', this.Shopproduct);
    this.countProduct = this.Shopproduct.length

    const myShopCartStore = JSON.stringify(this.Shopproduct);
    // Guardar la cadena de texto en el localStorage utilizando setItem()
    localStorage.setItem("myShopcartStore", myShopCartStore);
    this.service.actualizarProductosSeleccionados(this.Shopproduct);

  }

  irAPaginaDeProductos() {
    this.router.navigate(['/product/shoppingcart'],
    // { state: { productos: this.service.productosSeleccionados } }
     )
     ;
  }

}
