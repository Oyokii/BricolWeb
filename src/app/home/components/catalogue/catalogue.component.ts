import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { NavigationServicesService } from '../../services/navigation-services.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
  products : Product[] = [];
  
  constructor(private productServices : NavigationServicesService){}
  
  ngOnInit(): void {

    const resultat = this.productServices.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data;  // Stocker les utilisateurs récupérés
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      });
    console.log(resultat);
    }
}
