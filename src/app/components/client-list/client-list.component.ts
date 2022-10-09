import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { Router } from '@angular/router';
import { IClient } from '../../interfaces/IClient';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  public clients: IClient[];
  public displayClients: IClient[];
  public search = '';

  constructor(
    protected mockService: MockService,
    protected router: Router
  ) {}

  ngOnInit() {
    this.clients = this.mockService.getClientList();
    this.displayClients = [ ...this.clients];
    console.log('this.displayClients', this.displayClients);
  }

  public searchClients() {
    if (!this.search) {
      this.displayClients = [ ...this.clients];
    } else {
      this.displayClients = this.clients.filter(c =>
        c.firstName.toUpperCase().includes(this.search.toUpperCase()) ||
        c.lastName.toUpperCase().includes(this.search.toUpperCase()) ||
        c.phone.includes(this.search)
      );
    }
  }

  public goToClientProfile(id: number) {
    this.router.navigate([`/client/${id}`]);
  }
}
