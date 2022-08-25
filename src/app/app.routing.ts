import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCategoryComponent } from './pages/category/category.component';
import { PageHomeComponent } from './pages/home/home.component';
import { PageItemComponent } from './pages/item/item.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: "inicio", component: PageHomeComponent },
  { path: "categoria/:category_id", component: PageCategoryComponent },
  { path: "categoria/:category_id/item/:item_id", component: PageItemComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
