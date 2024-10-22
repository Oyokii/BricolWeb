import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LivingRoomComponent } from './components/living-room/living-room.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { BestProductsListComponent } from './components/best-products-list/best-products-list.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationServicesService } from './services/navigation-services.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LivingRoomComponent,
    NewCollectionComponent,
    BestProductsListComponent,
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    NavigationServicesService
  ]
})
export class HomeModule { }
