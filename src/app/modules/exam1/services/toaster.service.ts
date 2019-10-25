import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
 
@Injectable()
export class MyToasterService {
 
    options: IndividualConfig;
 
    constructor(
        private toastr: ToastrService
    ) {
        this.options = this.toastr.toastrConfig;
        this.options.positionClass = 'toast-top-center';
        this.options.timeOut = 1500;
    }
 
    showToast(title, message, type) {
        this.toastr.show(message, title, this.options, 'toast-' + type);
    }
 
}