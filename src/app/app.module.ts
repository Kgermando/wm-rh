import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module'; 
import { HeaderComponent } from './common/header/header.component';
import { CustomizerSettingsComponent } from './common/customizer-settings/customizer-settings.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { FooterComponent } from './common/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    CustomizerSettingsComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    InternalErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    
    NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
    }),
    
  ], 
  providers: [
      DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
