import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListData } from '../../models/ListData';

@Component({
  selector: 'add-edit-data',
  templateUrl: './add-edit-data.component.html'

})
export class AddNewDataComponent implements OnInit, OnDestroy, AfterViewInit {

  dataModel: ListData;
  public form: FormGroup;
  public fields: FormlyFieldConfig[];
  public model: any;
  sub: any;
  pageVar: boolean = false;
  par: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.sub = this.route.params.subscribe(params => {
      this.par = params;
      this.pageVar = params.pageVar;
      if (params.pageVar) {
        console.log('is true, get data');
        this.putData(params);
        this.cdRef.detectChanges();
      }
      else {
        this.cdRef.detectChanges();
        console.log('is false, add data')
      }
    });
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
          key: 'ip_address',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'IP',
            required: true,

          }
        },
      ],
    }]
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  putData(params) {
    this.form.get('first_name').setValue(params.first_name),
      this.form.get('last_name').setValue(params.last_name),
      this.form.get('ip_address').setValue(params.ip_address),
      this.form.get('email').setValue(params.email)
  }



  onSubmit() {

    this.dataModel = {
      first_name: this.form.get('first_name').value,
      last_name: this.form.get('last_name').value,
      ip_address: this.form.get('ip_address').value,
      email: this.form.get('email').value,
      pageVar: false
    }
    this.router.navigate(['/dashboard/exam1/main', this.dataModel]);

  }


  update() {

    this.dataModel = {
      id: this.par.id,
      first_name: this.form.get('first_name').value,
      last_name: this.form.get('last_name').value,
      ip_address: this.form.get('ip_address').value,
      email: this.form.get('email').value,
      pageVar: true
    }
    this.router.navigate(['/dashboard/exam1/main', this.dataModel]);

  }

}
