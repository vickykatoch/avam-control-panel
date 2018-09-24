import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CommonModule } from '@angular/common';
import { DropDownSuggestComponent } from './dd-suggest/dd-suggest.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutoCompleteComponent,
    DropDownSuggestComponent
  ],
  exports: [
    AutoCompleteComponent,
    DropDownSuggestComponent
  ]
})
export class AvamCommonControlsModule { }
