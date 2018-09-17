import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogDashboardComponent } from './components/log-dashboard/log-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogDashboardComponent],
  exports : [ LogDashboardComponent]
})
export class LogAnalyzerModule { }

