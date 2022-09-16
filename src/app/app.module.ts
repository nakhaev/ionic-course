import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientsPage } from './pages/clients/clients.page';
import { ClientDetailsPage } from './pages/client-details/client-details.page';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './pages/about/about.page';
import { ManufacturersPage } from './pages/manufacturers/manufacturers.page';
import { SchedulePage } from './pages/schedule/schedule.page';
import {TopMenuComponent} from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ClientCardComponent,
    ClientsPage,
    ClientDetailsPage,
    ClientListComponent,
    AboutPage,
    ManufacturersPage,
    SchedulePage,
    TopMenuComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
