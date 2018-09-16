import { NgModule } from '@angular/core';
import { AvamTabPanelComponent } from './avam-tab-panel.component';
import { TabComponent } from './tab/tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvamTabPanelComponent, TabComponent],
  exports: [AvamTabPanelComponent, TabComponent]
})
export class AvamTabPanelModule { }
