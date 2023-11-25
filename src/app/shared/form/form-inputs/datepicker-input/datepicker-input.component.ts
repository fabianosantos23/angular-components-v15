import { Component, Input } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BaseForm, defaultFormAppearance } from '../../baseForm';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LuxonDateAdapter } from '@angular/material-luxon-adapter';

@Component({
  selector: 'datepicker-input[control][inputKey]',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    /* { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }, */
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: defaultFormAppearance
    }
  ],
  template: `
    <div class="form-field" [class]="customClass">
      <mat-form-field>
        <mat-label>{{ label }}</mat-label>
        <input
          matInput
          [matDatepicker]="picker"
          [id]="inputKey"
          [formControl]="control"
          [placeholder]="placeholder"
          [errorStateMatcher]="matcher"
          [min]="minDate || null"
          [max]="maxDate || null"
          disable
        >
        <mat-hint>{{ hint }}</mat-hint>
        <mat-datepicker-toggle matIconSuffix [id]="inputKey" [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker [disabled]="isPickerDisabled"></mat-datepicker>
        <mat-error *ngIf="control.invalid">
          {{ control.errors | formError}}
        </mat-error>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./datepicker-input.component.scss', '../form-input-common.scss']
})
export class DatepickerInputComponent extends BaseForm {
  @Input() isPickerDisabled = false
  @Input() minDate?: Date
  @Input() maxDate?: Date
}


