import { Injectable } from '@angular/core';

import { IClient } from '../interfaces/IClient';

import initial_clients from '../mockdata/clients.json';
import initial_user from '../mockdata/userProfile.json';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private clients: IClient[];
  private user: any;

  constructor() {
    this.clients = initial_clients ? initial_clients : [];
    this.user = initial_user ? initial_user : null;
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
}
