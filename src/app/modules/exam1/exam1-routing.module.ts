import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exam1Component } from './components/exam1/exam1.component';
import { Exam2Component } from './components/exam2/exam2.component';
import { Exam3Component } from './components/exam3/exam3.component';


const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Exam 1 Test 1'
    },
    children: [
    {  
      path: 'test1',
      component : Exam1Component,
      data: {
        title: 'Exam 1'
      },
    },
    {  
      path: 'test2',
      component : Exam2Component,
      data: {
        title: 'Exam 2'
      },
    },
    {  
      path: 'test3',
      component : Exam3Component,
      data: {
        title: 'Exam 3'
      },
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exam1RoutingModule { }
