import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public user: any;

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.user = {
      email: ''
    };
  }

}
