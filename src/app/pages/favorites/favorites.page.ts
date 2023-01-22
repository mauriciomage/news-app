import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  sources = [];

  constructor(
    private storageService: StorageService
  ) { }

   ngOnInit() {
    console.log(this.storageService.get('favorite').then(val => {
      console.log("val", val);
    }));
  }

}
