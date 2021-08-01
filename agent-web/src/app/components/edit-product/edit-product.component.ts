import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  form: FormGroup
  product: Product
  productId: number

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id

    this.form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    })

    this.productsService.getProduct(this.productId).subscribe((res: Product) => {
      this.product = res

      this.form.controls.name.setValue(res.name)
      this.form.controls.imageUrl.setValue(res.imageUrl)
      this.form.controls.price.setValue(res.price)
      this.form.controls.quantity.setValue(res.quantity)
    })
  }

  submit(): void {
    this.product.name = this.form.controls.name.value
    this.product.imageUrl = this.form.controls.imageUrl.value
    this.product.price = this.form.controls.price.value
    this.product.quantity = this.form.controls.quantity.value

    this.productsService.update(this.product).subscribe((res: Product) => {
      this.toastr.success('Product updated')
      this.router.navigate(['products'])
    }, err => {
      this.toastr.error('Error while updating product')
    })
  }
}
