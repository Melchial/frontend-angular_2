import { Component,OnInit } from '@angular/core';
import {Product} from 'src/app/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
      { id:1, name: 'Coca Cola',description: 'Bebida con azucar',price: 4,stock: 200},
      { id:2, name: 'Inka Cola',description: 'Bebida carbonatada',price: 5,stock: 100},

  ] 
  
  constructor() {}
  ngOnInit(): void {
   
  }

}
