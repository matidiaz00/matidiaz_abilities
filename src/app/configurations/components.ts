import { HomePageComponent } from './../pages/home/home.component';
import { CategoryPageComponent } from './../pages/category/category.component';
import { ItemPageComponent } from './../pages/item/item.component';

export const Pages = [
  HomePageComponent,
  CategoryPageComponent,
  ItemPageComponent
]

import { AppComponent } from './../app.component';
import { BannerComponent } from './../components/banner/banner.component';
import { FilterDesktopComponent } from './../components/filter-desktop/filter-desktop.component';
import { FilterItemComponent } from './../components/filter-item/filter-item.component';
import { FilterMobileComponent } from './../components/filter-mobile/filter-mobile.component';
import { HeaderComponent } from './../components/header/header.component';
import { ItemComponent } from './../components/item/item.component';
import { LogoComponent } from './../components/logo/logo.component';

export const Components = [
  AppComponent,
  BannerComponent,
  FilterDesktopComponent,
  FilterItemComponent,
  FilterMobileComponent,
  HeaderComponent,
  ItemComponent,
  LogoComponent
]

export const Bootstrap = AppComponent