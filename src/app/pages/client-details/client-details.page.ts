import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../../services/mock.service';
import { IClient } from '../../interfaces/IClient';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  public clientId: number;
  public client: IClient;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected mockService: MockService,
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = params.id;
      if (this.clientId) {
        console.log('this.clientId', this.clientId);
        this.client = this.mockService.getClientById(this.clientId);
      }
    });
  }

}
