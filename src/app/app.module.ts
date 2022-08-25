import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Bootstrap, Modules, Pages } from './app.config';

@NgModule({
  declarations:     [ Bootstrap, Pages ],
  imports:          [ Modules ],
  bootstrap:        [ Bootstrap ],
  schemas:          [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }