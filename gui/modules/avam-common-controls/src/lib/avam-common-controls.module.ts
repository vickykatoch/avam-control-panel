import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutoCompleteComponent
  ],
  exports: [
    AutoCompleteComponent
  ]
})
export class AvamCommonControlsModule { }
