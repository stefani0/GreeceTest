import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Model } from '../../models/model';
import { evaluate } from 'mathjs'
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'app-exam2',
  templateUrl: './exam2.component.html'
})
export class Exam2Component implements OnInit {
  public form: FormGroup;
  regex = /^(\d[-+/*()]\d+(\.\d+)?)*/gm;

  storeValue: any;
  sucess: any;
  expr: any;
  numCheck: any;
  amount: any;
  history: History[] = [];



  constructor(
    private formBuilder: RxFormBuilder,
    private serviciCalc: CalcService
  ) {
    
   }

  ngOnInit() {

    const sfm = new Model();
    this.creaForm(sfm);

    this.getData();
  }

  creaForm(sfm) {
    this.form = this.formBuilder.formGroup(sfm);
  }

  validate(event) {

    this.storeValue = event.target.value;
    this.expr = event.target.value.match(this.regex);
    this.numCheck = this.regex.test(this.storeValue);

    if (this.expr) {
      this.amount = evaluate(this.storeValue);
      this.form.get('result').setValue(this.amount);

      this.form.get('area').setValue(this.history);
      this.history.push(this.storeValue);


    }
    else {
      console.log('error');
    }


  }

  getData() {
    this.serviciCalc.getServizi().subscribe(
      res => {
        console.log(res);
        this.form.get('random').setValue(res);
      }
    )
  }


}
