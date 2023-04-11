import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/services/Clothing.service';
import { Items } from 'src/app/services/Items.model';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
faHeart = faHeart;
faHeartSolid = faHeartSolid;
faMagnifyingGlass = faMagnifyingGlass;

searchText!: string;
items: Items[] = [];

constructor(private route: ActivatedRoute, private clothing: ClothingService) {
}

ngOnInit(): void {
  this.clothing.getItems().subscribe((items) => {
    this.items = items as Items[];
    })
  }

  changeFavorite(id: number) {
    this.clothing.toggleFavorite(id)
  }

  favourite(id: number) {
    return this.clothing.isFavorite(id)
  }
}
