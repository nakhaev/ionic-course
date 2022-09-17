import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userProfile: any;

  constructor(protected mockService: MockService) { }

  ngOnInit() {
    this.userProfile = this.mockService.getSelf(99);
  }

}
