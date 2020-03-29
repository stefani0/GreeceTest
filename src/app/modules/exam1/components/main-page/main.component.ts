import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ExamService } from '../../services/examService/exam.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListData } from '../../models/ListData';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {


  dataModel: ListData;
  form = new FormGroup({});
  model: any = {};
  modelTable: any = {};
  filterTable: any = {};
  options: FormlyFormOptions = {};
  item: ListData[] = [];
  pageVariable: boolean = false;
  sub: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExamService,
    private toasterService: ToasterService) {
    this.getData();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length === 0) {
      } else {
        if (params.pageVar == 'true') {
          this.editData(params);
        } else {
          this.addData(params);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  formDettaglio = new FormGroup({});
  fieldsTable: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'data',
          type: 'datatable',
          templateOptions: {
            columns: [
              { name: 'Action', prop: 'actions' },
              { name: 'ID', prop: 'id', },
              { name: 'Name', prop: 'first_name' },
              { name: 'Surname', prop: 'last_name' },
              { name: 'Email', prop: 'email' },
              { name: 'Ip Adress', prop: 'ip_address' }

            ],
            onClickAction: ($event) => {
              switch ($event.tipo) {
                case 'update': {
                  this.goToUpdateDataForm($event.data);
                  break;
                }
                case 'delete': {
                  this.deleteRow($event.data);
                  break;
                }
              }
            },
            limit: 5
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {

                type: 'action',
                key: 'actions',
                templateOptions: {
                  onlyDelete: true,
                  onlyUpdate: true
                }
              },
              {
                type: 'input',
                key: 'id',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'first_name',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'last_name',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'email',
                templateOptions: {
                  valueProp: 'gender',

                },
              },
              {
                type: 'input',
                key: 'birthdate',
                templateOptions: {
                  valueProp: 'birthdate',

                },
              },
              {
                type: 'input',
                key: 'ip_address',
                templateOptions: {
                  type: 'text',
                },
              },


            ]
          }
        }
      ]
    }
  ];


  getData() {
    this.service.getData().subscribe(
      result => {
       // console.log(result.success)
        this.modelTable = {
          data: result
        };
        this.filterTable = this.modelTable;
         this.toasterService.pop('success', 'Data loaded', '')     
      },
       error => this.toasterService.pop('error', 'error occured', '')
    )
  }

  goToNewDataForm() {
    const pageVar = false;
    this.router.navigate(['/dashboard/exam1/add', { newDataForm: pageVar }], { relativeTo: this.route });
  }

  goToUpdateDataForm(params: any) {
    const pageVar = true;
    params = { ...params, pageVar }
    this.router.navigate(['/dashboard/exam1/add', params], { relativeTo: this.route });

  }

  deleteRow(params) {
    this.service.deleteData(params.id).subscribe(
      (data) => {
        this.modelTable = {
          data: this.filterTable.data.filter(data => data.id !== params.id)
        };
        this.filterTable = this.modelTable;
        this.toasterService.pop('success', 'Data deleted', '')     
      },
      error => this.toasterService.pop('error', 'error occured', '')
    );
  }

  addData(params) {
    const body = {
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
      ip_address: params.ip_address
    }
    this.service.addPost(body).subscribe(
      (res) => {
        this.filterTable.data.push(res)
        this.modelTable = { ...this.filterTable },
        this.toasterService.pop('success', 'Data added', '')     
      },
      error => this.toasterService.pop('error', 'error occured', '')
      );
  }

  editData(params) {
    const idrow = params.id;
    const body = {
      id: params.id,
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
      ip_address: params.ip_address
    }
    this.service.updatePost(body).subscribe(
      (data) => {
        this.filterTable.data[params.id - 1] = data
        this.modelTable = { ...this.filterTable },
        this.toasterService.pop('success', 'Data edited', '')     
      },
      error => this.toasterService.pop('error', 'error occured', '')
    );
  }
}