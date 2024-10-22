import { Component, OnInit  } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products : Product [] = [];

  constructor(private produitService : ProductsService){}

  ngOnInit(): void {
    this.produitService.getProducts().subscribe(
      ((liste)=>{
        return this.products = liste;
      }),
      (error) => {
        console.error("Erreur trouvée : ", error);
      }
    ) 
  }

}
