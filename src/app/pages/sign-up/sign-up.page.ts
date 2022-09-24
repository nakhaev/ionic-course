import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public user: any;

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

}
