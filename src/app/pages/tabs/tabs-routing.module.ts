import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'top-news',
      //   loadChildren: () => import('../top-news/top-news.module').then(m => m.TopNewsPageModule)
      // },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'headlines',
        loadChildren: () => import('../headlines/headlines.module').then(m => m.HeadlinesPageModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('../sources/sources.module').then(m => m.SourcesPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'sources/:id',
        loadChildren: () => import('../source/source.module').then(m => m.SourcePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
