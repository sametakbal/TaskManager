import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { WorkModule } from './work/work.module';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from './core/register/register.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptors';
import { AssignedWorksModule } from './assigned-works/assigned-works.module';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    MatSliderModule,
    WorkModule,
    FormsModule,
    RegisterModule,
    NgxSpinnerModule,
    AssignedWorksModule,
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
