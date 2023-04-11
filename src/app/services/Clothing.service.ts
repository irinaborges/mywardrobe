import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Items } from './Items.model';

const BASE_URL = "https://dev-project-upskill-grupo05.pantheonsite.io/"

@Injectable({
    providedIn: 'root'
  })
  
  export class ClothingService {

    favorites: number[] = JSON.parse(localStorage.getItem("my_favorites") || "[]")

    constructor(private http: HttpClient) {
    }

    getItem(id: number) {
      return this.http.get<Items[]>(BASE_URL + "item/" + id)
    }

    getItems() {
        return this.http.get(BASE_URL + "items")
      }

    getCategoryItens(category: string) {
        return this.http.get<Items[]>(BASE_URL + "category/" + category)
      }

      getBrandItens(brand: string) {
        return this.http.get<Items[]>(BASE_URL + "brand/" + brand)
      }

      getCategories() {
        return this.http.get(BASE_URL + "categories")
      }

      getFavorites() {
        return new Observable(observer => {
          this.http.get<Items[]>(BASE_URL + "items").subscribe((items: Items[]) => {
            observer.next(items.filter((item: Items) => {
              return this.favorites.includes(item.id)
            }))
          });
        })
      }
    
      toggleFavorite(id: number) {
        if (!this.isFavorite(id)) {
          this.favorites.push(id)
        } else {
          let index = this.favorites.indexOf(id);
          this.favorites.splice(index, 1)
        }
        localStorage.setItem("my_favorites", JSON.stringify(this.favorites));
      }
    
      isFavorite(id: number) {
        return this.favorites.includes(id);
      }
  }