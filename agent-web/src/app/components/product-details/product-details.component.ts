import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number
  product: Product

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id']
    this.getProduct()
  }

  private getProduct() {
    this.productsService.getProduct(this.productId).subscribe((res: Product) => {
      this.product = res
    })
  }

}
