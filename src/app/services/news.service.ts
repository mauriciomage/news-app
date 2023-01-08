import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  loading: any; 

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) { }

  async showLoading() {
    this.loading = await this.loadingController.create({
      duration: 5000,
    });
    return await this.loading.present();
  }

  public getData(url: string) {
    this.showLoading();
    return this.http.get(`${apiUrl}/${url}`, {params});
  }
}
