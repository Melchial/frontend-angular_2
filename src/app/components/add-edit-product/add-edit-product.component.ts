import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    })
  }
   
  addProducts() {
    /*console.log(this.form.value.name);
    console.log(this.form.get('name')?.value);*/


    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,    
    }

    console.log(product)
    
  }

}
