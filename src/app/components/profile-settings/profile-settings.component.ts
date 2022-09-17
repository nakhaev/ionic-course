import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {

  @Input() userProfile;

  constructor() { }

  ngOnInit() {}

}
