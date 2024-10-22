import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlAPI = 'http://localhost:3000/products'
  products : Product[] = [];
  
  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI);
  }

  getProductById(id : number): Observable<Product>{
    return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

  addProduct(produit : Product){
    this.http.post<Product>(this.urlAPI, produit);
  }

  updateProduct(id : number, produit : Product){
    this.http.put(`${this.urlAPI}/${id}`, produit);
  }

  deleteProducts(){
    this.http.delete(this.urlAPI);
  }

  deleteProductById(id : number){
    this.http.delete(`${this.urlAPI}/${id}`)
  }
}
