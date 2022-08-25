import { PageHomeComponent } from './pages/home/home.component';
import { PageCategoryComponent } from './pages/category/category.component';
import { PageItemComponent } from './pages/item/item.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

export const Pages = [
  PageHomeComponent,
  PageCategoryComponent,
  PageItemComponent,
  PageNotFoundComponent
]

import { AppComponent } from './app.component';

export const Bootstrap = AppComponent

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const AngularModules = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
]

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

export const Modules = [
    AngularModules,
    SharedModule,
    AppRoutingModule
]