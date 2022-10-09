import { Component, OnInit, ViewChild } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  public message = 'test';

  public defaultClient = {
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    mail: '',
    birthday: '',
    instagram: '',
    prevVisit: '',
    nextVisit: '',
    photo: ''
  };

  public client = {
    gender: '',
    photo: ''
  };

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.resetClient();
  }

  cancel() {
    console.log('cancel');
    this.resetClient();
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log('confirm');
    this.setDefAvatar();
    this.mockService.addNewClient(this.client);
    this.resetClient();
    this.modal.dismiss(this.client, 'confirm');
  }

  onWillDismiss(event: Event) {
    console.log('onWillDismiss');
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  private resetClient() {
    this.client = { ...this.defaultClient};
  }

  private setDefAvatar() {
    if (this.client.photo !== '') { return; }
    switch(this.client.gender) {
      default: this.client.photo = 'assets/img/other-def-ava.jpeg'; break;
      case 'male' : this.client.photo = 'assets/img/male-def-ava.png'; break;
      case 'female' : this.client.photo = 'assets/img/female-def-ava.jpeg'; break;
    }
  }
}
