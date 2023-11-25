import { Component } from '@angular/core';
import { BaseForm, defaultFormAppearance } from '../../baseForm';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'standard-input[control][inputKey]',
  providers: [
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
          [type]="type"
          matInput
          [id]="inputKey"
          [formControl]="control"
          [placeholder]="placeholder"
          [errorStateMatcher]="matcher"
          [minlength]="minlength || null"
          [maxlength]="maxlength || null"
          [pattern]="pattern || ''"
          [matTooltip]="inputTooltip || ''"
        >
        <mat-hint>{{ hint }}</mat-hint>
        <mat-error *ngIf="control.invalid">
          {{ control.errors | formError}}
        </mat-error>
      </mat-form-field>
      <div
        *ngIf="icon"
        class="icon"
        [class]="icon.class"
        (click)="emitIconClicked()"
        [matTooltip]="icon.tooltip || ''"
      >
        <mat-icon
          [attr.aria-hidden]="icon.ariaHidden"
          [attr.aria-label]="icon.ariaLabel"
          [fontIcon]="icon.fontIcon"
        ></mat-icon>
      </div>
    </div>
  `,
  styleUrls: ['./standard-input.component.scss', '../form-input-common.scss']
})
export class StandardInputComponent extends BaseForm {

}
