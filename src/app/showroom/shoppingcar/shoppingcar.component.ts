import { Component, Input, OnInit } from '@angular/core';
import { ProdgrillService } from '../prodgrill.service';

@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent implements OnInit {

  constructor(
  public service:ProdgrillService
  ){}
  selectedProduct: any


  ngOnInit(){
    this.service.getData().subscribe((value) => {
      this.selectedProduct = value;
    });
    console.log('en oninit', this.selectedProduct);


  }



}
