import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exam1RoutingModule } from './exam1-routing.module';
import { Exam1Component } from './components/exam1/exam1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { Exam2Component } from './components/exam2/exam2.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { Exam3Component } from './components/exam3/exam3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    Exam1Component,
    Exam2Component,
    Exam3Component
  ],
  imports: [
    CommonModule,
    Exam1RoutingModule,   
    ReactiveFormsModule,
    FormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    RxReactiveFormsModule,
  
      
    
  ]
})
export class Exam1Module { }
