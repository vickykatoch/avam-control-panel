import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserAdminModule } from './modules/user-admin'
import { AppComponent } from './app.component';
import { AvamTabPanelModule } from 'avam-tab-panel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserAdminModule,
    AvamTabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
