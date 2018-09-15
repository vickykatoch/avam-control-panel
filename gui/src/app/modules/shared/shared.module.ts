import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateFormatterPipe],
  exports: [
    DateFormatterPipe
  ]
})
export class SharedModule { }
