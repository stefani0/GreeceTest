
import { ConfigOption } from '@ngx-formly/core';
import { DatatableFormComponent } from '../forms/datatable-form/datatable-form/datatable-form.component';
import { ButtoniFormComponent } from '../forms/buttoni-form/buttoni-form.component';


export const formlyConfig: ConfigOption = {

    types: [
        {
            name: 'datatable',
            component: DatatableFormComponent,
            defaultOptions: {
                templateOptions: {
                    columnMode: 'force',
                    rowHeight: 'auto',
                    headerHeight: '40',
                    footerHeight: '40',
                    limit: '10',
                    scrollbarH: 'true',
                    reorderable: 'reorderable',
                },
            },
        },
        {
            name: 'action',
            component: ButtoniFormComponent,
            defaultOptions: {
                templateOptions: {
                    onlyDelete: true,
                    onlyUpdate: true,
                },
            },
        },

    ]
};

