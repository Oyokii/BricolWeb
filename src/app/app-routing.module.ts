import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)
  },
  {
    path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then(m => m.BoutiqueModule)
  },
  {
    path: 'types-produits',
    loadChildren: () => import('./types-produits/types-produits.module').then(m => m.TypesProduitsModule)
  },
  // { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
