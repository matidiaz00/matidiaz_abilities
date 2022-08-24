import { NgModule } from '@angular/core';

import { AngularModules, ExternalModules } from './configurations/modules';
import { Bootstrap, Components, Pages } from './configurations/components';

@NgModule({
  declarations:     [ Components, Pages ],
  imports:          [ AngularModules, ExternalModules ],
  bootstrap:        [ Bootstrap ],
})
export class AppModule { }
