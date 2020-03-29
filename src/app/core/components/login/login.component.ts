import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public fields: FormlyFieldConfig[];
  public model: any;
  loggedUser: User;
  private toasterService: ToasterService;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    toasterService: ToasterService
    ) {
      this.toasterService = toasterService;
     }

  ngOnInit() {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [{
      key: 'username',
      type: 'input',
      templateOptions: {
        placeholder: 'Username',
        required: true,
        addonLeft: {
          class: 'icon-user',
        },
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        placeholder: 'Password',
        required: true,
        addonLeft: {
          class: 'icon-lock',
        },
      }
    }];
  }

  onSubmit(data) {
    this.loggedUser = {
      username: 'admin',
      pass: 'admin'
    };
    var key: string = 'token';
  
    if (data.form.value.username == this.loggedUser.username && data.form.value.password == this.loggedUser.pass) {
      localStorage.setItem(key, data.form.value.password);
      this.toasterService.pop('success', 'Login Sucess', '');
      // const myItem = localStorage.getItem(key);        
      setTimeout(() => { 
        this.router.navigate(['/dashboard'], { relativeTo: this.route })
       }, 1000);
     

    }
    else {
      console.log('toast to log in')
      this.popToast();
    }    
  }
  popToast() {
    this.toasterService.pop('error', 'Login Error!', 'Check credentials');
}


}

