import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientDetailsPage } from './pages/client-details/client-details.page';
import { ClientsPage } from './pages/clients/clients.page';
import { SchedulePage} from './pages/schedule/schedule.page';
import { AboutPage } from './pages/about/about.page';
import { ManufacturersPage } from './pages/manufacturers/manufacturers.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    component: SchedulePage,
  },
  {
    path: 'clients',
    component: ClientsPage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'manufacturers',
    component: ManufacturersPage,
  },
  {
    path: 'clients/:id',
    component: ClientDetailsPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
