import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryComponent } from './pages/category/category.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const routes: Routes = [
{path: '', redirectTo: '/homepage', pathMatch: 'full'},
{path: 'category/:category', component: CategoryComponent},
{path: 'homepage', component: HomepageComponent},
{path: 'item/:id', component: ItemDetailsComponent},
{path: 'favorites', component: FavoritesComponent},
{path: 'brand/:brand', component: BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}