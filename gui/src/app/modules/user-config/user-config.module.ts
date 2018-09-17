import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './components/workspace/workspace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkspaceComponent],
  exports : [
    WorkspaceComponent
  ]
})
export class UserConfigModule { }
