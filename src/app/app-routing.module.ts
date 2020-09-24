import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
