import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class NavigationServicesService {

  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    
    const reponse = this.http.get<Product[]>(this.apiURL);
    console.log(reponse);
    return reponse;
  }

  getProductById(id : number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  addProduct(product : Product): Observable<Product>{
    return this.http.post<Product>(this.apiURL, product);
  }

  // Méthode pour mettre à jour un utilisateur
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiURL}/${id}`, product);
  }

  // Méthode pour supprimer un utilisateur
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }


}
