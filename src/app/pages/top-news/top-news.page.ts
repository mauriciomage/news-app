import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {
  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getData();
  }

  public onRefresh(e: any) {
    this.getData();

    setTimeout(() => e.target.complete(), 2000);
  }

  private getData() {
    this.newsService.getData('top-headlines?country=us').subscribe((data: any) => {
      setTimeout(() => {
        this.news = data;
      }, 1500)
    });
  }

}
