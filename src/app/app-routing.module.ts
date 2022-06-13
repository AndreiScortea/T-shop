import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomeComponent } from './home/home.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { WomenPageComponent } from './women-page/women-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'man',
    component: MenPageComponent,
  },
  {
    path: 'woman',
    component: WomenPageComponent,
  },
  {
    path: 'kids',
    component: KidsPageComponent,
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
  }
  ,{
    path: 'shoping-cart',
    component: ShoppingCartPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
