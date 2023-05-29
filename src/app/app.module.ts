import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module'; 
 
@NgModule({
  declarations: [
    AppComponent, 
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
