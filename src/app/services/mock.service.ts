import { Injectable } from '@angular/core';
import initial_clients from '../mockdata/clients.json';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private clients;

  constructor() {
    this.clients = initial_clients ? initial_clients : {};
  }

  public getClientList() {
    return this.clients;
  }

  public getClientById(id: number) {
    return this.clients.find(c => c.id == id);
  }
}
