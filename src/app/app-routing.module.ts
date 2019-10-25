import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'HOME'
    },
    children: [
      {
        path: 'exam1',
        loadChildren: './modules/exam1/exam1.module#Exam1Module'
      },     
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
