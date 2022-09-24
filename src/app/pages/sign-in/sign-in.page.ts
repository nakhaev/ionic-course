import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public user: any;

  constructor(
    protected mockService: MockService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  public login() {
    console.log('logIn');
    this.mockService.login(this.user);
    // if (this.mockService.checkLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
  }

}
