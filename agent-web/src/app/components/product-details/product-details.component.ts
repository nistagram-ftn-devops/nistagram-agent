import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  form: FormGroup
  productId: number
  product: Product
  showForm = false

  constructor(
    private productsService: ProductsService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id']
    this.getProduct()

    this.form = this.fb.group({
      buyerName: ['', Validators.required],
      buyerAddress: ['', Validators.required],
    })
  }

  private getProduct() {
    this.productsService.getProduct(this.productId).subscribe((res: Product) => {
      this.product = res
    })
  }

  toggleShowForm() {
    this.showForm = !this.showForm
  }

  submit() {
    const order = new Order()
    order.buyerName = this.form.controls.buyerName.value
    order.buyerAddress = this.form.controls.buyerAddress.value
    order.product = this.product

    this.orderService.buy(order).subscribe((res: Order) => {
      this.toastr.success('Order created')
      this.form.controls.buyerName.setValue('')
      this.form.controls.buyerAddress.setValue('')
      this.toggleShowForm()
    }, err => {
      this.toastr.error('Error while creating order')
    })
  }
}
