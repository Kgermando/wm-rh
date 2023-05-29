import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './common/header/header.component';
import { CustomizerSettingsComponent } from './common/customizer-settings/customizer-settings.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    CustomizerSettingsComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    InternalErrorComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
  ]
})
export class LayoutsModule { }
