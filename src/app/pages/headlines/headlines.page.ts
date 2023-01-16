import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  categories: any[] = ['India', 'World', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science'];
  newsByCategory: [] = [];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getCategoryData(this.categories[0].toLowerCase());
  }

  public onGetCategoryData(category: string): void {
    this.getCategoryData(category);
  }

  private getCategoryData(category: string): void {
    this.newsService.getData(`everything?q=${category.toLowerCase()}`).subscribe((data: any) => {
      setTimeout(() => {
        this.newsByCategory = data;
      }, 1000)
    });
  }

}
