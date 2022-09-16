import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {MockService} from '../../services/mock.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  public clientId: number;
  public client: object;

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
