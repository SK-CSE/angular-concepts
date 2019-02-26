import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveformRoutingModule
  ]
})
export class ReactiveformModule { }
