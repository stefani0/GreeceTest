import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  public form: FormGroup;
  public fields: FormlyFieldConfig[];
  public model: any;


  constructor(
    private formBuilder: RxFormBuilder
  ) {
    
   }

  ngOnInit() {

    this.form = new FormGroup({});
    this.model = {};
    this.fields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          key: 'first_name',
          type: 'input',
          templateOptions: {
            placeholder: 'Name',
            required: true,
          },
        },

        {
          className: 'col-sm-6',
          key: 'last_name',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Surname',
            required: true,

          }
        },
        {
          className: 'col-sm-6',
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Email',
            required: true,

          }
        },
        {
          className: 'col-sm-6',
          key: 'mobile',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Mobile',
            required: true,

          }
        },
      ],
    }]
  }


}
