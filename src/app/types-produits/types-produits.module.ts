import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesProduitsRoutingModule } from './types-produits-routing.module';
import { TypesProduitsComponent } from './types-produits.component';
import { ProductsTypesListComponent } from './components/products-types-list/products-types-list.component';
import { CompanyQualitiesComponent } from './components/company-qualities/company-qualities.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        TypesProduitsComponent,
        ProductsTypesListComponent,
        CompanyQualitiesComponent
    ],
    imports: [
        CommonModule,
        TypesProduitsRoutingModule,
        SharedModule
    ]
})
export class TypesProduitsModule { }
