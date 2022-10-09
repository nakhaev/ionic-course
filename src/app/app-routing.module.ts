import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientDetailsPage } from './pages/client-details/client-details.page';
import { ClientsPage } from './pages/clients/clients.page';
import { SchedulePage} from './pages/schedule/schedule.page';
import { AboutPage } from './pages/about/about.page';
import { ManufacturersPage } from './pages/manufacturers/manufacturers.page';
import { ProfilePage } from './pages/profile/profile.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import {ForgotPasswordPage} from './pages/forgot-password/forgot-password.page';

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
    component: ClientsPage,
    pathMatch: 'full'
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
    path: 'client/:id',
    component: ClientDetailsPage,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'sign-in',
    component: SignInPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
