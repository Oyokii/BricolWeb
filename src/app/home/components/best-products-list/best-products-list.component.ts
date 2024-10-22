import { Component } from '@angular/core';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-best-products-list',
  templateUrl: './best-products-list.component.html',
  styleUrl: './best-products-list.component.css'
})
export class BestProductsListComponent {
  products : Product[] = [
    {
      id: 3,
      libelle: 'lampe',
      description: 'Une lampe',
      price: 25,
      image: 'images/products/lampe.jpeg'
    },
    {
      id: 1,
      libelle: 'plante',
      description: 'Une plante qui rajoute de la vie au foyer et dans les coeurs',
      price: 25,
      image: 'images/products/plante.jpeg'
    },
    {
      id: 2,
      libelle: 'table',
      description: 'Une table',
      price: 25,
      image: 'images/products/chaise.jpeg'
    },
    {
      id: 0,
      libelle: 'tapis',
      description: 'Un tapis très beau et avec une très bonne note',
      price: 23,
      image: 'images/products/tapis.jpeg'
    },
  ];
}
