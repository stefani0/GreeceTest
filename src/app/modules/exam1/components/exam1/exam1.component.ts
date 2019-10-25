import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { evaluate } from 'mathjs'
import { ToastrService } from 'ngx-toastr';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
})
export class Exam1Component implements OnInit {

  form = new FormGroup({});
  model: any = {};
  regex = /^(\d[-+/*()]\d+(\.\d+)?)*/gm;
  storeValue: any = '';
  expr: any;
  numCheck: any;
  amount: any;

  fields1: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          className: 'col-md-4',
          type: 'input',
          key: 'idArea',
          templateOptions: {
            type: 'text',
            value: 'id',
          }
        },
        {
          className: 'col-md-4',
          type: 'input',
          key: 'Result',
          templateOptions: {
            type: 'text',
            value: 'Result'
          }
        }
      ]
    }
  ]


  constructor() {
  }

  ngOnInit() {

  }

  validate() {


    this.storeValue = this.form.value['idArea']; //get value from input
    this.expr = this.form.value['idArea'].match(this.regex); //match if its any different symbol rather that in regex
    this.numCheck = this.regex.test(this.storeValue); // test, boolean
   


    console.log(this.expr)
    if (this.numCheck) {
      this.amount = evaluate(this.storeValue);
      this.fields1[0].fieldGroup[1].templateOptions.placeholder = this.amount

    }
    else {
      console.log('error');
    }

  }

}


