import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit, ChangeDetectorRef, ViewChildren, AfterViewChecked } from '@angular/core';
import { FormlyFieldConfig, FieldArrayType } from '@ngx-formly/core';
import { DatatableComponent, DataTableFooterComponent, DataTablePagerComponent, TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-formly-datatable',
  templateUrl: 'datatable-form.component.html'
})

export class DatatableFormComponent extends FieldArrayType implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('table', { static: true }) table: DatatableComponent;
  @ViewChildren('footer') footer: DataTableFooterComponent;
  @ViewChildren('pager') pager: DataTablePagerComponent;

  @ViewChild('defaultColumn', { static: true }) public defaultColumn: TemplateRef<any>;

  selected = [];
  row: any;
  countElements: number;
  totalMessage = 'Totale:';
  public data: Array<any>;
 

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.to.columns.forEach(column => column.cellTemplate = this.defaultColumn);
  }

  ngAfterViewInit() {
    this.table.bodyComponent.updatePage = function (direction: string): void {
      let offset = this.indexes.first / this.pageSize;

      if (direction === 'up') {
        offset = Math.ceil(offset);
      } else if (direction === 'down') {
        offset = Math.floor(offset);
      }

      if (direction !== undefined && !isNaN(offset)) {
        this.page.emit({ offset });
      }
    };
  }

  ngAfterViewChecked() {
    if (!this.countElements && this.to.countElements || this.to.countElements !== this.countElements) {
      this.countElements = this.to.countElements;
      this.cdr.detectChanges();
    }
  }

  controlForNotPaginated(): number { 
   if (this.countElements) {
     return this.countElements;
   }
   return this.table.rowCount;
  }

  onChangePage($event) {
    if (this.to.onChangePage) {
      this.to.onChangePage($event);
    } else {
      this.table.onFooterPage($event); 
    }
  }

  getField(field: FormlyFieldConfig, column: TableColumn, rowIndex: number): FormlyFieldConfig {
    const v_field = field.fieldGroup[rowIndex].fieldGroup.find(f => f.key === column.prop);
    if (v_field.type === 'action') {

      v_field.templateOptions.onClick = ($event) => {
        if (this.to.onClickAction) {
          setTimeout(() => {
            this.to.onClickAction({ tipo: $event, data: this.row });
          }, 130);
        }
      };
    }
    return v_field;
  }

  onSelect(event) {
    if (this.to.selectFN) {
      this.to.selectFN(event);
    }
  }

  onActivate(event) {
    if (event.type === 'click') {
      this.row = event.row;
    }
  }
  onSort(e) {

  }
}
