import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdgrillService } from '../prodgrill.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  constructor(
    private service: ProdgrillService,
    private route: ActivatedRoute
  ) {}
  product: any;
  id!: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('inicionado componente', this.id);
    const id = parseInt(this.id);
    this.service.getproduct(id);
    this.product = this.service.getObject();
  }

}
