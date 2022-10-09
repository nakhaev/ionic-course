import { Injectable } from '@angular/core';

import { IClient } from '../interfaces/IClient';

import initial_clients from '../mockdata/clients.json';
import initial_user from '../mockdata/userProfile.json';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private clients: IClient[];
  private user: any;
  private isLoggedIn: boolean;

  constructor(protected router: Router) {
    this.clients = initial_clients ? initial_clients : [];
    this.user = initial_user ? initial_user : null;
    this.isLoggedIn = false;
  }

  public getClientList(): IClient[] {
    return this.clients;
  }

  public getClientById(id: number): IClient {
    return this.clients.find(c => c.id == id);
  }

  public getSelf(id: number): IClient {
    return this.user;
  }

  public login(user) {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  public logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/sign-in']);
  }

  public checkLoggedIn() {
    return this.isLoggedIn;
  }

  public updateProfile(userProfile) {
    this.user = userProfile;
  }

  public updateUserProfile(client) {
    const clients  = this.clients.filter(item => item.id !== client.id);
    clients.push(client);
    this.clients = clients;
  }

  public addNewClient(client) {
    client.id = this.clients.length + 1;
    this.clients.push(client);
  }
}
