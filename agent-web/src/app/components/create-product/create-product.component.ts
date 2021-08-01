import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  submit(): void {
    const payload = new Product()
    payload.name = this.form.controls.name.value
    payload.imageUrl = this.form.controls.imageUrl.value
    payload.price = this.form.controls.price.value
    payload.quantity = this.form.controls.quantity.value

    this.productsService.add(payload).subscribe((res: Product) => {
      this.toastr.success('Product created')
      this.router.navigate(['products'])
    }, err => {
      this.toastr.error('Error while creating product')
    })
  }

}
