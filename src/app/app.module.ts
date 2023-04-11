import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CategoryComponent } from './pages/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrandComponent } from './pages/brand/brand.component';
import { ReplaceAllPipe } from './pipes/replace-all.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ItemDetailsComponent,
    NavigationComponent,
    FavoritesComponent,
    CategoryComponent,
    BrandComponent,
    ReplaceAllPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
