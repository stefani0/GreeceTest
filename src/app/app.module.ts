import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';

import {
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  AppAsideModule,
  AppBreadcrumbModule,
} from '@coreui/angular';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { LoginComponent } from './core/components/login/login.component';
import { DatatableFormComponent } from './core/forms/datatable-form/datatable-form/datatable-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { formlyConfig } from './core/utility/configs';
import { ButtoniFormComponent } from './core/forms/buttoni-form/buttoni-form.component';
import {  PaginationModule } from 'ngx-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Error404Component } from './core/components/error404/error404.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];


@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    LoginComponent,
    DatatableFormComponent,
    ButtoniFormComponent,
    Error404Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppSidebarModule,
    AppHeaderModule,
    AppFooterModule,
    AppBreadcrumbModule.forRoot(),
    FormlyModule.forRoot(formlyConfig),
    FormsModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToasterModule.forRoot(), // ToastrModule added  
    NgxDatatableModule,
    PaginationModule.forRoot()
  ],
  exports : [  
    AppAsideModule,
    AppSidebarModule,
    AppHeaderModule,
    AppFooterModule,
    FormsModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToasterModule,    
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
