import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CatalogueComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    SharedModule
  ]
})
export class CatalogueModule { }
