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
import { Exam1Component } from './modules/exam1/components/exam1/exam1.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];




@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    Exam1Component,
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
