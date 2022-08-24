import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category/category.component';
import { HomePageComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item/item.component';
import { PageNotFoundPageComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "inicio", component: HomePageComponent },
  { path: "categoria/:category_id", component: CategoryPageComponent },
  { path: "categoria/:category_id/item/:item_id", component: ItemPageComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: '**', component: PageNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
