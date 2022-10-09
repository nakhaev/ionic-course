import { Component, OnInit, Input } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {

  @Input() client;

  public clientData = {};

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.clientData = { ...this.client};
  }

  public updateClientProfile() {
    this.mockService.updateUserProfile(this.clientData);
  }

  public clearChanges() {
    this.clientData = { ...this.client};
  }

}
