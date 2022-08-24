import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const AngularModules = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
]

import { AppRoutingModule } from '../app.routing';

export const ExternalModules = [
    AngularModules,
    AppRoutingModule
]