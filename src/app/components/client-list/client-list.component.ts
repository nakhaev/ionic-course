import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  public clients;
  public displayClients;
  public search = '';

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.clients = this.mockService.getClientList();
    this.displayClients = this.clients;
  }

  public searchClients() {
    if (!this.search) {
      this.displayClients = this.clients;
    } else {
      this.displayClients = this.clients.filter(c =>
        c.firstName.toUpperCase().includes(this.search.toUpperCase()) ||
        c.lastName.toUpperCase().includes(this.search.toUpperCase()) ||
        c.phone.includes(this.search)
      );
    }
  }

}
