import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts() {
    this.productsService.getProducts().subscribe((res: Product[]) => {
      this.products = res
    })
  }

  add() {

  }

  edit(product: Product) {

  }

  remove(product: Product) {

  }

  details(product: Product) {
    this.router.navigate(['/products/' + product.id])
  }
}
