import { Injectable } from '@angular/core';

import { IClient } from '../interfaces/IClient';

import initial_clients from '../mockdata/clients.json';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private clients: IClient[];

  constructor() {
    this.clients = initial_clients ? initial_clients : [];
  }

  public getClientList(): IClient[] {
    return this.clients;
  }

  public getClientById(id: number): IClient {
    return this.clients.find(c => c.id == id);
  }
}
