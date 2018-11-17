import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../products.component';
import { ProductService } from '../products.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.productService.updateProduct(this.product.name, { active: isActive });
  }

  deletProduct() {
    this.productService.deleteProduct(this.product.name);
  }
}
