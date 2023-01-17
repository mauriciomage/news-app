import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  sources: any;
  fakeSources = new Array(10);
  term: string = '';

  constructor(
    private service: NewsService
  ) { }

  ngOnInit() {
    this.sources = this.service.getData('sources').subscribe((resp: any) => {
      this.sources = resp['sources'];
    });
  }

}
