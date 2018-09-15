import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserAdminModule } from './modules/user-admin'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
