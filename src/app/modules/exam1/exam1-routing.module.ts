import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact-page/contact.component';
import { MainComponent } from './components/main-page/main.component';
import { AddNewDataComponent } from './components/add-edit-data-page/add-edit-data.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Exam 1'
    },
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent,
        data: {
          title: 'Main Page'
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Page'
        },
      },
      {
        path: 'add',
        component: AddNewDataComponent,
        data: {
          title: 'Main Page'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exam1RoutingModule { }
