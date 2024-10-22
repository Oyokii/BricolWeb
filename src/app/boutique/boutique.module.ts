import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueRoutingModule } from './boutique-routing.module';

import { BoutiqueComponent } from './boutique.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LivingRoomUnComponent } from './components/living-room-un/living-room-un.component';
import { LivingRoomDeuxComponent } from './components/living-room-deux/living-room-deux.component';
import { TypesProductComponent } from './components/types-product/types-product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BoutiqueComponent,
    ProductsListComponent,
    LivingRoomUnComponent,
    LivingRoomDeuxComponent,
    TypesProductComponent
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    SharedModule
  ]
})
export class BoutiqueModule { }
