import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { QuangcaoComponent } from './quangcao/quangcao.component';
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list-item', component: ListItemComponent},
  { path: 'detail-item', component: DetailItemComponent},
  { path: 'cart', component: CartComponent},

]

@NgModule({
  declarations: [
    CartComponent,
    DetailItemComponent,
    ListItemComponent,
    QuangcaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductModule { }
