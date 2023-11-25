import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address[controlKey]',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ],
  template: `
    <fieldset [formGroupName]="controlKey">
      <legend>{{ label }}</legend>
      <standard-input
        [inputKey]="'zipCode'"
        [label]="'Zip Code'"
        [control]="zipCode"
      ></standard-input>
      <standard-input
        [inputKey]="'street'"
        [label]="'Street'"
        [control]="street"
      ></standard-input>
    </fieldset>
  `,
  styleUrls: ['./address.component.scss'],

})
export class AddressComponent implements OnInit, OnDestroy {
  @Input() controlKey = ''
  @Input() label = ''
  parentContainer = inject(ControlContainer)
  zipCode!: FormControl
  street!: FormControl

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey,
    new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl('')
    }))
    const localForm = this.parentFormGroup.controls[this.controlKey] as FormGroup
    this.zipCode = localForm.controls['zipCode'] as FormControl
    this.street = localForm.controls['street'] as FormControl
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey)
  }
}
