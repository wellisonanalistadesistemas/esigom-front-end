/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';

import { NbLayoutDirectionService } from './direction.service';
import { NbIconModule } from './icon/icon.module';
import { NbMenuComponent, NbMenuItemComponent } from './menu.component';
import { NbMenuInternalService, NbMenuService } from './menu.service';
import { NbSharedModule } from './shared.module';


@NgModule({
  imports: [
    NbSharedModule,
    NbIconModule,
    NbBadgeModule
  ],
  declarations: [
    NbMenuComponent,
    NbMenuItemComponent
  ],
  exports: [
    NbMenuComponent,
    NbMenuItemComponent
  ],
  providers: [
    NbLayoutDirectionService
  ]
})
export class NbMenuModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NbMenuModule,
      providers: [
        NbMenuService,
        NbMenuInternalService
      ],
    };
  }
}
