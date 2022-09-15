import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPageRoutingModule } from './clients-routing.module';

import { ClientsPage } from './clients.page';
import { ClientListComponent } from '../../components/client-list/client-list.component';
import { ClientCardComponent } from '../../components/client-card/client-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsPageRoutingModule,
  ],
  declarations: [ClientsPage, ClientListComponent, ClientCardComponent]
})
export class ClientsPageModule {}
