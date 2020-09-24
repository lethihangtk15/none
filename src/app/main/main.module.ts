import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  { path: '', component: MainComponent},
]

@NgModule({
  declarations: [
    MainComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule { }
