import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesProduitsComponent } from './types-produits.component';

const routes: Routes = [{ path: '', component: TypesProduitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesProduitsRoutingModule { }
