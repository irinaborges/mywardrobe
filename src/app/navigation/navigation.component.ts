import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/services/Clothing.service';
import { Categories, Items } from 'src/app/services/Items.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

category: Categories[] = [];

constructor(private route: ActivatedRoute, private clothing: ClothingService) {
}

ngOnInit(): void {
  this.clothing.getCategories().subscribe((category) => {
    this.category = <Categories[]> category; 
    console.log(this.category)
    })
  }
}
