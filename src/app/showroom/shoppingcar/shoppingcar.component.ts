import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdgrillService } from '../prodgrill.service';

@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent {

  productosSeleccionados: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: ProdgrillService) {

    this.route.params.subscribe(params => {
      if (params && params['productos']) {
        console.log('paramettos de produc', params['productos']);

        this.productosSeleccionados = params['productos'];
        console.log('product select', this.productosSeleccionados);

      }
    });

    if (window.history.state.productos) {
      this.productosSeleccionados = window.history.state.productos;
      this.dataService.actualizarProductosSeleccionados(this.productosSeleccionados);
    }
  }



}
