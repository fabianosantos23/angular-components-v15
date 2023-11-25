import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardInputComponent } from './shared/form/form-inputs/standard-input/standard-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './shared/form/form-groups/address/address.component';
import { DatepickerInputComponent } from './shared/form/form-inputs/datepicker-input/datepicker-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { formErrorPipe } from './shared/form/formError.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter'

@NgModule({
  declarations: [
    AppComponent,
    StandardInputComponent,
    AddressComponent,
    DatepickerInputComponent,
    formErrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatLuxonDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
