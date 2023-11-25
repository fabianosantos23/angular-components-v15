import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnsubComponent } from './shared/unsub/unsub.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  template: `
    <h1>Components</h1>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <standard-input
        [inputKey]="'displayName'"
        [label]="'Display Name'"
        [control]="form.controls.displayName"
      ></standard-input>
      <standard-input
        [inputKey]="'iconInput'"
        [label]="'Icon Input'"
        [control]="form.controls.iconInput"
        [icon]="{ariaHidden: true, fontIcon: 'home', tooltip: 'teste'}"
      ></standard-input>
      <standard-input
        [inputKey]="'inputKey'"
        [label]="'Email'"
        [control]="form.controls.email"
        [type]="'email'"
      ></standard-input>
      <datepicker-input
        [inputKey]="'date'"
        [label]="'Date'"
        [control]="form.controls.date"
      ></datepicker-input>
      <datepicker-input
        [inputKey]="'inputDisableDate'"
        [label]="'Input Disable Date'"
        [control]="form.controls.inputDisableDate"
      ></datepicker-input>
      <datepicker-input
        [inputKey]="'allDisableDate'"
        [label]="'All Disable Date'"
        [control]="form.controls.inputDisableDate"
        [isPickerDisabled]="true"
      ></datepicker-input>
      <app-address [controlKey]="'deliveryAddress'" [label]="'Delivery Address'"></app-address>
      <app-address [controlKey]="'billingAddress'" [label]="'Billing Address'"></app-address>
      <button>Submit</button>
    </form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnsubComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    displayName: new FormControl(''),
    iconInput: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl<DateTime | null>(null),
    inputDisableDate: new FormControl<DateTime | ''>({value: '', disabled: true}),
    allDisableDate: new FormControl<DateTime | ''>({value: '', disabled: true})
  })

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.form.valueChanges
    .pipe(this.unsubOnDestroy())
    .subscribe((value) => {
      if (value.date) {

        console.log(value.date.toISODate())
      }
    })
  }

  submit() {
    console.log(this.form.value)
    this.form.reset()
  }

  override ngOnDestroy(): void {
    super.unsubOnDestroy()
  }
}
