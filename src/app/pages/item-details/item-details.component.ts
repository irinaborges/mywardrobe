import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/Clothing.service';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/services/Items.model';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  
  items: Items | any;
  
  constructor(private route: ActivatedRoute, private clothing: ClothingService) {
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.clothing.getItem(id).subscribe((items) => {
        this.items = items[0]
      })
  })
}

changeFavorite(id: number) {
  this.clothing.toggleFavorite(id)
}

favourite(id: number) {
  return this.clothing.isFavorite(id)
}
}