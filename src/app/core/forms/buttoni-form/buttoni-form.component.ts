import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-buttoni-form',
  templateUrl: './buttoni-form.component.html'
})
export class ButtoniFormComponent extends FieldType {
  constructor() {
    super();
  }

  update(data) {
    if (this.to.onClick) {
      this.to.onClick('update');
    }
  }

  delete(data) {
    if (this.to.onClick) {
      this.to.onClick('delete');
    }
  }
}
