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
  id!: any;
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

}
