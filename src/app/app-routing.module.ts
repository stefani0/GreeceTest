import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { Error404Component } from './core/components/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: Error404Component,
    data: {
      title: 'Page 404'
    }
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
        // loadChildren: './modules/exam1/exam1.module#Exam1Module'
        loadChildren: () => import('./modules/exam1/exam1.module').then(m => m.Exam1Module)

      },

    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
