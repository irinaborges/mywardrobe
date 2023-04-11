import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClothingService } from '../../services/Clothing.service';
import { Items } from '../../services/Items.model';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faMagnifyingGlass = faMagnifyingGlass;
  
  searchText!: string;

  favorites_list: Items[] = [];

  constructor(private route: ActivatedRoute, private clothing: ClothingService) { }

  ngOnInit(): void {
    this.clothing.getFavorites().subscribe((favorites_list) => {
      this.favorites_list = favorites_list as Items[]
    });
  }

  changeFavorite(id: number) {
    this.clothing.toggleFavorite(id)
  }

  favourite(id: number) {
    return this.clothing.isFavorite(id)
  }
}
