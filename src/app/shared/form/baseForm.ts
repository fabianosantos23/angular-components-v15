import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from './errorMatcher';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

interface Icon {
  class?: string
  ariaHidden: boolean
  ariaLabel?: string
  fontIcon: string
  tooltip: string
}

export const defaultFormAppearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@Component({
  template: '',
})
export class BaseForm {
  //required
  @Input() inputKey = ''
  @Input() type = 'text'
  @Input() control!: FormControl

  //optional
  @Input() label = ''
  @Input() placeholder = ''
  @Input() hint = ''
  @Input() customClass = ''
  @Input() prefix = ''
  @Input() suffix = ''
  @Input() minlength?: number
  @Input() maxlength?: number
  @Input() pattern?: RegExp
  @Input() inputTooltip?: string
  @Input() iconTooltip?: string
  @Input() icon?: Icon

  @Output() iconClicked = new EventEmitter<FormControl>();

  matcher = new MyErrorStateMatcher()
  appearance = "outline"

  emitIconClicked(): void {
    this.iconClicked.emit(this.control);
  }
}
