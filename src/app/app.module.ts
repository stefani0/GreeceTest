import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import {
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  AppAsideModule,
  AppBreadcrumbModule,
} from '@coreui/angular';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToasterModule } from 'angular2-toaster';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];


@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
   // ToastrModule.forRoot(), // ToastrModule added
    ToasterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
