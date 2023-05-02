import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  sources: any;
  fakeSources = new Array(10);
  term: string = '';
  bills = [{description: 'compra mercadona', amount: 25.5, date: '18/04/2023' }];

  constructor(
    private service: NewsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // this.sources = this.service.getData('sources').subscribe((resp: any) => {
    //   this.sources = resp['sources'];
    // });

  }

  public favorite(source: {}): void {
    this.storageService.get('favorite').then((val: any) => {
      let items = [];
      if(val !== null) {
        items = JSON.parse(val);
      }
      items.push(source);
      this.storageService.set('favorite', JSON.stringify(items));
    });
  }

}
