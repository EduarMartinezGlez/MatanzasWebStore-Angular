import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdgrillService } from '../prodgrill.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent {

  productSelect: any[] = [];
  productToBuy:{}={}
  showValue: number =0;
  prodTotalValue: any[] =[]

  constructor(
    private route: ActivatedRoute,
    private dataService: ProdgrillService,
    private formBuilder: FormBuilder,
    ) {

      this.route.params.subscribe(params => {
        if (params && params['productos']) {
          console.log('paramettos de produc', params['productos']);

          this.productSelect = params['productos'];
          console.log('product select', this.productSelect);

        }
      });

      if (window.history.state.productos) {
        this.productSelect = window.history.state.productos;
        this.dataService.actualizarProductosSeleccionados(this.productSelect);
        console.log('productos resividos', this.productSelect);
        for (const key in this.productSelect) {
        //  if (Object.prototype.hasOwnProperty.call(object, key)) {
          console.log('dentro del for ', this.productSelect[key].price);

            this.prodTotalValue.push(this.productSelect[key].price);

         // }
        }
        console.log('prod valor conun for',this.prodTotalValue);


      }
    }


    Form: FormGroup = this.formBuilder.group({
      amount: ['', [Validators.required]]
    });
    onSubmit() {
      // Obtén los valores del formulario
    const values = this.Form.value;
    console.log(values);
  }

  add(prod:any, i:number){
  const amount =prod.amount++
this.prodTotalValue[i] = prod.amount * prod.price
    console.log('el valor con click', this.prodTotalValue)


  this.productToBuy = {
    name:this.productSelect[i].name,
    price:this.productSelect[i].price,
    amount:amount
  }

   console.log('valor de la cantidad', this.productToBuy);

  }



}
