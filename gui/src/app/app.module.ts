import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserAdminModule } from './modules/user-admin'
import { AppComponent } from './app.component';
import { AvamTabPanelModule } from 'avam-tab-panel';
import { routeConfig } from './router-config';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogAnalyzerModule } from './modules/log-analyzer';
import { UserConfigModule } from './modules/user-config';



@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    UserAdminModule,
    AvamTabPanelModule,
    LogAnalyzerModule,
    UserConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
