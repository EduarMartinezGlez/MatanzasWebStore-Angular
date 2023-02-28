import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProdgrillService } from '../prodgrill.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  constructor(
    private service: ProdgrillService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  product: any;
  selectedOption!: number;
  id!: any;
  myShopcartStorage: any [] = []
  private baseUrl = environment.baseUrl;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('inicionado componente', this.id);
    const id = parseInt(this.id);
    this.getproduct(this.id)

  }
  getproduct(id: number) {

    console.log('en el grtproduct del servicio', id);
    const url = `${this.baseUrl}/products/${id}`;
    return (
      this.http.get(url).subscribe((resp: any) => {
     this.product = resp
        console.log('this.producto en el servicio', this.product);
      }))
    }
    onSelectChange() {
      console.log(this.selectedOption);
    }
    add(id:number,name:string,price:number,amount:number ){
      console.log(id, amount);
      const myShopcartForLocalStorage = localStorage.getItem("myShopcartStore");
       this.myShopcartStorage = JSON.parse(myShopcartForLocalStorage!);
      console.log('el localstore', this.myShopcartStorage);

      this.myShopcartStorage.push({id:id,name:name, price:price,amount:amount});

      console.log('despues del push', this.myShopcartStorage);


      this.myShopcartStorage = this.myShopcartStorage.filter((obj, index, self) => {
        // Encuentra el índice del primer objeto en el array que coincide con las propiedades id y name del objeto actual
        let firstIndex = self.findIndex((t) => t.id === obj.id && t.name === obj.name);

        // Encuentra el objeto con el precio más bajo
        let lowestPriceObj = self.slice(firstIndex).reduce((a, b) => a.price < b.price ? a : b);

        // Compara el índice del objeto actual con el índice del primer objeto encontrado
        // Si son iguales, significa que este es el primer objeto con las propiedades dadas
        // Si no, significa que este objeto es un duplicado y se omite en el nuevo array
        return index === firstIndex && obj.price === lowestPriceObj.price;

      }),
      
      console.log('despues del filter', this.myShopcartStorage)




    }

}
