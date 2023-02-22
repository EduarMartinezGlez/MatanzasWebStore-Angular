import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdgrillService {

   _id!: number;
  private baseUrl = environment.baseUrl;
   product:any
   Shopproduct: any[] = [];

   private product$ = new BehaviorSubject<any>({});
   selectedProduct$ = this.product$.asObservable();


  //  setProduct(product: any) {
  //   console.log('en el servcio setproduct', product);
  //    this.product$.next(product);
  //  }

   setData(data: any) {
    console.log('serdata', data);

    this.product$.next(data);
  }

  getData() {
    console.log('getdata', this.product$);

    return this.product$.asObservable();
  }


  constructor(private http: HttpClient) { console.log('DataService constructor called');}

  setObject(obj: any) {
    this.product = obj;
  }

 getObject() {
    return this.product;
  }

  setIdProd(prodId:number){
    this._id = prodId
  }
  getIdProd(){
    return  this._id
  }

  getproduct(id: number) {
    this.setIdProd(id)
    //console.log('en el grtproduct del servicio', id);
    const url = `${this.baseUrl}/products/${id}`;
    return (
      this.http.get(url).subscribe((resp) => {
      //  console.log('resp del servicio', resp);
    //  this._id = resp
        this.setObject(resp)
        console.log('this.producto en el servicio', this.getObject());
      }),
      catchError((error) => of(error))
    );
  }
  private data = new BehaviorSubject<string>('');
  currentData = this.data.asObservable();

  updateData(data: string) {
    this.data.next(data);
  }
  agregarDatosAlArray(datos: number) {
    // Agregar los datos al array existente
    this.Shopproduct.push(datos);
    this.Shopproduct = this.Shopproduct.filter((elem, index) => {
      return this.Shopproduct.indexOf(elem) === index;
    })
    console.log('en el array en el servicio', this.Shopproduct);

//return this.Shopproduct
  }

}
