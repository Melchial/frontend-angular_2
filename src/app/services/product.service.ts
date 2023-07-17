import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppurl: string;
  private myApiurl: string;

  constructor(private http: HttpClient) {
    this.myAppurl = environment.endpoint;
    this.myApiurl = 'api/productos/'
   }

   getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.myAppurl}${this.myApiurl}`);
   }

   deleteProducts(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppurl}${this.myApiurl}${id}`);
   }

   saveProduct (product: Product):Observable<void> {
    return this.http.post<void>(`${this.myAppurl}${this.myApiurl}`, product);
   }

   getProduct (id: number):Observable<Product> {
    return this.http.get<Product>(`${this.myAppurl}${this.myApiurl}${id}`);
   }

   updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppurl}${this.myApiurl}${id}`,product);

   }
}
