import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastrService: ToastrService
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
    this.router.navigate(['add'])
  }

  edit(product: Product) {
    this.router.navigate(['edit' + '/' + product.id])
  }

  remove(product: Product) {
    this.productsService.removeProduct(product.id).subscribe(() => {
      this.toastrService.success('Product removed')
      this.products = this.products.filter(p => p.id !== product.id)
    }, err => {
      this.toastrService.error('Error while removing product')
    })
  }

  details(product: Product) {
    this.router.navigate(['/products/' + product.id])
  }

  reports() {
    this.router.navigate(['/reports'])
  }
}
